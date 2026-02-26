# Employee Management App (React + Context API)

A role-based Employee Management Dashboard built with **React**, **Context API**, and **Tailwind CSS**.  
Admin can assign tasks to employees, and employees can manage tasks by accepting, completing, or failing them.  
All updates reflect instantly across the UI and persist using **LocalStorage**.

---

## 🚀 Live Demo

👉 https://employee-management-app-ecru.vercel.app

---
## 🔐 Demo Access (Frontend Simulation)

## Note: This is a frontend-only project. Authentication and role handling are simulated for demonstration purposes.

This project simulates role-based authentication on the frontend.

Admin Login  
Username: admin  
Password: admin123  

Employee Login  
Username: employee  
Password: employee123  


## 📌 Features

### 👨‍💼 Admin Dashboard

- Assign tasks to employees
- View employee task counts (New / Active / Completed / Failed)
- Task creation form with validation
- Success toast on task creation

### 👨‍💻 Employee Dashboard

- View assigned tasks
- Accept tasks (New → Active)
- Mark tasks as Completed or Failed (Active → Completed/Failed)
- Task counters update automatically in real-time

### 🔥 Real-Time Updates

- State is managed globally using **React Context API**
- Task status updates instantly reflect in:
  - Task list cards
  - Employee task counts section
  - Admin dashboard counts

### 💾 Data Persistence

- Employee data and tasks are stored in **LocalStorage**
- Data remains saved even after refresh/reload

### 📱 Responsive UI

- Mobile: vertical scroll for tasks
- Desktop: horizontal scroll for task cards

---

## 🛠 Tech Stack

- ReactJS
- React Context API
- Tailwind CSS
- LocalStorage

---

## 📂 Project Structure

src/
├── Components/
│ ├── Auth/
│ ├── Dashboard/
│ ├── ChildComponents/
│ └── TaskList/
├── Context/
│ └── AuthProvider.jsx
├── utils/
│ └── localStorage.js
└── App.jsx

---

## ⚙️ Installation & Setup

1. Clone the repo

```bash
git clone https://github.com/Nayan129/employee-management-Dashboard.git



Go inside project folder

cd employee-management-Dashboard


Install dependencies

npm install


Run the project

npm run dev

🔑 Login Credentials


📌 Learning Outcomes

Practiced Context API for global state management

Implemented task workflow and status updates

Worked with LocalStorage for persistent data

Built responsive UI using Tailwind CSS
```
