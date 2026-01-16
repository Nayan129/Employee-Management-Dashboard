📌 Employee Task Management Dashboard (React + Tailwind)

A simple Employee Task Management Dashboard built using React + Tailwind CSS.
This project includes Admin & Employee authentication, task assignment tracking, and a responsive UI to manage tasks efficiently.

🚀 Features
✅ Authentication System

Admin Login

Employee Login

Role-based access (admin / employee)

Login session stored using localStorage

👨‍💻 Employee Dashboard

Welcome message with employee name

Task summary cards:

New Tasks

Completed Tasks

Active Tasks

Failed Tasks

Task list section displaying tasks in card format

🗂 Task Management (Employee Tasks)

Each employee has tasks with:

active (true/false)

newTask (true/false)

completion (true/false)

failed (true/false)

title

description

date

category

💾 Local Storage Integration

Employees data stored in localStorage

Admin data stored in localStorage

Logged-in user stored in localStorage for session persistence

🛠 Tech Stack

React.js

Tailwind CSS

JavaScript

LocalStorage

Vite

📂 Project Structure (Main Components)
src/
│── Components/
│ ├── Dashboard/
│ │ ├── EmployeeDashboard.jsx
│ │ ├── AdminDashboard.jsx
│ ├── TaskList/
│ │ ├── AllTasks.jsx
│ │ ├── AcceptTask.jsx
│ │ ├── CompleteTask.jsx
│ │ ├── FailedTask.jsx
│ │ ├── NewTask.jsx
│ ├── Auth/
│ │ ├── Login.jsx
│
│── Context/
│ ├── AuthProvider.jsx
│
│── Utils/
│ ├── localStorage.js
│
│── data/
│ ├── employees.js
│ ├── admin.js
│
│── App.jsx
│── main.jsx

🔑 Login Credentials (Demo)
Admin

Email: admin@example.com

Password: 123

Employees

Email: employee1@example.com → employee5@example.com

Password: 123

⚙️ How It Works
1️⃣ Data Setup

Created JSON-based employee and admin data

Each employee has a task array with multiple tasks

2️⃣ LocalStorage Setup

Data is stored using helper functions:

setLocalStorage()

getLocalStorage()

3️⃣ Login Flow

Admin login checks fixed credentials

Employee login matches email/password using .find()

Role is stored in localStorage as:

{ role: "admin" }
or
{ role: "employee" }

4️⃣ Task Rendering

Tasks are shown in different UI cards based on task status:

New Task Card

Active Task Card

Completed Task Card

Failed Task Card

🧠 Learnings From This Project

React component structure & props handling

Role-based login logic

Storing and reading data from LocalStorage

Conditional rendering using .map() and status flags

Building reusable UI layouts using Tailwind CSS

Debugging common errors like:

Cannot read properties of undefined

Wrong object key usage (employee vs employees)

Missing props in components

📌 Future Improvements

Add task update functionality (Mark Completed / Failed)

Add Admin task assignment UI

Use a backend API instead of LocalStorage

Add better state management (Context/Redux)

Add proper filtering tabs for tasks

Improve UI responsiveness for large screens
