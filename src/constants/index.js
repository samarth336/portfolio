import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/coffee.jpg";
import project3 from "../assets/projects/portfulio.png";
import project4 from "../assets/projects/weatherapp.png";

export const HERO_CONTENT = `I am a dedicated full-stack developer with a strong focus on Node.Js and a comprehensive tech stack. My expertise spans front-end technologies including React.js and HTML, CSS and back-end technologies such as Node.js, MySQL, MongoDB and Firebase. With hands-on experience in building innovative and scalable applications, I aim to leverage my skills to deliver exceptional user experiences and drive business growth through dynamic, cutting-edge solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building efficient, AI-powered, and user-centric applications. My experience includes working extensively with technologies like React.js, Node.js, MongoDB, Firebase, and Express.js `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "FactShield",
    image: project1,
    description:
      "FactShield is an AI-driven platform designed to detect and flag misinformation across social media and online content. It allows users to verify text, images, and videos by analyzing them against reliable sources, helping combat fake news effectively.",
    technologies: ["React.Js", "Generative AI"],
  },
  {
    title: "Coffee Shop Management System",
    image: project2,
    description:
      "A full-stack web app for managing orders, inventory, and users with secure authentication, role-based access, and an intuitive UI for a seamless experience.",
    technologies: ["React.Js", "Nodejs", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.Js","Tailwind CSS"],
  },
  {
    title: "Weather Map Webapp",
    image: project4,
    description:
      "The interactive weather app, developed using React.js, enables users to click on a map and view real-time weather data for various locations. It integrates a weather API to display essential details such as temperature, humidity, wind speed, and forecasts, ensuring accurate and up-to-date information. The application features an intuitive and user-friendly UI/UX, allowing for a seamless and engaging weather exploration experience.",
    technologies: ["React.Js", "API"],
  },
  // {
  //   title: "Me Chat",
  //   image: project5,
  //   description:
  //     "Me-Chat is a sophisticated real-time messaging application that leverages a live database for seamless and instantaneous communication. It offers users real-time updates on conversation history and facilitates dynamic, interactive interactions. By utilizing advanced data synchronization, the app ensures a smooth and continuous chat experience.",
  //   technologies: ["Flutter", "Firebase"],
  // },
  // {
  //   title: "Money Transfer Web Application",  // New project
  //   image: payment,  // Ensure this image is added to your assets
  //   description:
  //     "A secure money transfer web application that ensures safe transactions using session management. Critical bugs are handled effectively, ensuring that funds are safe even in the event of a transaction failure.",
  //   technologies: ["React", "Node.js", "MongoDB", "Sessions"],
  // },

];

export const CONTACT = {
  address: " solapur , Maharashtra",
  phoneNo: "+91 9579951712 ",
  email: "patilsamarth543@gmail.com",
};
