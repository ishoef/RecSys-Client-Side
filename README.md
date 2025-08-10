# 🛍️ Product Recommendation System

A **full-stack web application** where users can post product-related queries, get community-driven recommendations, and explore better alternatives — all in a dynamic, interactive, and responsive environment.

🔗 **Live Site:** [recoosys.netlify.app](https://recoosys.netlify.app)  
🔗 **Live URL:** [recoosys.netlify.app](https://recoosys.netlify.app)  

---

## 📚 Overview

This platform empowers users to:

- **Post queries** about questionable products or request better alternatives  
- **View & recommend** alternatives to existing queries  
- **Explore** personal and community-driven recommendations  
- **Securely interact** with a protected backend via JWT tokens  
- **Register & login** with Firebase authentication  

Inspired by Q&A platforms like **Quora**, this app delivers a smooth, mobile-friendly experience optimized for all devices.  

---

## 🎯 Key Features

### 🔐 Authentication
- Firebase Email/Password & Google login  
- JWT for private route protection  
- Auth state persistence on reload  

### 💬 Query Management
- Add, update, and delete **your own queries**  
- View all queries with **search & sort** options  
- Real-time recommendation counts  

### 💡 Recommendation System
- Suggest alternative products  
- View all recommendations on a query  
- Manage personal recommendations (delete only)  
- View recommendations received for your queries  

### 📊 UI/UX & Responsiveness
- **Mobile-first** responsive design  
- Animated sections (sliders, counters, transitions)  
- **Layout toggle** for 2/3 column view on All Queries page  
- Smooth conditional rendering based on auth state  
- Elegant **404 page** with redirect  

### 🔍 Extra Features
- Product name search  
- Timestamp-based sorting  
- Clean, minimal UI with purposeful animations  

---

## 🔧 Tech Stack

### **Frontend**
- React.js (Vite)  
- React Router DOM  
- Firebase Auth  
- TailwindCSS + DaisyUI  
- Axios  
- React Icons  
- JWT Decode  

### **Backend**
- Node.js & Express.js  
- MongoDB  
- JSON Web Token (JWT)  
- CORS & dotenv  

---

## 🛡️ Security & Environment
- Firebase & MongoDB credentials stored securely in `.env`  
- JWT-protected API routes  
- Authorization checks for user-specific data access  

---

## 🧪 Testing & Quality Assurance
- Verified private routes and auth persistence on reload  
- Validated backend status codes & CORS headers  
- Tested search, layout toggle, form validation, and error pages  

---

## 📦 NPM Packages Used

**Frontend:**
