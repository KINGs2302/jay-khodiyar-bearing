"use client";
import React, { Suspense, useRef, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  Text3D,
  Center,
} from "@react-three/drei";
import * as THREE from "three";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Truck,
  Shield,
  HeartHandshake,
  Zap,
  Target,
} from "lucide-react";
import Image from "next/image";

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
  setIsSubmitting(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "2c924bab-30b8-49be-bbd4-898f669adf74",
        from_name: "Jay Khodiyar Bearings Website",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again later.");
    console.error("Error submitting form:", error);
  } finally {
    setIsSubmitting(false);
  }
};


  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-green-500 text-green-600 hover:bg-green-50"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-background border-muted-foreground/20 focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-background border-muted-foreground/20 focus:border-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-background border-muted-foreground/20 focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            className="bg-background border-muted-foreground/20 focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="bg-background border-muted-foreground/20 focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="bg-background border-muted-foreground/20 focus:border-primary resize-none"
          placeholder="Tell us about your bearing requirements..."
        />
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-6 text-lg"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
              />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
}

function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      details: [
        "Jay Khodiyar Bearings",
        "opposite of lathi plot 6, aayodhaypuri main road, morbi",
        "Gujarat 360001, India",
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        "+91 9825283308",
        "+91 9429245056",
        "Mon-Sat: 9:00 AM - 8:00 PM",
      ],
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["jaykhodiyar@gmail.com"],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: Closed",
      ],
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Every bearing comes with our guarantee of quality and performance.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick delivery across India with real-time tracking.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Expert Support",
      description: "Technical expertise and customer support when you need it.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "Best prices in the market without compromising quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute top-10 left-10 opacity-5 text-[8rem] lg:text-[16rem] font-black select-none pointer-events-none">
            CONNECT
          </div>
          <div className="absolute bottom-10 right-10 opacity-5 text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            WITH US
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
                  Get In Touch
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="text-foreground">Let's</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Connect
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Ready to find the perfect bearing solution for your business?
                  Our team of experts is here to help you every step of the way.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Call Now Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="tel:+919825283308">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </motion.div>

                {/* Hide Live Chat Button since feature is not available */}
                {/* You can enable this once you implement live chat */}
                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-white"
          disabled
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Live Chat
        </Button>
      </motion.div> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex justify-center items-center">
                <Image
                  src="/icons/contact.png"
                  width={300}
                  height={300}
                  alt="contact Us"
                  style={{ objectFit: "contain" }}
                  className="mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Contact Information
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Reach Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white shadow-lg mx-auto`}
                    >
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge variant="secondary" className="mb-4">
                  Send Us a Message
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get a{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Quick Response
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a specific requirement or question? Fill out the form and
                  our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-primary">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{reason.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-xl">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Send Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Find Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Location
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Jay Khodiyar Bearings
                  <br />
                  opposite of lathi plot 6, aayodhaypuri main road, morbi,
                  Rajkot
                  <br />
                  Gujarat 360001, India
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=opposite+of+lathi+plot+6,+aayodhaypuri+main+road,+morbi,+Gujarat,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                    Get Directions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
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
              Ready to Get{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Started?
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Don't wait any longer. Contact us today and let's discuss how we
              can help solve your bearing needs with precision and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Call Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:+919825283308">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4"
                  >
                    Call +91 9825283308
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </motion.div>

              {/* Email Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="mailto:jaykhodiyar@gmail.com">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
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

export default Contact;
