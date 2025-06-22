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
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Play, Github, ExternalLink, Search, Calendar } from "lucide-react";
import { allProjects } from "~/lib/const";


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
            <TabsList className="mx-auto mb-4 md:flex w-full max-w-md md:flex-row bg-zinc-800 text-sm">
              <TabsTrigger className="focus:bg-black/100" value="all">
                All 
              </TabsTrigger>
              |
              <TabsTrigger className="focus:bg-black/100" value="featured">
                Featured
              </TabsTrigger>
              |
              <TabsTrigger className="focus:bg-black/100" value="full stack">
                Full Stack
              </TabsTrigger>
              |
              <TabsTrigger className="focus:bg-black/100" value="backend">
                Backend
              </TabsTrigger>
              |
              <TabsTrigger className="focus:bg-black/100" value="frontend">
                Frontend
              </TabsTrigger>
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
