# 🔐 Login Credentials

## 👤 Admin Account

**Email:** admin@pakistanecommerce.com  
**Password:** Admin@2024#Secure  
**Role:** Admin

---

## 👥 User Accounts

### 1. Ahmed Khan
**Email:** ahmed.khan@gmail.com  
**Password:** password123  
**Role:** User  
**Phone:** +92-300-1234567

### 2. Fatima Ali
**Email:** fatima.ali@yahoo.com  
**Password:** password123  
**Role:** User  
**Phone:** +92-301-2345678

### 3. Usman Hassan
**Email:** usman.hassan@hotmail.com  
**Password:** password123  
**Role:** User  
**Phone:** +92-302-3456789

### 4. Ayesha Malik
**Email:** ayesha.malik@outlook.com  
**Password:** password123  
**Role:** User  
**Phone:** +92-303-4567890

### 5. Bilal Ahmed
**Email:** bilal.ahmed@gmail.com  
**Password:** password123  
**Role:** User  
**Phone:** +92-304-5678901

### 6. Sana Khan
**Email:** sana.khan@yahoo.com  
**Password:** password123  
**Role:** User  
**Phone:** +92-305-6789012

### 7. Hassan Raza
**Email:** hassan.raza@hotmail.com  
**Password:** password123  
**Role:** User  
**Phone:** +92-306-7890123

---

## 🚀 How to Use

1. **Start the application:**
   ```bash
   npm run dev
   ```

2. **Access the website:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

3. **Login:**
   - Go to http://localhost:3000/login
   - Use any of the credentials above

4. **Admin Access:**
   - Use the admin account to access admin dashboard
   - Admin dashboard: http://localhost:3000/admin

---

## 📝 Notes

- All user accounts have the same password: `password123`
- The admin account has a more secure password: `Admin@2024#Secure`
- All accounts are pre-seeded with Pakistani addresses
- Users can register new accounts or use existing ones
- Admin can manage users, products, orders, and categories

---

## 🔧 Database Setup

If you need to reseed the database with these accounts:

```bash
cd backend
node seeder.js
```

This will create all the users, products, and categories in your MongoDB database. 