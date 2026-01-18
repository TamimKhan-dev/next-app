# ComTech

**ComTech** is a modern e-commerce web application for selling computer components, accessories, and tech-related products.  
The project is built using Next.js App Router and demonstrates authentication, protected routes, and clean UI structure.

🔗 **Live Site:** https://next-app-henna-xi.vercel.app

---

## 📌 Short Project Description

ComTech is a Next.js-based application designed to showcase and sell computer components and accessories.  
It focuses on routing, authentication using cookies, protected pages, and reusable layouts following best practices of the App Router.

---

## Route Summary – ComTech

This document provides a summary of all application routes used in the ComTech website, including their purpose and access level.

## 🛣️ Application Routes

- **`/` (Home / Landing Page)**
  - Public route
  - Displays the main landing page with product highlights and sections
  - Accessible to all users without authentication

- **`/login`**
  - Public route
  - Allows users to log in using mock credentials
  - On successful login, users are redirected to a protected page

- **`/allComponents`**
  - Public route
  - Displays a list of available computer components and accessories
  - No authentication required

- **`/profile`**
  - Private route
  - Shows user profile details in read-only format
  - Redirects unauthenticated users to the login page

---

## 🔐 Route Protection Logic

- Private routes are protected using **Next.js middleware**
- Authentication status is checked via a cookie (`isLoggedIn`)
- Unauthenticated users are automatically redirected to the login page

---

## ⚙️ Setup & Installation Instructions

Clone the repository:
   ```bash
   1.git clone https://github.com/your-username/comtech.git
   2.cd comtech
   3.npm install
   4.npm run dev
   5.http://localhost:3000