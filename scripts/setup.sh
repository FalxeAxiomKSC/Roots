#!/bin/bash

# Set error handling
set -e

echo "🚀 Setting up Sustainable Systems development environment..."

# Check Node.js version
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.0.0 or later."
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18.0.0 or later is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install and build all components
echo "🔧 Setting up backend, frontend, and shared components..."
cd src/backend
npm install
npm run build
cd ../frontend
npm install
npm run build
cd ../shared
npm install
npm run build
cd ../..

echo "🎉 Development environment setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy .env.local.example to .env.local and configure your environment variables"
echo "2. Run 'npm run dev' to start all services"
echo "3. Check out the documentation in the docs/ directory"