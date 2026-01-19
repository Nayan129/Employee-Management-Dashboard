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
      completed: 1,
      failed: 1,
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
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
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

export const setLocalStorage = () => {
  // Only set default data if not present
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];

  return { employees, admin };
};
