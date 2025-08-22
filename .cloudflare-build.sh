#!/bin/sh
# Cloudflare build script
# This prevents the recursive build loop

echo "Running Cloudflare Workers build..."
pnpm run opennext:build