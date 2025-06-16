"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Heart,
  Coffee,
  Music,
  Swords,
} from "lucide-react";
import { Navigation } from "~/components/Navigation";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <div className="px-4 pt-24 pb-12">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <Avatar className="mx-auto mb-6 h-40 w-32">
              <AvatarImage src="/Resume-pic.jpg" alt="Profile Picture" />
              <AvatarFallback className="text-2xl">LH</AvatarFallback>
            </Avatar>
            <h1 className="mb-4 text-4xl font-bold">About Me</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Hi, I&apos;m <strong>Luke H</strong>, a passionate software
              developer with a love for creating innovative solutions. I
              specialise in full-stack development and have a keen interest in
              web technologies.
            </p>
          </div>

          {/* Story section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-primary h-5 w-5" />
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Aspiring Full-Stack Developer with dedicated training from Coder
                Academy Bootcamp, aiming to advance a career in the IT and
                gaming industry
              </p>
              <p>
                Leveraging problem-solving skills and creativity honed during a
                culinary career, I am passionate about technology, regularly
                building and upgrading personal computers, and producing content
                for a gaming-focused YouTube channel. Seeking hands-on
                opportunities to further enhance skills in software development
                and contribute to innovative projects.
              </p>
              <p>
                When I&apos;m not coding, you can find me playing video games,
                watching anime, or enjoying a good cup of coffee.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            {/* Experience Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="text-primary h-5 w-5" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Intern</h3>
                  <p className="text-muted-foreground text-sm">Labrys. 2025</p>
                  <p className="text-sm">
                    Participated in a 10-week placement at Labrys, collaborating
                    with a team to build Pump.Task, a full stack task management
                    application that integrates gamification with blockchain
                    technology. Utilised NextJS, MongoDB, and ThirdWeb SDK,
                    enhancing my skills in web development and blockchain
                    integrations while effectively managing project
                    documentation and communication.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-semibold">Manager and head chef</h3>
                  <p className="text-muted-foreground text-sm">
                    Pelicans View Cafe. 2020 - 2023
                  </p>
                  <p className="text-sm">
                    Managed a team and operations, developing strong leadership
                    and organisational skills. Oversaw inventory and
                    point-of-sale systems, enhancing data management and user
                    experience insights.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-semibold">Head chef and B.O.H manager</h3>
                  <p className="text-muted-foreground text-sm">
                    Rascals. 2017 - 2020
                  </p>
                  <p className="text-sm">
                    Coordinated kitchen operations and staff, fostering teamwork
                    and project management abilities. Implemented inventory
                    control systems, sharpening analytical skills relevant to
                    data handling in tech.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education & Certificate Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="text-primary h-5 w-5" />
                  Education & Certificates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">
                    Diploma of Information and Technology
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Coder Academy. 2024 - 2025
                  </p>
                  <p className="text-sm">
                    Completed a comprehensive bootcamp focusing on full-stack
                    development, covering HTML, CSS, JavaScript, React, Node.js,
                    Python, MongoDB, Express and Flask.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-semibold">
                    Certificate IV in Commercial Cookery
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    TAFE. 2016 - 2017
                  </p>
                  <p className="text-sm">
                    Completed a nationally recognised qualification in
                    commercial cookery, gaining skills in food preparation,
                    kitchen management, and culinary techniques.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <Award className="h-4 w-4" />
                    Certifications
                  </h3>
                  <div className="space-y-2">
                    <Badge variant="secondary">Certified Web Developmer</Badge>
                    <Badge variant="secondary">Udemy QA tester</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>When I&apos;m Not Coding</CardTitle>
              <CardDescription>
                I enjoy a variety of hobbies that keep me balanced and inspired.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="md:grid-cols-3 grid gap-6">
                <div className="space-y-2 text-center">
                  <div className="bg-primary/10 text-primary mx-auto flex h-12 w-12 items-center justify-center rounded-lg">
                    <Swords className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Gaming</h3>
                  <p className="text-muted-foreground text-sm">
                    I love playing video games. They inspire my creativity and
                    problem-solving skills, which I apply to my coding projects.
                  </p>
                </div>
                <div className="space-y-2 text-center">
                  <div className="bg-primary/10 text-primary mx-auto flex h-12 w-12 items-center justify-center rounded-lg">
                    <Music className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Music</h3>
                  <p className="text-muted-foreground text-sm">
                    Music is a big part of my life. It helps me relax and
                    recharge, and I often listen to it while coding.
                  </p>
                </div>
                <div className="space-y-2 text-center">
                  <div className="bg-primary/10 text-primary mx-auto flex h-12 w-12 items-center justify-center rounded-lg">
                    <Coffee className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">Coffee</h3>
                  <p className="text-muted-foreground text-sm">
                    I enjoy a good cup of coffee. It fuels my coding sessions
                    and keeps me focused.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facts Section */}
          <Card>
            <CardHeader>
              <CardTitle>
                Facts About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Based in Brisbane, Australia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">1+ Years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Passionate about technology</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
