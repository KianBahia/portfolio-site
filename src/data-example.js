// Example of how to structure your data.js with local images
// Copy this structure to your actual data.js file

// Import your profile photo
import profilePhoto from "./assets/images/profile/profile-photo.jpg";

// Import project images
import ecommerceHero from "./assets/images/projects/ecommerce-platform/hero.jpg";
import ecommerceDashboard from "./assets/images/projects/ecommerce-platform/dashboard.jpg";
import ecommerceMobile from "./assets/images/projects/ecommerce-platform/mobile-view.jpg";

import taskManagerMain from "./assets/images/projects/task-manager/main-view.jpg";
import taskManagerMobile from "./assets/images/projects/task-manager/mobile-app.jpg";
import taskManagerCollab from "./assets/images/projects/task-manager/collaboration.jpg";

import dashboardCharts from "./assets/images/projects/data-dashboard/charts.jpg";
import dashboardAnalytics from "./assets/images/projects/data-dashboard/analytics.jpg";
import dashboardMobile from "./assets/images/projects/data-dashboard/mobile-dashboard.jpg";

// Sample project data with local images
export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with advanced features and seamless user experience.",
    fullDescription:
      "This comprehensive e-commerce platform was built from the ground up using React and Node.js...",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redis"],
    githubUrl: "https://github.com/KianBahia/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    image: ecommerceHero, // Use imported image
    images: [ecommerceHero, ecommerceDashboard, ecommerceMobile],
  },
  {
    title: "Task Management App",
    description:
      "A mobile-first progressive web app for task management with offline functionality.",
    fullDescription:
      "This task management application is built as a Progressive Web App (PWA)...",
    technologies: [
      "React",
      "TypeScript",
      "PWA",
      "IndexedDB",
      "Service Workers",
      "WebSockets",
    ],
    githubUrl: "https://github.com/KianBahia/task-manager-pwa",
    liveUrl: "https://taskmanager-demo.com",
    image: taskManagerMain,
    images: [taskManagerMain, taskManagerMobile, taskManagerCollab],
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard that transforms complex datasets into beautiful visualizations.",
    fullDescription:
      "This data visualization dashboard was designed to handle large datasets...",
    technologies: [
      "React",
      "D3.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    githubUrl: "https://github.com/KianBahia/data-dashboard",
    liveUrl: "https://dashboard-demo.com",
    image: dashboardCharts,
    images: [dashboardCharts, dashboardAnalytics, dashboardMobile],
  },
  // ... add more projects
];

// About section data
export const aboutData = {
  bio: "I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems...",

  hobbies: [
    "Coding",
    "Reading Tech Blogs",
    "Photography",
    "Hiking",
    "Gaming",
    "Music Production",
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Next.js",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "CI/CD", "Agile", "Testing"],
    },
  ],

  certificates: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      name: "React Advanced Certification",
      issuer: "Meta",
      date: "2023",
    },
    // ... add more certificates
  ],
};
