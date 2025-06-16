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
import { toast, Toaster, useSonner } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Calendar,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const { toasts } = useSonner();
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
            <div className="space-y-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
