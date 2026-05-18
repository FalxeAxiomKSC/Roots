#!/bin/bash

# Set error handling
set -e

echo "🧹 Cleaning up Sustainable Systems project..."

# Remove common build artifacts and dependencies
echo "🗑️  Removing build artifacts..."
rm -rf build/
rm -rf dist/
rm -rf .next/
rm -rf out/
rm -rf coverage/
rm -rf *.log

# Remove node_modules
echo "📦 Removing node_modules..."
rm -rf node_modules/
rm -rf src/backend/node_modules/
rm -rf src/frontend/node_modules/
rm -rf src/shared/node_modules/

# Remove TypeScript build info
echo "🔍 Removing TypeScript build info..."
rm -rf *.tsbuildinfo

# Remove ESLint cache
echo "🧼 Removing ESLint cache..."
rm -rf .eslintcache

# Remove package-lock.json files
echo "🔒 Removing package lock files..."
find . -name "package-lock.json" -type f -delete

echo "✅ Cleanup complete!"
echo ""
echo "To reinstall dependencies, run:"
echo "1. npm install"
echo "2. cd src/backend && npm install"
echo "3. cd ../frontend && npm install"
echo "4. cd ../shared && npm install"