#!/usr/bin/env bash

set -e  # exit immediately if a command fails

echo "▶ Starting frontend…"
cd frontend-app

echo "→ npm install (frontend)"
npm install

echo "→ npm run dev (frontend)"
npm run dev &   # run in background so script can continue

FRONTEND_PID=$!

cd ..

echo "▶ Starting studio…"
cd portfilostudio

echo "→ npm run ci (studio)"
npm run ci

echo "→ npm run dev (studio)"
npm run dev &

STUDIO_PID=$!

cd ..

echo "✅ All services started"
echo "Frontend PID: $FRONTEND_PID"
echo "Studio PID:   $STUDIO_PID"

# Keep script alive and forward CTRL+C
trap "echo '🛑 Shutting down…'; kill $FRONTEND_PID $STUDIO_PID"
