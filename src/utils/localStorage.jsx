const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        title: "Create Login UI",
        description: "Design and implement login page using React and Tailwind",
        date: "2026-01-10",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue in navbar",
        date: "2026-01-08",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: true,
        title: "API Integration",
        description: "Integrate product API with dashboard",
        date: "2026-01-05",
        category: "Backend",
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        title: "Build Dashboard UI",
        description: "Create dashboard layout using Tailwind grid",
        date: "2026-01-11",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        title: "Add Dark Mode",
        description: "Implement dark mode toggle",
        date: "2026-01-07",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: false,
        title: "Write Documentation",
        description: "Prepare README for project",
        date: "2026-01-12",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: true,
        title: "Deploy App",
        description: "Deploy app on Vercel",
        date: "2026-01-06",
        category: "Deployment",
      },
    ],
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        title: "Create Reusable Components",
        description: "Build Button and Modal components",
        date: "2026-01-13",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress and optimize assets",
        date: "2026-01-09",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: false,
        title: "Unit Testing",
        description: "Write basic unit tests",
        date: "2026-01-14",
        category: "Testing",
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        title: "Implement Search",
        description: "Add search functionality",
        date: "2026-01-12",
        category: "Feature",
      },
      {
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        title: "Code Refactor",
        description: "Refactor components for readability",
        date: "2026-01-06",
        category: "Code Quality",
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: true,
        title: "Redux Setup",
        description: "Configure Redux store",
        date: "2026-01-04",
        category: "State Management",
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: false,
        title: "Pagination",
        description: "Add pagination to list",
        date: "2026-01-15",
        category: "Frontend",
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },

  {
    id: 5,
    firstName: "Sanjay",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        title: "Profile Page UI",
        description: "Design employee profile page",
        date: "2026-01-14",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        title: "Form Validation",
        description: "Add validations using JS",
        date: "2026-01-08",
        category: "Forms",
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: false,
        title: "Toast Notifications",
        description: "Show success and error toasts",
        date: "2026-01-16",
        category: "UI",
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

// here we exporting two functions for setData in localStorage and getData From localStorage

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];

  return { employees, admin };
};
