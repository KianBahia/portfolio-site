// Import Healix project images
import healixHome from "./assets/images/projects/healix/homePage.png";
import healixPost from "./assets/images/projects/healix/postPage.png";
import healixPrivate from "./assets/images/projects/healix/privatePage.png";
import healixAbout from "./assets/images/projects/healix/aboutPage.png";

// Import Steam Data Science Report PDF and screenshot
import steamReportPDF from "./assets/documents/steam-data-science-report.pdf";
import steamReportScreenshot from "./assets/images/projects/steam-data-science-report/steamReportScreenshot.png";

// Import Real Emotion project images
import realEmotionLogo from "./assets/images/projects/real-emotion/realEmotionLogo.png";
import realEmotionHistory from "./assets/images/projects/real-emotion/history.jpeg";
import realEmotionScreenshotHistory from "./assets/images/projects/real-emotion/ScreenshotImageHistory.jpeg";
import realEmotionScreenshotText from "./assets/images/projects/real-emotion/ScreenshotImageText.png";
import realEmotionSettings from "./assets/images/projects/real-emotion/settings.jpeg";
import realEmotionShortcuts from "./assets/images/projects/real-emotion/shortcuts.jpeg";
import realEmotionText from "./assets/images/projects/real-emotion/text.jpeg";

// Import EPFL Life project images
import epflLifeLogo from "./assets/images/projects/epfl-life/EPFLLifeLogo.png";
import epflLifeAllMockups from "./assets/images/projects/epfl-life/AllMockups.png";
import epflLifeMU1 from "./assets/images/projects/epfl-life/MUuserFlow1.png";
import epflLifeMU2 from "./assets/images/projects/epfl-life/MUuserFlow2.png";
import epflLifeMU3 from "./assets/images/projects/epfl-life/MUuserFlow3.png";
import epflLifeMU4 from "./assets/images/projects/epfl-life/MUuserFlow4.png";
import epflLifeMU5 from "./assets/images/projects/epfl-life/MUuserFlow5.png";
import epflLifeMU6 from "./assets/images/projects/epfl-life/MUuserFlow6.png";
import epflLifeMU7 from "./assets/images/projects/epfl-life/MUuserFlow7.png";

// Your project data - edit descriptions and add your information
export const projects = [
  {
    title: "Real Emotion",
    description:
      "A React Native iOS app built at EPFL during HackaHealth 2025, designed to help non-verbal individuals communicate naturally and emotionally through AI-generated speech.",
    fullDescription:
      "Real Emotion is a React Native iOS app built at EPFL during HackaHealth 2025, designed to help non-verbal individuals communicate naturally and emotionally through AI-generated speech.\n\nThe app leverages the latest advancements in AI-generated speech synthesis to provide users with a natural and expressive communication experience. It features a user-friendly interface, voice customisation options, and a range of text-to-speech functionalities to help users communicate their thoughts and emotions effectively.\n\nI led frontend development, creating the React Native interface, voice generation logic, and integration with the AI speech synthesis API. The app demonstrates how AI can enhance communication for individuals with special needs and improve accessibility in everyday interactions.",
    technologies: [
      "React Native",
      "TypeScript",
      "Xcode",
      "Hume AI API",
      "iOS Development",
      "UI/UX Design",
    ], // Add your technologies
    githubUrl: "https://github.com/KianBahia/Tactility_Real_Emotion",
    liveUrl: "https://youtube.com/shorts/dpMF2Qc3h5c?si=0dxCHTKZONMK6qOa",
    image: realEmotionLogo, // Main project image
    images: [
      realEmotionText,
      realEmotionScreenshotHistory,
      realEmotionHistory,
      realEmotionSettings,
      realEmotionShortcuts,
      realEmotionScreenshotText,
    ], // Gallery images
  },
  {
    title: "Healix",
    description:
      "A blockchain-based diary app enabling users to share moods and messages publicly or privately, with private posts encrypted on-chain using SEAL for full data privacy.",
    fullDescription:
      "Healix is a decentralised mental-health diary built on the Sui blockchain, designed to give users complete control over their emotional data.\n\nUsers can post moods and short messages either publicly, which is visible to everyone pseudo-anonymously, or privately, where posts are encrypted directly on-chain using SEAL and accessible only to allowlisted users.\n\nI led frontend development, creating the React-based interface, wallet integration, and logic to fetch, decrypt, and display encrypted messages from the blockchain in a secure community feed.\n\nHealix demonstrates how blockchain can protect sensitive data through transparent encryption and user-owned privacy.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Sui", "SEAL"],
    githubUrl: "https://github.com/KianBahia/SUI_Hack",
    liveUrl: "https://www.youtube.com/watch?v=dAUoh2U_bx8",
    image: healixHome, // Main project image
    images: [healixHome, healixPost, healixPrivate, healixAbout], // Gallery images
  },
  {
    title: "Steam Data Science Report",
    description:
      "A comprehensive data science analysis of 140,000+ Steam games investigating whether increased game releases correlate with declining review scores over time.",
    fullDescription:
      "This comprehensive data science project explores trends in game quality on the Steam platform, investigating whether the rapid increase in annual game releases has led to a decline in average review scores.\n\nUsing a dataset of 140,000+ games scraped from the Steam API and SteamSpy, the analysis performs extensive data cleaning and merging using pandas, applies regression analysis and hypothesis testing (R², p-value) to examine the relationship between release volume and review quality, and uses time series forecasting (ARIMA) to predict future trends in game releases and review scores.\n\nKey findings reveal a statistically significant decline in review scores as game releases surged post-2013, with forecasts suggesting that by 2029, over 85% of released games may fall below the historical average review score.\n\nThe project demonstrates proficiency in data analysis, statistical modeling, time series forecasting, and data visualisation techniques, showcasing the ability to extract meaningful insights from large datasets and present findings in a clear, professional manner.",
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "NumPy",
    ],
    githubUrl: "https://github.com/KianBahia/Steam-Data-Science-Report",
    liveUrl: "",
    image: steamReportScreenshot, // PDF screenshot thumbnail
    images: [], // No image gallery for PDF projects
    pdfUrl: steamReportPDF, // PDF viewer will be used
  },
  {
    title: "EPFL LIFE",
    description:
      "A mobile application designed to connect EPFL students through events, clubs, and activities",
    fullDescription:
      "Currently in development, EPFL LIFE is a mobile application designed to connect EPFL students through events, associations, and activities.\n\nThe app will allow students to discover and participate in various events, associations, and activities organised by the EPFL community. It features a user-friendly interface, event listings, club information, and activity recommendations to help students find the perfect fit for their interests and schedule.\n\nFigma mockups currently displayed to showcase the app's design and functionality.",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase"],
    githubUrl: "https://github.com/KianBahia/epfl-life",
    liveUrl: "",
    image: epflLifeLogo, // Logo as thumbnail
    images: [
      epflLifeMU1,
      epflLifeMU2,
      epflLifeMU3,
      epflLifeMU4,
      epflLifeMU5,
      epflLifeMU6,
      epflLifeMU7,
      epflLifeAllMockups,
    ], // All MU images as gallery
  },
];

