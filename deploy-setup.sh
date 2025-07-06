#!/bin/bash

echo "🚀 MERN Ecommerce Deployment Setup"
echo "=================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Prerequisites check passed!"

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit for deployment"
    echo "✅ Git repository initialized!"
else
    echo "✅ Git repository already exists!"
fi

echo ""
echo "📋 Next Steps:"
echo "=============="
echo "1. Create a GitHub repository"
echo "2. Push your code to GitHub:"
echo "   git remote add origin https://github.com/yourusername/your-repo-name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Follow the DEPLOYMENT_GUIDE.md for detailed hosting instructions"
echo ""
echo "4. Set up MongoDB Atlas database"
echo "5. Deploy backend to Render"
echo "6. Deploy frontend to Render"
echo ""
echo "🎯 Quick Links:"
echo "- MongoDB Atlas: https://www.mongodb.com/atlas"
echo "- Render: https://render.com"
echo "- GitHub: https://github.com"
echo ""
echo "📖 Read DEPLOYMENT_GUIDE.md for complete instructions!" 