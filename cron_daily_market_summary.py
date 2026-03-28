#!/usr/bin/env python3
import requests
import json
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
import re
import pytz

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fetch_json(url, params=None):
    try:
        resp = requests.get(url, headers=HEADERS, params=params, timeout=10)
        resp.raise_for_status()
        return resp.json()
    except Exception as e:
        return {'error': str(e)}

def fetch_text(url, params=None):
    try:
        resp = requests.get(url, headers=HEADERS, params=params, timeout=10)
        resp.raise_for_status()
        return resp.text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def get_commodity_data(ticker):
    """
    Fetch data from Yahoo Finance chart API.
    Returns latest price, change, change_pct.
    """
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{ticker}?interval=1d&range=2d"
    data = fetch_json(url)
    if 'error' in data or not data.get('chart'):
        return {'error': data.get('error', 'No data')}
    result = data['chart']['result'][0]
    meta = result.get('meta', {})
    curr = meta.get('regularMarketPrice')
    prev = meta.get('chartPreviousClose')
    if curr is None or prev is None:
        return {'error': 'Insufficient data'}
    change = curr - prev
    change_pct = (change / prev) * 100
    return {
        'price': round(curr, 2),
        'change': round(change, 2),
        'change_pct': round(change_pct, 2)
    }

def get_index_data(ticker):
    """Fetch index level and change from Yahoo Finance."""
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{ticker}?interval=1d&range=2d"
    data = fetch_json(url)
    if 'error' in data or not data.get('chart'):
        return {'error': data.get('error', 'No data')}
    result = data['chart']['result'][0]
    meta = result.get('meta', {})
    curr = meta.get('regularMarketPrice')
    prev = meta.get('chartPreviousClose')
    if curr is None or prev is None:
        return {'error': 'Insufficient data'}
    change = curr - prev
    change_pct = (change / prev) * 100
    return {
        'level': round(curr, 2),
        'change': round(change, 2),
        'change_pct': round(change_pct, 2)
    }

def get_trending_stocks_yahoo(limit=5):
    """
    Scrape Yahoo Finance most active and gainers to find trending stocks.
    We'll fetch both tables and merge by volume and % change to get momentum.
    """
    base_url = "https://finance.yahoo.com"
    gainers_url = f"{base_url}/gainers"
    active_url = f"{base_url}/most-active"
    
    stocks = []
    # Get gainers
    html = fetch_text(gainers_url)
    if html:
        soup = BeautifulSoup(html, 'html.parser')
        table = soup.find('table', {'class': 'yf-1jecxey'}) or soup.find('table')
        if table:
            rows = table.find_all('tr')[1:limit+1]  # skip header
            for row in rows:
                cols = row.find_all('td')
                if len(cols) >= 5:
                    symbol = cols[0].get_text(strip=True)
                    name = cols[1].get_text(strip=True) if len(cols) > 1 else ''
                    price = cols[3].get_text(strip=True) if len(cols) > 3 else ''
                    change = cols[4].get_text(strip=True) if len(cols) > 4 else ''
                    pct = cols[5].get_text(strip=True) if len(cols) > 5 else ''
                    volume = cols[6].get_text(strip=True) if len(cols) > 6 else ''
                    stocks.append({
                        'symbol': symbol,
                        'name': name,
                        'price': price,
                        'change': change,
                        'pct_change': pct,
                        'volume': volume,
                        'source': 'gainers'
                    })
    # Get most active
    html = fetch_text(active_url)
    if html:
        soup = BeautifulSoup(html, 'html.parser')
        table = soup.find('table', {'class': 'yf-1jecxey'}) or soup.find('table')
        if table:
            rows = table.find_all('tr')[1:limit+1]
            for row in rows:
                cols = row.find_all('td')
                if len(cols) >= 5:
                    symbol = cols[0].get_text(strip=True)
                    name = cols[1].get_text(strip=True) if len(cols) > 1 else ''
                    price = cols[3].get_text(strip=True) if len(cols) > 3 else ''
                    change = cols[4].get_text(strip=True) if len(cols) > 4 else ''
                    pct = cols[5].get_text(strip=True) if len(cols) > 5 else ''
                    volume = cols[6].get_text(strip=True) if len(cols) > 6 else ''
                    # Merge if already exists from gainers? For now just add, we'll take top 5 later
                    stocks.append({
                        'symbol': symbol,
                        'name': name,
                        'price': price,
                        'change': change,
                        'pct_change': pct,
                        'volume': volume,
                        'source': 'active'
                    })
    # Deduplicate by symbol and sort by volume (approximate by converting volume string to number)
    unique = {}
    for s in stocks:
        if s['symbol'] not in unique:
            unique[s['symbol']] = s
    # Convert volume strings: "1.2M" -> 1,200,000
    def parse_vol(v):
        if not v: return 0
        v = v.replace(',', '').upper()
        if 'M' in v:
            return float(v.replace('M', '')) * 1_000_000
        if 'B' in v:
            return float(v.replace('B', '')) * 1_000_000_000
        if 'K' in v:
            return float(v.replace('K', '')) * 1_000
        try:
            return float(v)
        except:
            return 0
    # Sort by volume descending and take top 5
    sorted_stocks = sorted(unique.values(), key=lambda s: parse_vol(s.get('volume', '0')), reverse=True)
    return sorted_stocks[:limit]

