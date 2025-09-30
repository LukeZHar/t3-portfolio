"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "~/components/Navigation";
import { ProjectModal } from "~/components/ProjectModal";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Play,
  Code,
  Palette,
  Database,
} from "lucide-react";
import { allProjects, skills } from "~/lib/const";

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof allProjects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof allProjects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-24 pb-12">
        <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-transparent" />
        <div className="relative container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                Brisbane, Australia
              </div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                Hi, I&apos;m Luke Harris,
                <span className="text-primary"> Full-stack Developer</span>
              </h1>
              <p className="text-muted-foreground max-wd-md text-lg leading-relaxed">
                I am a passionate full-stack developer with a keen interest in
                building scalable web applications. I love creating intuitive
                user interfaces and robust backend systems.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="lg" asChild>
                  <Link href="/projects" className="group">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group"
                  onClick={() => window.open("/LukeResume.pdf", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Redirect to Resume
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/LukeZHar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/luke-z-harris/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:luke.z.harris@hotmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="rounded-full">
                  <Avatar className="relative h-64 w-64">
                    <AvatarImage src="/L.H.png" alt="Luke Harris" />
                    <AvatarFallback className="text-4xl">LH</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Skills</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              I have a diverse skill set that allows me to tackle both frontend
              and backend challenges effectively.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup) => (
              <Card
                key={skillGroup.category}
                className="text-center transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="bg-primary/10 text-primary mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                    {skillGroup.icon}
                  </div>
                  <CardTitle className="text-lg">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-1">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Projects Section */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Here are some of my recent projects that showcase my skills and
              creativity. Click on any project to see more.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {allProjects
              .filter((project) => project.featured)
              .map((project) => (
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
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        Watch video
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-xl">
              Whether you need a full-stack application or just a frontend
              component, I&apos;m here to help. Let&apos;s work together to
              bring your ideas to life.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;
