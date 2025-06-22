import { Code, Database, Palette } from "lucide-react";

export const allProjects = [
  {
    id: "1",
    title: "Pump Task",
    description:
      "A t3 task management app for teams to collaborate and track their work.",
    longDescription:
      "Pump task is a task managment app that allows teams to collaborate and track their work. It features real-time updates, task assignments, and progress tracking. It has a inbuilt NFT reward system that allows users to earn NFTs for completing tasks.",
    videoUrl: "https://www.youtube.com/embed/lxtDE8N3MLE?si=mZfo9C_4bQvbVchs",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ThirdWeb",
      "MongoDB",
    ],
    category: "Full Stack",
    year: 2025,
    githubUrl: "https://github.com/LukeZHar/Internship-Pump-Task",
    image: "/images/pump-task.png",
    featured: true,
  },
  {
    id: "2",
    title: "A ticket, A task it",
    description:
      "A MERN stack application that allows users to create and manage tickets.",
    longDescription:
      "A Ticket a Task It is a task management application developed using the MERN stack. The application aims to streamline task management and improve collaboration across teams by providing a user-friendly interface and robust backend functionalities",
    videoUrl: "https://www.youtube.com/embed/Auk9nUi1hrg?si=yiYjdHl5d4TfqtMi",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "CSS"],
    category: "Full Stack",
    year: 2025,
    githubUrl: "https://github.com/LukeZHar/MERN-Wizards-T3A2-B",
    liveUrl: "https://a-ticket-a-task-it.netlify.app/",
    image: "/images/Mern-Wiz.png",
    featured: true,
  },
  {
    id: "3",
    title: "Game Management Api",
    description: "PostgreSQL and Flask API for managing game data",
    longDescription:
      "A Game Management API built with Python and Flask, designed to provide a robust backend for managing game data. This API allows developers to perform CRUD operations on game entities such as players, achievments, and sessions.",
    videoUrl: "/videos/GameManagementAPI.mp4",
    technologies: ["Python", "Flask", "PostgreSQL"],
    category: "Backend",
    year: 2024,
    githubUrl: "https://github.com/LukeZHar/LukeHarris-T2A2",
    image: "/images/Game-Api.png",
    featured: true,
  },
  {
    id: "4",
    title: "Portfolio",
    description: "My personal portfolio website showcasing my work.",
    longDescription:
      "This is my personal portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and experience as a full stack developer.",
    videoUrl: "/videos/Portfolio.mp4",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    year: 2024,
    githubUrl: "https://github.com/LukeZHar/t3-portfolio",
    liveUrl: "https://lukeharris.dev",
    image: "/images/port.png",
    featured: false,
  },
  {
    id: "5",
    title: "Terminal CLI flashcard Quiz",
    description: "A terminal-based flashcard quiz application",
    longDescription:
      "This is a terminal-based flashcard quiz application built with Python. It allows users to create, manage, and take quizzes using flashcards. The application supports multiple-choice questions and provides a simple command-line interface for interaction.",
    videoUrl: "/videos/flashcardCLI.mp4",
    technologies: ["Python", "CLI"],
    category: "Backend",
    year: 2024,
    githubUrl: "https://github.com/LukeZHar/T1A3-Terminal_application",
    image: "/images/flashcard.png",
    featured: false,
  },
  {
    id: "6",
    title: "Pokemon API",
    description: "A simple Web site that displays Pokemon data",
    longDescription:
      "This is a simple website that displays Pokemon data using the PokeAPI. It allows users to search for Pokemon and view their details, including abilities, types, and stats.",
    videoUrl: "/videos/PokemonAPI.mp4",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    year: 2024,
    githubUrl: "https://github.com/LukeZHar/T3W6-PokemonAPI",
    image: "/images/pokemon.png",
    featured: false,
  },
  {
    id: "7",
    title: "Simon Says",
    description: "A simple Simon Says game built with JavaScript",
    longDescription:
      "This is a simple Simon Says game built with JavaScript. The game challenges players to repeat a sequence of colors and sounds, testing their memory and reaction time.",
    videoUrl: "/videos/simonsays.mp4",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    year: 2024,
    githubUrl: "https://github.com/LukeZHar/Simon-says",
    image: "/images/simon-says.png",
    featured: false,
  },
  {
    id: "8",
    title: "Typing Speed Test",
    description: "A web application to test your typing speed",
    longDescription:
      "This is a web application that allows users to test their typing speed. It provides a random text for users to type and calculates their speed in words per minute (WPM). The application also tracks accuracy and provides feedback on performance.",
    videoUrl: "/videos/TypingSpeedTest.mp4",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    year: 2024,
    githubUrl: "https://github.com/LukeZHar/t3w4-TypingSpeedTest",
    image: "/images/speed.png",
    featured: false,
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-5 w-5" />,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: <Database className="h-5 w-5" />,
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "Python",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "Design",
    icon: <Palette className="h-5 w-5" />,
    items: [
      "Figma",
      "Canva",
      "UI/UX Design",
      "Wireframing",
      "Responsive Design",
    ],
  },
];
  