def get_trending_cryptos(limit=5):
    """
    Fetch top cryptocurrencies by market cap and volume from CoinGecko.
    """
    url = "https://api.coingecko.com/api/v3/coins/markets"
    params = {
        'vs_currency': 'usd',
        'order': 'volume_desc',
        'per_page': limit,
        'page': 1,
        'sparkline': False
    }
    data = fetch_json(url, params)
    if 'error' in data or not isinstance(data, list):
        # fallback: could try coinmarketcap but that requires API key
        return []
    cryptos = []
    for coin in data:
        cryptos.append({
            'rank': coin.get('market_cap_rank', 'N/A'),
            'symbol': coin.get('symbol', '').upper(),
            'name': coin.get('name', ''),
            'price': round(coin.get('current_price', 0), 2),
            'change_24h': round(coin.get('price_change_percentage_24h', 0), 2),
            'volume_24h': coin.get('total_volume', 0)
        })
    return cryptos

def fetch_whale_alert():
    """
    Try to fetch recent large cryptocurrency transactions from Whale Alert public page.
    """
    url = "https://whale-alert.io/transactions"
    html = fetch_text(url)
    if not html:
        return None
    soup = BeautifulSoup(html, 'html.parser')
    # Look for transaction rows
    # The structure likely has a table or list; we'll try to extract recent ones
    transactions = []
    # Example: div with class 'transaction' or similar. Let's inspect by extracting text containing large amounts.
    # Since we don't know exact structure, we'll extract all text and find patterns.
    text = soup.get_text()
    # Look for patterns like "100 BTC", "$1,000,000" etc.
    # But better to look for specific elements. Possibly the site uses <tr> rows.
    rows = soup.find_all('tr')
    for row in rows[:10]:
        cols = row.find_all('td')
        if len(cols) >= 4:
            # Assume cols: time, symbol, amount, USD value
            time = cols[0].get_text(strip=True)
            symbol = cols[1].get_text(strip=True)
            amount = cols[2].get_text(strip=True)
            usd = cols[3].get_text(strip=True)
            transactions.append({
                'time': time,
                'symbol': symbol,
                'amount': amount,
                'usd': usd
            })
    return transactions if transactions else None

def fetch_smart_money_news():
    """
    Try to fetch recent news about institutional flows or whale activity in crypto/stocks.
    Use Google News RSS as a free source.
    """
    query = "institutional flows whale accumulation ETF inflows crypto stocks"
    url = f"https://news.google.com/rss/search?q={requests.utils.quote(query)}&hl=en-US&gl=US&ceid=US:en"
    xml = fetch_text(url)
    if not xml:
        return []
    # Parse RSS XML
    import xml.etree.ElementTree as ET
    try:
        root = ET.fromstring(xml)
        items = root.findall('.//item')
        news = []
        for item in items[:5]:
            title = item.find('title').text if item.find('title') is not None else ''
            link = item.find('link').text if item.find('link') is not None else ''
            pubDate = item.find('pubDate').text if item.find('pubDate') is not None else ''
            source = item.find('source').text if item.find('source') is not None else ''
            news.append({
                'title': title,
                'link': link,
                'source': source,
                'date': pubDate
            })
        return news
    except Exception as e:
        print(f"Error parsing RSS: {e}")
        return []