// About section data - customize with your information
export const aboutData = {
  bio: "I’m Kian, a penultimate-year Computer Science and Artificial Intelligence student at the University of Edinburgh, currently spending a year abroad at EPFL in Switzerland. My passion for technology started young, but recent advancements in AI sparked a deeper interest that led me to specialise in this exciting field. I’ve gained practical experience through a data science internship at Group Amana in Dubai and meaningful projects like HackaHealth’s Real Emotion app, a tool enabling non-verbal individuals to communicate with emotional AI speech, inspired by a teammate’s own story.\n\nOutside of my technical pursuits, I enjoy travelling and exploring the beautiful Swiss landscape through hiking. I stay active with swimming, bouldering, and gym sessions, and also enjoy playing the guitar.",

  hobbies: [
    "Coding",
    "Swimming",
    "Guitar",
    "Hiking",
    "Gaming",
    "Travelling",
    "Bouldering",
  ],

  languages: [
    { name: "English", level: "Native" },
    { name: "Japanese", level: "N5" },
    { name: "Chinese", level: "N5" },
    { name: "French", level: "A1" },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "React Native",
        "Jetpack Compose",
        "MVVM",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Next.js",
      ],
    },
    {
      category: "Backend",
      items: [
        "Python",
        "Node.js",
        "Flask",
        "Java",
        "Kotlin",
        "C",
        "SQL",
        "API Integration",
      ],
    },
    {
      category: "Software & Tools",
      items: [
        "Git",
        "Linux",
        "Power BI",
        "CI/CD",
        "MIPS Assembly",
        "Xcode",
        "DAX",
        "Figma",
        "Photoshop",
        "Premiere Pro",
        "Blender",
      ],
    },
  ],

  certificates: [
    {
      name: "Duke of Edinburgh Gold Award",
      issuer: "The Duke of Edinburgh's Award",
      date: "2019-2022",
    },
    {
      name: "Prize for Graphic Communication",
      issuer: "George Watson's College",
      date: "2022, 2023",
    },
    {
      name: "National Pool Lifeguard Qualification",
      issuer: "Royal Life Saving Society UK",
      date: "2022",
    },
    {
      name: "Diploma in Japanese Language",
      issuer: "Alison",
      date: "2024",
    },
  ],
};
