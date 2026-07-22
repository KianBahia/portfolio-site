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
import epflLifeHomeScreen from "./assets/images/projects/epfl-life/homeScreen.jpg";
import epflLifeHomeScreen2 from "./assets/images/projects/epfl-life/homeScreen2.jpg";
import epflLifeEventScreen3Scroll from "./assets/images/projects/epfl-life/eventScreen3Scroll.jpg";
import epflLifeCalendar from "./assets/images/projects/epfl-life/calendar.jpg";
import epflLifeAssocScreen from "./assets/images/projects/epfl-life/assocScreen.jpg";
import epflLifeAssociationBrowser from "./assets/images/projects/epfl-life/associationBrowser.jpg";
import epflLifeSubscribeAssoc from "./assets/images/projects/epfl-life/subscribeAssoc.jpg";
import icLauncherPlaystore from "./assets/images/projects/epfl-life/ic_launcher-playstore.png";
import eventScreen3 from "./assets/images/projects/epfl-life/eventScreen3.jpg";
import assocScreen2 from "./assets/images/projects/epfl-life/assocScreen2.jpg";
import calendar2 from "./assets/images/projects/epfl-life/calendarScreen2.jpg";

// Import EcoMeet project images
import ecomeetScreenshot from "./assets/images/projects/ecoMeet/ecomeetScreenshot.png";
import planeRender from "./assets/images/projects/ecoMeet/planeRender.png";
import EMScreenshot1 from "./assets/images/projects/ecoMeet/screenshot1.jpg";
import EMScreenshot2 from "./assets/images/projects/ecoMeet/screenshot2.jpg";
import EMScreenshot3 from "./assets/images/projects/ecoMeet/screenshot3.jpg";

// Import Asa Datafest 2025 project images
import asaLogo from "./assets/images/projects/asa-datafest/datafestLogo.png";
import asaScreenshot1 from "./assets/images/projects/asa-datafest/insight1.png";
import asaScreenshot2 from "./assets/images/projects/asa-datafest/insight2.png";

// Import Ribbit project images
import ribbitLogo from "./assets/images/projects/ribbit/ribbit-logo.png";
import ribbitScreenshot1 from "./assets/images/projects/ribbit/ribbit-create-page.png";
import ribbitScreenshot2 from "./assets/images/projects/ribbit/ribbit-creator-page.png";
import ribbitScreenshot3 from "./assets/images/projects/ribbit/ribbit-wallet-page.png";
import ribbitScreenshot4 from "./assets/images/projects/ribbit/ribbit-discover-page.png";

// Import Water Caustics Renderer project images
import FinalReport from "./assets/documents/ComputerGraphicsFinalReport.pdf";
import finalFrame from "./assets/images/projects/nori-renderer/finalFrame.png";
import finalVideo from "./assets/images/projects/nori-renderer/finalVideo.gif";

// Import LEGO Island project images
import legoIslandScreenshot from "./assets/images/projects/legoIsland/legoIslandScreenshot.png";
import legoIslandReport from "./assets/documents/LEGO-Island-FINAL-Process-Book.pdf";

