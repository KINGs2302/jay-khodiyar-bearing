"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Shield,
  Truck,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Factory,
  Zap,
  Globe,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import BearingModel from "@/components/model/BearingModel";
import { useState } from "react";

const brands = [
  { name: "SKF", description: "Swedish precision engineering", color: "from-blue-600 to-blue-700" },
  { name: "NBC", description: "National Engineering Industries", color: "from-green-600 to-green-700" },
  { name: "TKP", description: "Timken Power Systems", color: "from-purple-600 to-purple-700" },
  { name: "NACHI", description: "Japanese precision technology", color: "from-red-600 to-red-700" },
  { name: "NTN", description: "Global bearing solutions", color: "from-orange-600 to-orange-700" },
  { name: "FAG", description: "German engineering excellence", color: "from-indigo-600 to-indigo-700" },
];

const sections = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Brands", href: "#brands" },
  { name: "Products", href: "#products" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Assurance",
    description: "All bearings are genuine and come with manufacturer warranties",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "Quick delivery across India with reliable logistics partners",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Support",
    description: "25+ years of experience in bearing solutions and technical support",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Trusted Partner",
    description: "Serving 1000+ satisfied customers across various industries",
    gradient: "from-orange-500 to-orange-600",
  },
];

const productCategories = [
  { name: "Ball Bearings", icon: <Settings className="w-4 h-4" /> },
  { name: "Roller Bearings", icon: <Factory className="w-4 h-4" /> },
  { name: "Needle Bearings", icon: <Zap className="w-4 h-4" /> },
  { name: "Thrust Bearings", icon: <Globe className="w-4 h-4" /> },
  { name: "Pillow Block Bearings", icon: <Settings className="w-4 h-4" /> },
  { name: "Linear Bearings", icon: <Factory className="w-4 h-4" /> },
  { name: "Automotive Bearings", icon: <Zap className="w-4 h-4" /> },
  { name: "Industrial Bearings", icon: <Globe className="w-4 h-4" /> },
];

const stats = [
  { number: "25+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
  { number: "1000+", label: "Happy Customers", icon: <Users className="w-5 h-5" /> },
  { number: "6", label: "Premium Brands", icon: <Star className="w-5 h-5" /> },
  { number: "24/7", label: "Support Available", icon: <Phone className="w-5 h-5" /> },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
        <div className="absolute top-20 left-10 opacity-5 text-[8rem] lg:text-[12rem] font-black select-none pointer-events-none">
          BEARINGS
        </div>
        <div className="absolute bottom-20 right-10 opacity-5 text-[8rem] lg:text-[12rem] font-black select-none pointer-events-none">
          QUALITY
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center space-x-2"
                >
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                    Premium Quality Since 1998
                  </Badge>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Jay Khodiyar
                  </span>
                  <br />
                  <span className="text-foreground">Bearings</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Your trusted partner for premium industrial bearings. We supply genuine bearings from world's leading manufacturers with 25+ years of expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                  <Link href="/products" className="flex items-center">
                    Explore Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex justify-center mb-1 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Canvas
                  camera={{ position: [0, 3, 10], fov: 30 }}
                  gl={{ preserveDrawingBuffer: true }}
                  style={{ background: "transparent" }}
                >
                  <ambientLight intensity={1.2} />
                  <directionalLight position={[10, 10, 5]} intensity={2} />
                  <Suspense fallback={null}>
                    <BearingModel />
                    <Environment preset="warehouse" background={false} />
                  </Suspense>
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">About Our Company</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Excellence in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bearing Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Three decades of unwavering commitment to quality and innovation in industrial bearing distribution.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Our Journey</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Founded in 1998, Jay Khodiyar Bearings has evolved from a small local distributor to a leading bearing supplier across Gujarat and beyond. Our journey is marked by consistent growth, technological advancement, and unwavering commitment to customer satisfaction.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We serve diverse industries including automotive, manufacturing, mining, construction, and aerospace, providing tailored bearing solutions that meet the highest standards of quality and performance.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">Our Commitment</h4>
                <div className="space-y-3">
                  {[
                    "Genuine products from authorized manufacturers",
                    "Expert technical support and consultation",
                    "Competitive pricing and flexible payment terms",
                    "On-time delivery across India"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-xl text-white">
                    <Factory className="w-8 h-8 mb-3" />
                    <h4 className="font-semibold mb-2">Industrial Focus</h4>
                    <p className="text-sm opacity-90">Specialized solutions for heavy industries</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
                    <Globe className="w-8 h-8 mb-3" />
                    <h4 className="font-semibold mb-2">Global Reach</h4>
                    <p className="text-sm opacity-90">International brand partnerships</p>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                    <Zap className="w-8 h-8 mb-3" />
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p className="text-sm opacity-90">Latest bearing technologies</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                    <Shield className="w-8 h-8 mb-3" />
                    <h4 className="font-semibold mb-2">Quality First</h4>
                    <p className="text-sm opacity-90">Rigorous quality control</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Brands Section */}
      <motion.section
        id="brands"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">Premium Partnerships</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                World-Class <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Brands</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Authorized distributors of the world's most trusted bearing manufacturers.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="text-center p-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg`}>
                      {brand.name.slice(0, 2)}
                    </div>
                    <CardTitle className="text-2xl font-bold">{brand.name}</CardTitle>
                    <CardDescription className="text-base mt-2">{brand.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">Product Range</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Comprehensive <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                From precision ball bearings to heavy-duty industrial solutions, we have everything you need.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 cursor-pointer">
                  <CardHeader className="text-center p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        id="why-us"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Your Success is <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Priority</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Experience the difference of working with industry leaders who understand your needs.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold mb-3">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
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
                  <Star key={i} className="w-8 h-8 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                "Precision in Every Turn – Quality You Can Trust"
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the difference of genuine bearings backed by decades of expertise and unwavering commitment to excellence.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg">
              Start Your Journey With Us
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Let's discuss your bearing requirements and find the perfect solution for your business.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Call Us", info: "+91 98765 43210", gradient: "from-green-500 to-green-600" },
              { icon: <Mail className="w-6 h-6" />, title: "Email Us", info: "info@jaykhodiyar.com", gradient: "from-blue-500 to-blue-600" },
              { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", info: "Rajkot, Gujarat, India", gradient: "from-purple-500 to-purple-600" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="text-center p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                      {contact.icon}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{contact.title}</CardTitle>
                    <CardDescription className="text-base font-medium">{contact.info}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-4 text-lg">
              Request Quote Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </motion.section>

      
    </div>
  );
}