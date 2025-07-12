// components/layout/footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Settings,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const linkVariants = {
  hover: {
    x: 5,
    transition: { duration: 0.2 },
  },
};

const contactList = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "opposite of lathi plot 6, aayodhaypuri main road, morbi, Gujarat, India",
    color: "text-green-600",
    link: "https://www.google.com/maps/search/?api=1&query=opposite+of+lathi+plot+6,+aayodhaypuri+main+road,+morbi,+Gujarat,+India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9825283308",
    color: "text-blue-600",
    link: "tel:+919825283308",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jaykhodiyarbearings@gmail.com",
    color: "text-purple-600",
    link: "mailto:jaykhodiyarbearings@gmail.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 9AM-6PM",
    color: "text-orange-600",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-background to-muted/50 border-t bg-accent-foreground  backdrop-blur-lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="w-full"
      >
        {/* Main Footer Content */}
        <div className="w-full px-4 py-16">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-evenly">
              {/* Company Info */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-6">
                    <div className="space-y-3">
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Settings className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">
                          Jay Khodiyar Bearings
                        </h2>
                      </motion.div>
                      <Badge variant="secondary" className="w-fit">
                        Trusted Since 1998
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                      Your trusted partner for premium quality ball & roller
                      bearings. We deliver excellence with quick service,
                      competitive pricing, and reliable solutions for all your
                      industrial needs.
                    </p>

                    <div className="flex gap-3">
                      {[Facebook, Twitter, Linkedin, Instagram].map(
                        (Icon, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-10 h-10 p-0 border-muted-foreground/20 hover:border-primary hover:bg-primary/10"
                            >
                              <Icon className="w-4 h-4" />
                            </Button>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Quick Links
                    </h3>
                    <ul className="space-y-3">
                      {[
                        { label: "Home", href: "/" },
                        { label: "Products", href: "/products" },
                        { label: "About Us", href: "/about" },
                        { label: "Contact", href: "/contact" },
                        { label: "Services", href: "/services" },
                        { label: "Catalog", href: "/catalog" },
                      ].map((link, index) => (
                        <li key={index}>
                          <motion.div
                            variants={linkVariants}
                            whileHover="hover"
                          >
                            <Link
                              href={link.href}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                            >
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {link.label}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Contact Info
                    </h3>
                    <ul className="space-y-4">
                      {contactList.map((contact, index) => {
                        const content = (
                          <motion.div
                            className="flex items-start gap-3 group cursor-pointer"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div
                              className={`w-5 h-5 mt-0.5 ${contact.color} flex-shrink-0`}
                            >
                              <contact.icon className="w-full h-full" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground font-medium">
                                {contact.label}
                              </p>
                              <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                                {contact.value}
                              </p>
                            </div>
                          </motion.div>
                        );

                        return (
                          <li key={index}>
                            {contact.link ? (
                              <a
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {content}
                              </a>
                            ) : (
                              content
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t bg-muted/30">
          <div className="max-w-full mx-auto px-4 py-6">
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()} Jay Khodiyar Bearings.</span>
                <Separator orientation="vertical" className="h-4" />
                <span>All rights reserved.</span>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Separator orientation="vertical" className="h-4" />
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
