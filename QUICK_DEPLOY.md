# ⚡ Quick Deployment Reference

## 🎯 One-Minute Setup

### 1. Database Setup
- Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create free account & cluster
- Get connection string

### 2. Code Push
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. Backend Deployment (Render)
- Go to [Render Dashboard](https://dashboard.render.com)
- New → Web Service
- Connect GitHub repo
- Root Directory: `backend`
- Build: `npm install`
- Start: `npm start`

### 4. Frontend Deployment (Render)
- New → Static Site
- Connect same GitHub repo
- Root Directory: `frontend`
- Build: `npm install && npm run build`
- Publish: `build`

## 🔧 Environment Variables

### Backend (Render Dashboard)
```
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FRONTEND_URL=https://your-frontend-app.onrender.com
```

### Frontend (Render Dashboard)
```
REACT_APP_API_URL=https://your-backend-app.onrender.com
```

## 📍 URLs
- **Frontend**: `https://your-frontend-app.onrender.com`
- **Backend**: `https://your-backend-app.onrender.com`

## ⚠️ Important
- Services sleep after 15min inactivity
- First request after sleep takes 30-60 seconds
- Free tier: 750 hours/month

## 🆘 Need Help?
Read the full `DEPLOYMENT_GUIDE.md` for detailed instructions! 