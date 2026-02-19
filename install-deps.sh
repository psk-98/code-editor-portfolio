#!/usr/bin/env bash

set -e  # exit immediately if a command fails

echo "▶ Starting frontend…"
cd frontend-app

echo "→ npm install (frontend dependencies)"
npm install

FRONTEND_PID=$!

cd ..&& cd portfolio-studio

echo "→ npm install (studio dependencies)"
npm install


STUDIO_PID=$!

cd ..

echo "✅ All dependencies installed"
