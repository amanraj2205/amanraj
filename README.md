# 🚀 Aman Raj Portfolio Website

A modern, high-performance, and visually stunning developer portfolio built with **React**, **Vite**, and **Framer Motion**. This project features a sleek **Glassmorphism** design, fluid animations, and a fully functional serverless contact system.

![Portfolio Preview](./public/preview.png) *(Note: Add a screenshot of your portfolio here!)*

---

## ✨ Features

- **💎 Glassmorphic UI**: Premium aesthetics with smooth blurs and consistent color gradients.
- **🎭 Motion & Feedback**: Interactive hover effects and scroll-based animations using **Framer Motion**.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **📩 Functional Contact Form**: Integrated with **Web3Forms** to send messages directly to your email without a backend.
- **⚡ Performance First**: Built with **Vite** for near-instant load times and rapid development.
- **📂 Clean & Modular**: Components are highly reusable and well-organized for easy maintenance.

---

## 🛠 Tech Stack

### **Frontend Core**
- **React 19**: Modern component-based architecture.
- **Vite 7**: Ultra-fast build tool and development server.
- **React Router 7**: Seamless client-side navigation.

### **Styling & Icons**
- **Vanilla CSS**: Custom styling with deep control over aesthetics.
- **Framer Motion**: Industry-standard library for smooth animations.
- **Lucide React**: Beautifully clean and consistent vector icons.

### **Infrastructure**
- **Web3Forms**: Serverless form submission handling.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### **1. Clone the repository**
```bash
git clone https://github.com/amanraj2205/amanraj.git
cd protfiole_website
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Set up the Contact Form**
1. Get a free Access Key from [Web3Forms](https://web3forms.com/).
2. Open `src/components/Contact.jsx`.
3. Locate the `onSubmit` function and replace the key:
   ```javascript
   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
   ```

### **4. Run the development server**
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

---

## 📂 Project Structure

```text
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Images and custom media
│   ├── components/      # Reusable UI components (Navbar, Hero, Projects, etc.)
│   ├── pages/           # Main page layouts
│   ├── App.jsx          # Main application routing
│   ├── index.css        # Global styles and design tokens
│   └── main.jsx         # Application entry point
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

---

## 🔧 Deployment

The easiest way to deploy this project is via **Vercel** or **Netlify**:

1. Push your code to GitHub.
2. Link your repository to Vercel/Netlify.
3. Use the following build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

---

## 🤝 Contact

**Aman Raj**  
📧 [amanraj22052006@gmail.com](mailto:amanraj22052006@gmail.com)  
📍 Jaipur, India  

---

*Made with ❤️ by Aman Raj*
