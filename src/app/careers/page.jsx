"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Heart,
  TrendingUp,
  Shield,
  Lightbulb,
  Coffee,
  Award,
  Clock,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Building,
  Star,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Target,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family.",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career advancement paths.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and supportive environment for personal growth.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs for outstanding work.",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Great Culture",
      description: "Collaborative team environment with regular team building activities.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Training programs and skill development opportunities to enhance your expertise.",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Integrity",
      description: "Honest and transparent business practices.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Customer satisfaction is at the heart of our operations.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuous improvement and embracing new technologies.",
    },
  ];

  const futureRoles = [
    {
      title: "Sales Executive",
      department: "Sales & Marketing",
      description: "Drive business growth through relationship building and product knowledge.",
      skills: ["Communication", "Sales Strategy", "Customer Relations"],
    },
    {
      title: "Technical Support Specialist",
      department: "Technical Support",
      description: "Provide expert technical guidance and support to customers.",
      skills: ["Technical Knowledge", "Problem Solving", "Customer Service"],
    },
    {
      title: "Operations Manager",
      department: "Operations",
      description: "Oversee daily operations and ensure smooth business processes.",
      skills: ["Leadership", "Process Management", "Team Building"],
    },
    {
      title: "Quality Control Inspector",
      department: "Quality Assurance",
      description: "Ensure product quality and maintain our high standards.",
      skills: ["Attention to Detail", "Quality Standards", "Documentation"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="absolute top-10 left-2 sm:top-20 sm:left-10 opacity-5 text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            CAREERS
          </div>
          <div className="absolute bottom-10 right-2 sm:bottom-20 sm:right-10 opacity-5 text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            FUTURE
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                  Join Our Team
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Build Your
                  </span>
                  <br />
                  <span className="text-foreground">Career</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  While we don't have any current openings, we're always looking for passionate individuals to join our growing team at Jay Khodiyar Bearings.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="mailto:careers@jaykhodiyarbearings.com">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Your Resume
                    </Button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Learn About Us
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center items-center"
            >
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex justify-center items-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">Stay Connected</h3>
                    <p className="text-muted-foreground">We'll notify you when new positions open</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Current Status Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                No Current Openings
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We currently have a complete team and no immediate job openings. However, we're always growing and looking for talented individuals to join our family. We encourage you to stay connected with us for future opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Why Wait for the Perfect Opportunity?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Submit your resume today and be the first to know when a position that matches your skills becomes available. We keep all applications on file and regularly review them for new opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:careers@jaykhodiyarbearings.com">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Resume
                    </Button>
                  </a>
                  <a href="tel:+919825283308">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Work With Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Work at{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Jay Khodiyar Bearings
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join a company that values growth, innovation, and putting people first.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Company Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What We{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Stand For
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our values guide how we work, make decisions, and treat each other every day.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Opportunities Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Future Opportunities
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Potential{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Career Paths
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Here are some roles we typically hire for as we grow. If any of these match your expertise, we'd love to hear from you.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{role.title}</h3>
                        <p className="text-sm text-muted-foreground">{role.department}</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Key Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to Join Our{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Journey?
                </span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Even though we don't have current openings, we're always interested in connecting with talented professionals. Send us your resume and let's start the conversation.
              </p>
              
              <Card className="p-8 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Email Your Resume</h4>
                    <p className="text-sm text-muted-foreground">careers@jaykhodiyarbearings.com</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-sm text-muted-foreground">+91 9825283308</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-sm text-muted-foreground">Rajkot, Gujarat</p>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="mailto:careers@jaykhodiyarbearings.com">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Your Resume
                    </Button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                    >
                      Contact Us
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}