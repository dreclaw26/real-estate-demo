#!/usr/bin/env python3
import sys
import json
import subprocess
import datetime
import time

def fetch_json(url):
    try:
        # Use a user-agent to avoid being blocked by Yahoo Finance
        result = subprocess.run(['curl', '-s', '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', url], capture_output=True, text=True, timeout=10)
        if result.returncode == 0 and result.stdout.strip():
            return json.loads(result.stdout)
    except json.JSONDecodeError as e:
        print(f"JSON decode error for {url}: {e}", file=sys.stderr)
    except Exception as e:
        print(f"Error fetching {url}: {e}", file=sys.stderr)
    return None

def fetch_yahoo_chart(symbol):
    """Fetch price and volume data from Yahoo Finance chart API"""
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?interval=1d&range=1d"
    try:
        result = subprocess.run(['curl', '-s', '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', url], capture_output=True, text=True, timeout=10)
        if result.returncode == 0 and result.stdout.strip():
            data = json.loads(result.stdout)
            if data and 'chart' in data and 'result' in data['chart'] and data['chart']['result']:
                result_data = data['chart']['result'][0]
                meta = result_data.get('meta', {})
                price = meta.get('regularMarketPrice')
                change = meta.get('regularMarketChangePercent')
                volume = meta.get('regularMarketVolume')
                name = meta.get('shortName') or meta.get('symbol')
                return price, change, volume, name
    except json.JSONDecodeError as e:
        print(f"JSON decode error for {url}: {e}", file=sys.stderr)
    except Exception as e:
        print(f"Error fetching {url}: {e}", file=sys.stderr)
    return None, None, None, None

def fetch_trending_stocks():
    """Fetch trending tickers from Yahoo Finance and return top stocks by volume"""
    url = "https://query1.finance.yahoo.com/v1/finance/trending/US?count=10"
    try:
        result = subprocess.run(['curl', '-s', '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', url], capture_output=True, text=True, timeout=10)
        if result.returncode == 0 and result.stdout.strip():
            data = json.loads(result.stdout)
            quotes = data.get('finance', {}).get('result', [{}])[0].get('quotes', [])
            symbols = [q['symbol'] for q in quotes if q.get('symbol')]
            # Filter out crypto (typically end with -USD, -EUR, etc) and other non-stock symbols
            stock_symbols = [s for s in symbols if not s.endswith(('-USD', '-EUR', '-GBP', '-JPY', '-CAD', '-AUD')) and s not in ['BTC-USD', 'ETH-USD', 'USDT-USD', 'USDC-USD']]
            # If we have less than 5, maybe include some crypto? But we want stocks. Could also fetch more from trending to ensure enough.
            # Fetch detailed data for each stock
            stocks = []
            for symbol in stock_symbols[:10]:  # fetch up to 10 to ensure we get 5 valid
                price, change, volume, name = fetch_yahoo_chart(symbol)
                if price is not None and volume is not None:
                    stocks.append({
                        'symbol': symbol,
                        'name': name,
                        'price': price,
                        'change': change,
                        'volume': volume
                    })
                # Be nice to rate limit
                time.sleep(0.2)
            # Sort by volume descending
            stocks.sort(key=lambda x: x['volume'], reverse=True)
            return stocks[:5]
    except Exception as e:
        print(f"Error fetching trending stocks: {e}", file=sys.stderr)
    return []

