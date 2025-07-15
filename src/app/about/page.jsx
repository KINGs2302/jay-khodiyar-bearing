"use client";
import React, { Suspense, useRef } from "react";
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
import { Progress } from "@/components/ui/progress";
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Target,
  Heart,
  Lightbulb,
  Handshake,
  Zap,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  ArrowRight,
  Building,
  Truck,
  Settings,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = React.useState(0);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Timeline Component
function Timeline() {
  const timelineEvents = [
    {
      year: "1998",
      title: "Foundation",
      description:
        "Jay Khodiyar Bearings was established with a vision to provide quality bearing solutions.",
      icon: <Building className="w-4 h-4" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2005",
      title: "Second Branch",
      description:
        "Opened our second branch in the same city to expand customer reach and support.",
      icon: <Globe className="w-4 h-4" />,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2015",
      title: "Quality Certification",
      description:
        "Achieved ISO quality certifications and strengthened our commitment to excellence.",
      icon: <Award className="w-4 h-4" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Launched an online billings system to enhance customer service and streamline operations.",
      icon: <Zap className="w-4 h-4" />,
      color: "from-red-500 to-red-600",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as a leading bearing distributor with 1000+ satisfied industrial clients.",
      icon: <Trophy className="w-4 h-4" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      year: "2025",
      title: "New Branch",
      description:
        "Established another new branch within the same city to support growing demand.",
      icon: <Building className="w-4 h-4" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex items-start gap-6"
          >
            <div
              className={`w-8 h-8 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
            >
              {event.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="secondary" className="text-sm">
                  {event.year}
                </Badge>
                <h4 className="text-lg font-semibold">{event.title}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = React.useState("story");

  const stats = [
    {
      number: 25,
      label: "Years of Excellence",
      suffix: "+",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: 1000,
      label: "Happy Customers",
      suffix: "+",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: 6,
      label: "Premium Brands",
      suffix: "",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: 50000,
      label: "Products Delivered",
      suffix: "+",
      icon: <Truck className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality First",
      description:
        "We never compromise on quality. Every bearing we supply meets the highest industry standards.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Focused",
      description:
        "Your success is our priority. We build lasting relationships based on trust and reliability.",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Driven",
      description:
        "We continuously evolve with technology to provide cutting-edge bearing solutions.",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Integrity",
      description:
        "Honest business practices and transparent communication form the foundation of our operations.",
      gradient: "from-green-500 to-green-600",
    },
  ];

  const team = [
    {
      name: "Sanjay Rupala",
      role: "Founder & CEO",
      experience: "25+ years",
      specialty: "Bearing Technology",
      image: "/api/placeholder/300/300",
    },
    {
      name: "vipul Rupala",
      role: "Founder & CEO",
      experience: "25+ years",
      specialty: "Industrial Applications & Sales",
      image: "/api/placeholder/300/300",
    },
    {
      name: "nitin Rupala",
      role: "Founder & CEO",
      experience: "25+ years",
      specialty: "Customer Relations",
      image: "/api/placeholder/300/300",
    },
  ];

  const capabilities = [
    { name: "Technical Expertise", percentage: 95 },
    { name: "Product Knowledge", percentage: 98 },
    { name: "Customer Service", percentage: 92 },
    { name: "Delivery Speed", percentage: 88 },
    { name: "Quality Control", percentage: 99 },
    { name: "Cost Effectiveness", percentage: 90 },
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
            BEARINGS
          </div>
          <div className="absolute bottom-10 right-2 sm:bottom-20 sm:right-10 opacity-5 text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            QUALITY
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
                  Our Story Since 1998
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Precision
                  </span>
                  <br />
                  <span className="text-foreground">in Motion</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  For over two decades, we've been the trusted partner for
                  industries across India, delivering world-class bearing
                  solutions that keep businesses moving forward.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/products">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                    >
                      Our Products
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                    >
                      Contact Us
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
                <Image
                  src="/icons/aboutus.png"
                  width={300}
                  height={300}
                  alt="About Us"
                  style={{ objectFit: "contain" }}
                  className="mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
              Our experienced professionals are the backbone of our precision
              and quality.
            </p>
          </div>

          {/* Centered Flex Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-[260px] bg-muted/20 rounded-xl p-6 text-center shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
                <div className="mt-2 text-sm text-accent font-medium">
                  {member.experience}
                </div>
                <div className="text-xs text-muted-foreground">
                  {member.specialty}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
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
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                A Legacy of{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From humble beginnings to industry leadership, our story is one
                of dedication, innovation, and unwavering commitment to quality.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Timeline />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="p-8 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred bearing solutions
                  provider in Gujarat, recognized for our quality, consistency,
                  and customer-centric approach.
                </p>
              </Card>

              <Card className="p-8 border-0 bg-gradient-to-br from-accent/5 to-secondary/5">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver superior bearing solutions that exceed customer
                  expectations through continuous innovation, quality
                  excellence, and exceptional service.
                </p>
              </Card>

              <Card className="p-8 border-0 bg-gradient-to-br from-secondary/5 to-primary/5">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Our Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every bearing we supply comes with our commitment to quality,
                  reliability, and the technical support you need to succeed.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
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
                What Drives{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Us Forward
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our core values guide every decision we make and every
                relationship we build.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
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
                Our Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Excellence in{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Every Area
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {capabilities.map((capability, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">
                      {capability.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {capability.percentage}%
                    </span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <Progress value={capability.percentage} className="h-2" />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-8 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6" />
                  Continuous Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We've maintained consistent growth while expanding our
                  capabilities and strengthening our position as a market
                  leader.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Year-over-year growth of 15%</span>
                </div>
              </Card>

              <Card className="p-8 border-0 bg-gradient-to-br from-accent/5 to-secondary/5">
                <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  Market Leadership
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our expertise and customer-first approach have established us
                  as a trusted leader in the bearing industry.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span>Top 3 bearing supplier in Gujarat</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-yellow-500 fill-current"
                  />
                ))}
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Excellence?
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust Jay Khodiyar
              Bearings for their industrial needs. Let's build something great
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/gallery">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:+919825283308">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 9825283308
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