def collect_market_data():
    tz = pytz.timezone('Australia/Sydney')
    now = datetime.now(tz)
    today = now.strftime('%Y-%m-%d')
    generated_at = now.isoformat()
    data = {
        'date': today,
        'generated_at': generated_at,
        'trending_stocks': [],
        'trending_cryptos': [],
        'commodities': {},
        'australian_market': {},
        'indonesian_market': {},
        'smart_money_whale_watch': {}
    }
    # Commodities
    commodities = {'Gold': 'GC=F', 'Silver': 'SI=F', 'Crude Oil': 'CL=F', 'Natural Gas': 'NG=F'}
    for name, ticker in commodities.items():
        data['commodities'][name] = get_commodity_data(ticker)
    # ASX and Indonesian markets
    data['australian_market']['S&P/ASX 200'] = get_index_data('^AXJO')
    data['indonesian_market']['Jakarta Composite'] = get_index_data('^JKSE')
    # Trending stocks and cryptos
    data['trending_stocks'] = get_trending_stocks_yahoo(5)
    data['trending_cryptos'] = get_trending_cryptos(5)
    # Smart money
    whale_txs = fetch_whale_alert()
    data['smart_money_whale_watch']['whale_transactions'] = whale_txs
    news_items = fetch_smart_money_news()
    data['smart_money_whale_watch']['recent_news'] = news_items
    return data

def format_report(data):
    """Format the market summary as a clean markdown-like text."""
    lines = []
    date_str = data['date']
    lines.append(f"# Market Summary - {date_str}")
    lines.append(f"*Generated: {data['generated_at']}*")
    lines.append("")
    
    # Trending Stocks
    lines.append("## Top 5 Trending Stocks (by volume/activity/momentum)")
    if data['trending_stocks']:
        for s in data['trending_stocks']:
            # Clean up price string if combined
            price_disp = s['price']
            change_disp = s.get('change', '')
            pct_disp = s.get('pct_change', '')
            vol = s.get('volume', 'N/A')
            lines.append(f"- **{s['symbol']}** - {s['name']} - {price_disp} - Vol: {vol}")
    else:
        lines.append("- No data")
    lines.append("")
    
    # Trending Cryptos
    lines.append("## Top 5 Trending Cryptos")
    if data['trending_cryptos']:
        for c in data['trending_cryptos']:
            price = f"${c['price']:,}" if isinstance(c['price'], (int, float)) else str(c['price'])
            vol = f"${c['volume_24h']:,}" if isinstance(c['volume_24h'], (int, float)) else str(c['volume_24h'])
            lines.append(f"- **{c['symbol']}** ({c['name']}) - {price} - 24h: {c['change_24h']}% - Vol: {vol}")
    else:
        lines.append("- No data")
    lines.append("")
    
    # Commodities
    lines.append("## Key Commodities")
    for name, info in data['commodities'].items():
        if 'error' in info:
            lines.append(f"- {name}: Data unavailable")
        else:
            lines.append(f"- {name}: ${info['price']} ({info['change_pct']}%)")
    lines.append("")
    
    # Australian Market
    lines.append("## ASX/Australian Market Overview")
    for name, info in data['australian_market'].items():
        if 'error' in info:
            lines.append(f"- {name}: Data unavailable")
        else:
            lines.append(f"- {name}: {info['level']} ({info['change_pct']}%)")
    lines.append("")
    
    # Indonesian Market
    lines.append("## Indonesian Stock Market")
    for name, info in data['indonesian_market'].items():
        if 'error' in info:
            lines.append(f"- {name}: Data unavailable")
        else:
            lines.append(f"- {name}: {info['level']} ({info['change_pct']}%)")
    lines.append("")
    
    # Smart Money / Whale Watch
    lines.append("## SMART MONEY / WHALE WATCH")
    sm = data['smart_money_whale_watch']
    if sm.get('whale_transactions'):
        lines.append("**Whale Transactions:**")
        for tx in sm['whale_transactions'][:5]:
            lines.append(f"- {tx['time']}: {tx['amount']} {tx['symbol']} ({tx['usd']})")
    else:
        lines.append("- Whale transaction data unavailable (source: whale-alert.io)")
    
    if sm.get('recent_news'):
        lines.append("**Recent News on Institutional/Whale Activity:**")
        for item in sm['recent_news'][:5]:
            # Title, source, date
            lines.append(f"- *{item['title']}* ({item['source']})")
    else:
        lines.append("- No recent news fetched")
    lines.append("")
    lines.append("---")
    lines.append("*This report is for informational purposes only, not financial advice.*")
    
    return "\n".join(lines)