def main():
    import time  # add sleep
    print("=" * 60)
    print("DAILY MARKET SUMMARY")
    print(f"Date: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M UTC')}")
    print("=" * 60)
    print()

    # TOP 5 TRENDING STOCKS (by volume)
    print("TOP 5 TRENDING STOCKS (by volume/activity):")
    print("-" * 40)
    trending_stocks = fetch_trending_stocks()
    if trending_stocks:
        for i, stock in enumerate(trending_stocks, 1):
            price = stock['price']
            change = stock['change']
            volume = stock['volume']
            # Format numbers
            if isinstance(price, (int, float)):
                price_str = f"${price:.2f}"
            else:
                price_str = str(price)
            if isinstance(change, (int, float)):
                change_str = f"({change:.2f}%)"
            else:
                change_str = f"({change})" if change else ""
            print(f"{i}. {stock['name']} ({stock['symbol']})")
            print(f"   Price: {price_str} {change_str}")
            print(f"   Volume: {volume:,}")
            print()
    else:
        print("Unable to fetch trending stocks data")
        print()

    # Cryptocurrencies from CoinGecko
    print("TOP 5 TRENDING CRYPTOS (by volume):")
    print("-" * 40)
    crypto_data = fetch_json("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=5&page=1&sparkline=false")
    if crypto_data:
        for i, coin in enumerate(crypto_data, 1):
            print(f"{i}. {coin['name']} ({coin['symbol'].upper()})")
            print(f"   Price: ${coin['current_price']:,.2f}")
            print(f"   24h Vol: ${coin['total_volume']:,.0f}")
            print(f"   Market Cap: ${coin['market_cap']:,.0f}")
            print()
    else:
        print("Unable to fetch crypto data")
        print()

    # Commodities
    print("KEY COMMODITIES:")
    print("-" * 40)
    commodities = {
        'GC=F': 'Gold',
        'SI=F': 'Silver',
        'CL=F': 'Crude Oil',
        'NG=F': 'Natural Gas'
    }
    for symbol, name in commodities.items():
        price, change, _, _ = fetch_yahoo_chart(symbol)
        if price != None:
            if isinstance(change, (int, float)):
                print(f"{name} ({symbol}): ${price:.2f} ({change:.2f}%)")
            else:
                print(f"{name} ({symbol}): ${price:.2f}")
        else:
            print(f"{name} ({symbol}): N/A")
    print()

    # ASX Overview
    print("ASX / AUSTRALIAN MARKET OVERVIEW:")
    print("-" * 40)
    price, change, _, _ = fetch_yahoo_chart('^AXJO')
    if price != None:
        if isinstance(change, (int, float)):
            print(f"S&P/ASX 200: {price:.2f} ({change:.2f}%)")
        else:
            print(f"S&P/ASX 200: {price:.2f}")
    else:
        print("S&P/ASX 200: N/A")
    print()

    # Indonesian Stock Market
    print("INDONESIAN STOCK MARKET (IDX):")
    print("-" * 40)
    price, change, _, _ = fetch_yahoo_chart('%5EJKSE')
    if price != None:
        if isinstance(change, (int, float)):
            print(f"Jakarta Composite Index: {price:.2f} ({change:.2f}%)")
        else:
            print(f"Jakarta Composite Index: {price:.2f}")
    else:
        print("Jakarta Composite Index: N/A")
    print()

    # SMART MONEY / WHALE WATCH - get some global metrics
    print("SMART MONEY / WHALE WATCH:")
    print("-" * 40)
    global_data = fetch_json("https://api.coingecko.com/api/v3/global")
    if global_data and 'data' in global_data:
        btc_dom = global_data['data'].get('btc_dominance', 'N/A')
        eth_dom = global_data['data'].get('eth_dominance', 'N/A')
        mcap = global_data['data'].get('total_market_cap', {}).get('usd', 'N/A')
        if isinstance(mcap, (int, float)):
            mcap_str = f"${mcap:,.0f}"
        else:
            mcap_str = str(mcap)
        print(f"Total Crypto Market Cap: {mcap_str}")
        print(f"Bitcoin Dominance: {btc_dom}%")
        print(f"Ethereum Dominance: {eth_dom}%")
        print()
        print("On-chain highlights:")
        print("• Whale Alert monitoring: Large BTC/ETH movements to exchanges may indicate selling pressure")
        print("• ETF flows (US): Check Farside or SoSoValue for daily BTC/ETH ETF net inflows/outflows")
        print("• Institutional interest: Monitor Coinbase Premium, CME futures basis")
        print("• large transaction counts: >100 BTC transfers are notable")
    else:
        print("Notable whale accumulations and institutional flows:")
        print("• On-chain data unavailable")
        print("• Check Whale Alert, Glassnode, CryptoQuant for detailed metrics")
    print()

    print("=" * 60)
    print("DISCLAIMER: For informational purposes only. Not financial advice.")
    print("=" * 60)

if __name__ == "__main__":
    main()
