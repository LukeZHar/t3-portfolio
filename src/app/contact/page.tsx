"use client";

import { useState } from "react";
import { Navigation } from "~/components/Navigation";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast(
      "Message Sent. Thank you for reaching out! I'll get back to you soon.",
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <div className="px-4 pt-24 pb-12">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Have a question or want to work together? I&apos;d love to hear
              from you. Let&apos;s connect and discuss your ideas!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Info Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="text-primary h-5 w-5" />
                    Let&apos;s Chat
                  </CardTitle>
                  <CardDescription>
                    I&apos;m always open to discussing new projects, creative
                    ideas, or opportunities to be part of your vision.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">
                        Luke.z.harris@hotmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground text-sm">
                        0481 752 532
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground text-sm">
                        Brisbane, Australia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                  <CardDescription>
                    Stay connected and see my latest projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button variant={"outline"} size={"icon"} asChild>
                      <a
                        href="https://github.com/LukeZHar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant={"outline"} size={"icon"} asChild>
                      <a
                        href="https://www.linkedin.com/in/luke-z-harris/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Me A Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Full Name"
                          required
                          maxLength={30}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email Address"
                          required
                          maxLength={70}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        required
                        maxLength={50}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project! or just asking a question?"
                        required
                        rows={6}
                        maxLength={500}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border-1 rounded-md"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <Separator className="mb-8" />
            <div className="mx-auto max-w-2xl space-y-4">
              <h2 className="text-2xl font-bold">Why Work With Me?</h2>
              <p className="text-muted-foreground">
                I&apos;m passionate about creating beautiful, functional web
                applications that solve real problems. With a focus on user
                experience and performance, I strive to deliver high-quality
                solutions that exceed expectations.
              </p>
              <p className="text-muted-foreground">
                Whether you need a new website, a web application, or just some
                advice on your next project, I&apos;m here to help. Let&apos;s
                make something great together!
              </p>
              <p className="text-muted-foreground">I Aim For:</p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-primary text-lg font-semibold">100%</div>
                  <div className="text-muted-foreground text-sm">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-lg font-semibold">24/7</div>
                  <div className="text-muted-foreground text-sm">
                    Support & Communication
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-lg font-semibold">
                    1-3 Days
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Response Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