def create_notion_page(data, report_text, parent_page_id, notion_api_key):
    """Create a new Notion page with the report as content."""
    import requests
    headers = {
        "Authorization": f"Bearer {notion_api_key}",
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
    }
    title = f"Market Summary - {data['date']}"
    
    # Convert report text into Notion blocks. We'll split by lines and detect headings.
    blocks = []
    for line in report_text.split("\n"):
        line = line.strip()
        if not line:
            continue
        if line.startswith("# "):
            blocks.append(create_heading(line[2:], 1))
        elif line.startswith("## "):
            blocks.append(create_heading(line[3:], 2))
        elif line.startswith("---"):
            # Divider
            blocks.append({"object": "block", "type": "divider", "divider": {}})
        elif line.startswith("- "):
            # Bulleted list item, may contain formatting
            blocks.append(create_bullet(line[2:]))
        elif line.startswith("*"):
            # Paragraph with italic? Could treat as paragraph
            blocks.append(create_paragraph(line))
        else:
            # Regular paragraph
            blocks.append(create_paragraph(line))
    
    payload = {
        "parent": {"page_id": parent_page_id},
        "properties": {
            "title": {
                "title": [
                    {
                        "text": {
                            "content": title
                        }
                    }
                ]
            }
        },
        "children": blocks
    }
    
    url = "https://api.notion.com/v1/pages"
    response = requests.post(url, headers=headers, json=payload, timeout=30)
    if response.status_code == 200:
        result = response.json()
        page_url = result.get('url', 'N/A')
        print(f"Notion page created successfully: {page_url}")
        return True
    else:
        print(f"Failed to create Notion page: {response.status_code} - {response.text}")
        return False

def create_heading(text, level):
    return {
        "object": "block",
        "type": f"heading_{level}",
        f"heading_{level}": {
            "rich_text": [{"type": "text", "text": {"content": text}}]
        }
    }

def create_paragraph(text):
    # Handle basic markdown-like bold: **text**
    rich_text = []
    parts = re.split(r'(\*\*[^*]+\*\*)', text)
    for part in parts:
        if part.startswith("**") and part.endswith("**"):
            content = part[2:-2]
            rich_text.append({"type": "text", "text": {"content": content}, "annotations": {"bold": True}})
        else:
            rich_text.append({"type": "text", "text": {"content": part}})
    return {
        "object": "block",
        "type": "paragraph",
        "paragraph": {"rich_text": rich_text}
    }

def create_bullet(text):
    # Similar to paragraph but for bulleted_list_item
    rich_text = []
    parts = re.split(r'(\*\*[^*]+\*\*)', text)
    for part in parts:
        if part.startswith("**") and part.endswith("**"):
            content = part[2:-2]
            rich_text.append({"type": "text", "text": {"content": content}, "annotations": {"bold": True}})
        else:
            rich_text.append({"type": "text", "text": {"content": part}})
    return {
        "object": "block",
        "type": "bulleted_list_item",
        "bulleted_list_item": {"rich_text": rich_text}
    }

def main():
    data = collect_market_data()
    report = format_report(data)
    print(report)
    print("\n--- Creating Notion page... ---")
    notion_api_key = "ntn_S74970890145k8mMQBxLmJgc4P5LyXKO3Nc9KjPyvaSaY9"
    parent_page_id = "e24f561c-27c1-4401-a659-df1046ed8c24"
    create_notion_page(data, report, parent_page_id, notion_api_key)

if __name__ == '__main__':
    main()