// Your project data - edit descriptions and add your information
export const projects = [
  {
    title: "Water Caustics Renderer",
    description:
      "Caustics renderer built from scratch in C++ using Specular Manifold Sampling, Beer's Law water attenuation, and image texture mapping.",
    fullDescription:
      "A physically-based renderer built as a final assignment for the Advanced Computer Graphics master's course at EPFL, extending the Nori C++ ray tracing framework with four custom features.\n\nThe core contribution is Specular Manifold Sampling (SMS), implemented by following the techniques from Zeltner et al. (Specular Manifold Sampling for Rendering High-Frequency Caustics and Glints, 2020) to render water caustics, the rippling light patterns seen on the seafloor beneath a water surface. Standard path tracers cannot find these paths at all which is why water caustics are notoriously difficult to simulate; SMS uses Newton iteration to walk a specular vertex across the water mesh until it satisfies Snell's law exactly, finding valid light paths that would otherwise have zero probability of being sampled.\n\nBeer's Law attenuation models wavelength-dependent absorption as light travels through water. Red wavelengths are absorbed quickly (a=0.45) while blue wavelengths travel furthest (a=0.02), producing the natural blue-green colour shift seen in shallow tropical water.\n\nImage texture mapping replaces flat material colours with baked PNG/JPG textures loaded via stb_image.h, with bilinear interpolation across UV coordinates. Directional lighting adds sun and sky emitters as infinite-distance lights compatible with the existing MIS framework.\n\nThe final scene I produced to showcase these implementations is a tropical island viewed from above, featuring a beach house on a sandy island surrounded by shallow water, with 119 individual textures across all scene objects including rocks, wooden structures, a boat, dock, and furniture. The water animation was produced by exporting 72 OBJ files from Blender, each with slightly different Musgrave displacement parameters along a circular sin/cos path to guarantee a seamless loop, then batch-rendering overnight using a custom PowerShell script that monitors Nori's stdout for the render completion message before automatically saving each frame. The full animation took over 30 hours to render and the 72 frames were combined with ffmpeg into a 3-second looping video at 24fps.",
    technologies: [
      "C++",
      "Path Tracing",
      "Monte Carlo",
      "Specular Manifold Sampling",
      "Nori",
      "Beer's Law",
      "Image Texture Mapping",
      "CMake",
      "Directional Lighting",
    ],
    githubUrl: "https://github.com/KianBahia/cs440-2026-KianBahia",
    liveUrl: "",
    image: finalFrame, // thumbnail
    images: [finalFrame, finalVideo],
    pdfUrl: FinalReport,
  },

  {
    title: "EPFL LIFE",
    description:
      "A mobile app designed to connect EPFL students through events, student associations, and activities.",
    fullDescription:
      "EPFL LIFE is a mobile application designed to connect EPFL students through events, associations, and activities.\n\nThe app will allow students to discover and participate in various events, associations, and activities organised by the EPFL community. It features a user-friendly interface, event listings, association information, and activity recommendations to help students find the perfect fit for their interests and schedule.\n\nScreenshots of the final app's design are displayed to showcase the final product.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Firebase",
      "Git",
      "Figma",
      "Android Studio",
    ],
    githubUrl: "https://github.com/EPFL-Life/life",
    liveUrl: "",
    image: icLauncherPlaystore, // thumbnail
    images: [
      { left: epflLifeHomeScreen, right: epflLifeHomeScreen2 }, // Side by side view
      { left: eventScreen3, right: epflLifeEventScreen3Scroll },
      { left: epflLifeSubscribeAssoc, right: epflLifeAssociationBrowser },
      { left: epflLifeAssocScreen, right: assocScreen2 },
      { left: epflLifeCalendar, right: calendar2 },
    ], // All EPFL Life screenshots as gallery
  },
  {
    title: "LEGO Island Website",
    description:
      "An interactive island map visualising 50 years of LEGO history.",
    fullDescription:
      "LEGO Island is an interactive data visualisation built for the COM-480 Data Visualisation course at EPFL, presenting 18,457 LEGO set records spanning 1970–2022 as an explorable top-down island map inspired by the 1997 video game of the same name.\n\nEach of the eight geographic districts on the island represents a major LEGO theme (Star Wars, City, Duplo, Technic, etc.), with district badge size scaled proportionally to set count using square-root area scaling. Clicking a district zooms the island toward that region and reveals a bottom-sheet data panel containing four D3 charts: a sets-per-year area timeline, a piece-count histogram, a price trend line, and a top subthemes bar chart. Each panel adopts a per-district accent colour system so every theme feels visually distinct.\n\nLicensed themes (Star Wars, Harry Potter, Marvel) are handled through an 'IP folder' pattern and placed on a separate small island grouping all franchises, where clicking a franchise card loads its full chart suite. A dual-thumb year range slider filters the entire island in real time, rescaling every district marker to reflect only sets released within the selected window, turning the map into a time-travel explorer of LEGO's cultural evolution.\n\nI was responsible for the island SVG layout and district placement, district marker DOM generation, zoom-to-district transform logic, parallax RAF controller, year slider UI and marker rescaling, and the overall CSS architecture. The project is built in vanilla JavaScript with D3 v7 and PapaParse, with no bundler, loading directly in a browser.",
    technologies: [
      "D3.js",
      "JavaScript",
      "PapaParse",
      "SVG",
      "HTML/CSS",
      "Python",
      "Pandas",
    ],
    githubUrl:
      "https://github.com/com-480-data-visualization/LEGO-dschungelfledermause", // update with actual repo URL
    liveUrl:
      "https://com-480-data-visualization.github.io/LEGO-dschungelfledermause/index.html", // add if hosted
    image: legoIslandScreenshot,
    pdfUrl: legoIslandReport,
  },
  {
    title: "Ribbit",
    description:
      "A Telegram Mini App that lets content creators monetise posts, powered by TON, allowing creators to keep up to 95% of their earnings.",
    fullDescription:
      "Ribbit is a Telegram Mini App that enables content creators to monetise their work directly through a seamless, blockchain-powered subscription and pay-per-post platform. \n\n Built solo for the BSA AlphaTon Hackathon (winning a podium prize and attracting investor interest), it lets creators publish exclusive content that fans unlock using in-app tokens. \n\n Users purchase Telegram Stars natively within Telegram, which are converted into platform tokens. Creators can then withdraw their earnings directly as TON cryptocurrency. \n\nAll blockchain activity runs silently in the background, keeping the experience familiar and frictionless for everyday users while ensuring creators take home up to 95% of revenue. ",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Telegram SDK",
      "TON",
      "HTTP x402",
    ],
    githubUrl: "https://github.com/TipTok-App/Ribbit",
    liveUrl: "",
    image: ribbitLogo, // thumbnail
    images: [
      ribbitScreenshot4,
      ribbitScreenshot2,
      ribbitScreenshot3,
      ribbitScreenshot1,
    ],
  },
  {
    title: "EcoMeet",
    description:
      "A global meeting optimisation tool built at DurHackX, awarded Runner-Up by QRT, using real flight data to minimise travel impact.",
    fullDescription:
      "EcoMeet is a global meeting optimisation tool built at DurHack X, awarded Runner-Up in Qube Research & Technologies’ “Meeting in the Middle” challenge, using real flight data to minimise travel impact.\n\nThe tool uses real flight data to analyse the environmental impact of different meeting locations and routes, and provides recommendations for minimising travel impact. It features a user-friendly interface, data visualisation, and a range of tools to help users make informed decisions about their meetings.\n\nI led frontend development, creating the React interface, data visualisation, and integration with the FastAPI backend. The tool demonstrates how technology can be used to improve sustainability in everyday life.",
    technologies: [
      "React",
      "Cesium",
      "FastAPI",
      "Blender",
      "Python",
      "Gemini API",
    ],
    githubUrl: "https://github.com/carlkaziboni/durhack2025",
    liveUrl: "https://youtu.be/SSPweZEMFiw",
    image: planeRender, // thumbnail
    images: [
      ecomeetScreenshot,
      EMScreenshot1,
      EMScreenshot2,
      EMScreenshot3,
      planeRender,
    ], // ecoMeet screenshots
  },
  {
    title: "Real Emotion",
    description:
      "A React Native iOS app built at EPFL during HackaHealth 2025.",
    fullDescription:
      "Real Emotion is a React Native iOS app built at EPFL during HackaHealth 2025, designed to help non-verbal individuals communicate naturally and emotionally through AI-generated speech.\n\nThe app leverages the latest advancements in AI-generated speech synthesis to provide users with a natural and expressive communication experience. It features a user-friendly interface, voice customisation options, and a range of text-to-speech functionalities to help users communicate their thoughts and emotions effectively.\n\nI led frontend development, creating the React Native interface, voice generation logic, and integration with the AI speech synthesis API. The app demonstrates how AI can enhance communication for individuals with special needs and improve accessibility in everyday interactions.",
    technologies: [
      "React Native",
      "TypeScript",
      "Xcode",
      "Hume AI API",
      "iOS Development",
      "UI/UX Design",
    ], // Add technologies
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
      "A blockchain diary app enabling users to share moods and messages publicly or privately, with private posts encrypted on-chain.",
    fullDescription:
      "Healix is a decentralised mental-health diary built on the Sui blockchain, designed to give users complete control over their emotional data.\n\nUsers can post moods and short messages either publicly, which is visible to everyone pseudo-anonymously, or privately, where posts are encrypted directly on-chain using SEAL and accessible only to allowlisted users.\n\nI led frontend development, creating the React-based interface, wallet integration, and logic to fetch, decrypt, and display encrypted messages from the blockchain in a secure community feed.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Sui", "SEAL"],
    githubUrl: "https://github.com/KianBahia/SUI_Hack",
    liveUrl: "https://www.youtube.com/watch?v=dAUoh2U_bx8",
    image: healixHome, // Main project image
    images: [healixHome, healixPost, healixPrivate, healixAbout], // Gallery images
  },
  {
    title: "Steam Data Science Report",
    description:
      "A data science analysis of 140,000+ Steam games investigating whether increased game releases correlate with declining review scores over time.",
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
    title: "ASA Datafest 2025",
    description:
      "Winner of the ”Best Use of External Dataset” at ASA Datafest 2025.",
    fullDescription:
      "We analysed 200K+ commercial real-estate lease records to uncover structural drivers behind industry location decisions. A major challenge was that ~12,500 records were missing an internal_industry classification, limiting downstream analysis. We implemented a K-Nearest Neighbours (KNN) classifier to reclassify these entries, leveraging the assumption that firms with similar infrastructure requirements (e.g., tech clusters, logistics-heavy industries) co-locate geographically. This increased our usable dataset by 42.6%, enabling far more robust temporal and spatial analysis. \n\n Using the enriched dataset, we examined changes in industry entry leases between 2018 and 2024. We found a significant rise in construction-sector leases in Illinois, California, Florida, and North Carolina. Investigating potential drivers, we tested correlations with market stability and tax changes, but found limited explanatory power. By integrating external US rail network data and visualising lease density alongside major rail corridors, we identified Illinois as a uniquely connected national rail hub. This connectivity provides construction firms with efficient, low-cost transportation of heavy materials nationwide. Further investigation revealed the spike aligned with the 2019 launch of the $44.8B “Rebuild Illinois” infrastructure programme, which increased demand for staging space, material storage, and temporary offices. The project demonstrated how combining machine learning, external infrastructure data, and policy context can transform incomplete commercial datasets into actionable economic insight.",
    technologies: [
      "Python",
      "ML",
      "Leaflet",
      "Big Data",
      "HTML/CSS",
      "Matplotlib",
      "Jupyter",
    ],
    githubUrl: "https://github.com/GlenFilson/ASADatafest25",
    liveUrl: "",
    image: asaLogo,
    images: [asaScreenshot1, asaScreenshot2],
  },
];

