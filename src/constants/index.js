import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/let's_code.png";
import project3 from "../assets/projects/wanderlust.png";
import project4 from "../assets/projects/portfulio.png";
import project5 from "../assets/projects/weatherapp.png";

export const HERO_CONTENT = `I am a dedicated full-stack developer with a strong focus on Node.Js and a comprehensive tech stack. My expertise spans front-end technologies including React.js and HTML, CSS and back-end technologies such as Node.js, MySQL, MongoDB and Firebase. With hands-on experience in building innovative and scalable applications, I aim to leverage my skills to deliver exceptional user experiences and drive business growth through dynamic, cutting-edge solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building efficient, AI-powered, and user-centric applications. My experience includes working extensively with technologies like React.js, Node.js, MongoDB, Firebase, and Express.js `;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Software Developer Intern",
    company: "LogStrike",
    description: `Currently working as an SDA Intern at LogStrike, contributing to the development of a scalable e-commerce
    platform using modern web technologies. Actively building an open-source micro frontend UI component
    library to enable a modular and reusable frontend architecture, improving development efficiency by 30%.
    Collaborating with cross-functional teams of 5+ members to ensure seamless integration of frontend
    components with backend services. Gaining hands-on experience with technologies such as Next.js, Payload
    CMS, and Firebase, enhancing technical skills and team collaboration.`,
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
    title: "Let's Code",
    image: project2,
    description:
      "Let's Code is a platform that empowers learners and developers to practice coding, and enhance their programming skills through hands-on challenges and real-world problem-solving.",
    technologies: ["React.Js", "Nodejs", "MongoDB"],
  },
  {
    title: "Wanderlust",
    image: project3,
    description:
      "Wandurlust lets you explore and book unique homes and stays, offering a seamless travel experience just like Airbnb.",
    technologies: ["HTML", "CSS", "JavaScript", "Nodejs", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.Js", "Tailwind CSS"],
  },
  {
    title: "Weather Map Webapp",
    image: project5,
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
