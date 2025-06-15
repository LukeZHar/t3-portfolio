"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  videoUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video Player */}
          <div className="bg-muted aspect-video w-full overflow-hidden rounded-lg">
            <video
              src={project.videoUrl}
              controls
              className="h-full w-full object-cover"
              poster="/placeholder.svg"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