// About section data
export const aboutData = {
  bio: "I’m Kian, a penultimate-year Computer Science and Artificial Intelligence student at the University of Edinburgh, currently spending a year abroad at EPFL in Switzerland. My passion for technology started young, but recent advancements in AI sparked a deeper interest that led me to specialise in this exciting field. I’ve gained practical experience through a data science internship at Group Amana in Dubai and a number of meaningful projects.\n\nOutside of my technical pursuits, I enjoy travelling and exploring the beautiful Swiss landscape through hiking and skiing. I stay active with swimming, bouldering, and gym sessions, and also enjoy playing the guitar.",

  hobbies: [
    "Coding",
    "Swimming",
    "Skiing",
    "Guitar",
    "Hiking",
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
        "C++",
        "SQL",
        "API Integration",
        "Firebase",
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
        "Final Cut Pro",
        "DaVinci Resolve",
        "Fusion 360",
        "Blender",
      ],
    },
  ],

  certificates: [
    {
      name: "Artificial Intelligence in Healthcare",
      issuer: "Royal College of Surgeons of Ireland",
      date: "2025",
    },
    {
      name: "Diploma in Japanese Language",
      issuer: "Alison",
      date: "2024",
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
      name: "Duke of Edinburgh Gold Award",
      issuer: "The Duke of Edinburgh's Award",
      date: "2019-2022",
    },
  ],
};
