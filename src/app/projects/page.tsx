"use client";

import { useState } from "react";
import { Navigation } from "~/components/Navigation";
import { ProjectModal } from "~/components/ProjectModal";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Play, Github, ExternalLink, Search, Calendar } from "lucide-react";

const allProjects = [
  {
    id: "1",
    title: "Pump Task",
    description:
      "A t3 task management app for teams to collaborate and track their work.",
    longDescription:
      "Pump task is a task managmenet app that allows teams to collaborate and track their work. It features real-time updates, task assignments, and progress tracking. It has a inuilt NFT reward system that allows users to earn NFTs for completing tasks.",
    videoUrl: "/videos/Pump-task.mp4",
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
    videoUrl: "/videos/Ticket-Task.mp4",
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
    image: "/L.H.png",
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
    category: "CLI",
    year: 2024,
    githubUrl: "https://github.com/LukeZHar/T1A3-Terminal_application",
    image: "/L.H.png",
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
    image: "/L.H.png",
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
    image: "/L.H.png",
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
    image: "/L.H.png",
    featured: false,
  },
];

export default function ProjectsPage() {
  const [isSelectedProject, setIsSelectedProject] = useState<
    (typeof allProjects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchTerm, setIsSearchTerm] = useState("");
  const [isActiveTab, setIsActiveTab] = useState("all");

  const handleProjectClick = (project: (typeof allProjects)[0]) => {
    setIsSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(isSearchTerm.toLowerCase());
    const matchesCategory =
      isActiveTab === "all" ||
      project.category.toLowerCase() === isActiveTab.toLowerCase() ||
      (isActiveTab === "featured" && project.featured);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <div className="px-4 pt-24 pb-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold">My Projects</h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
              Explore my projects that showcase my skills in full stack
              development, backend APIs, and frontend design.
            </p>

            {/* Search Input */}
            <div className="relative mx-auto max-w-md">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
              <Input
                placeholder="Search projects..."
                value={isSearchTerm}
                onChange={(e) => setIsSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Filters */}
          <Tabs value={isActiveTab} onValueChange={setIsActiveTab}>
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="full stack">Full Stack</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="cli">CLI</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl"
              onClick={() => handleProjectClick(project)}
            >
              <CardHeader className="relative">
                <div className="bg-muted relative mb-4 aspect-video overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-2 left-2">Featured</Badge>
                  )}
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="outline">{project.category}</Badge>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                  <Button variant={"ghost"} size={"sm"} className="flex-1">
                    <Play className="mr-2 h-4 w-4" />
                    Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No projects found matching this criteria.
            </p>
          </div>
        )}

        {/* stats */}
        <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="text-primary mb-2 text-3xl font-bold">
              {allProjects.length}
            </div>
            <div className="text-muted-foreground text-sm">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-primary mb-2 text-3xl font-bold">
              {allProjects.filter((p) => p.featured).length}
            </div>
            <div className="text-muted-foreground text-sm">
              Featured Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-primary mb-2 text-3xl font-bold">
              {new Set(allProjects.flatMap((p) => p.technologies)).size}
            </div>
            <div className="text-muted-foreground text-sm">
              Technologies Used
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={isSelectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
