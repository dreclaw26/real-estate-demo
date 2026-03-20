#!/bin/bash

PID_FILE=".devserver.pid"
PORT=5173

is_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if kill -0 "$PID" 2>/dev/null; then
            return 0
        fi
        rm -f "$PID_FILE"
    fi
    return 1
}

stop() {
    if is_running; then
        echo "Stopping dev server (PID: $PID)..."
        kill "$PID" 2>/dev/null
        rm -f "$PID_FILE"
        sleep 1
        if is_running; then
            echo "Force killing..."
            kill -9 "$PID" 2>/dev/null
        fi
        echo "Dev server stopped."
    else
        echo "Dev server is not running."
    fi
}

start() {
    if is_running; then
        echo "Dev server already running (PID: $PID). Use './start.sh restart' to restart."
        return 1
    fi
    echo "Starting dev server..."
    npm run dev &
    echo $! > "$PID_FILE"
    echo "Dev server started (PID: $(cat $PID_FILE))."
}

restart() {
    stop
    sleep 1
    start
}

status() {
    if is_running; then
        echo "Dev server is running (PID: $PID) at http://localhost:$PORT"
    else
        echo "Dev server is not running."
    fi
}

case "${1:-start}" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac
