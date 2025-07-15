"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  ChevronUp,
  Search,
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  Star,
  CheckCircle,
  Package,
  Truck,
  Shield,
  Award,
  Users,
  Settings,
  ArrowRight,
  MessageCircle,
  FileText,
  Calculator,
  Wrench,
} from "lucide-react";
import Link from "next/link";

// FAQ Data
const faqData = [
  {
    category: "General",
    icon: <HelpCircle className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600",
    questions: [
      {
        question: "What is Jay Khodiyar Bearings?",
        answer: "Jay Khodiyar Bearings is a leading bearing supplier established in 1998, specializing in high-quality bearing solutions for various industrial applications. We have been serving customers across Gujarat for over 25 years with premium bearing products from top brands."
      },
      {
        question: "Where are your branches located?",
        answer: "We have three branches within the same city to better serve our customers. Our strategic locations ensure quick access to our products and services across the region."
      },
      {
        question: "What are your business hours?",
        answer: "We are open Monday to Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM. For urgent requirements, you can contact us at +91 9825283308."
      },
      {
        question: "Do you offer online billing?",
        answer: "Yes, we launched our online billing system in 2020 to enhance customer service and streamline operations. This allows for faster processing and better tracking of your orders."
      }
    ]
  },
  {
    category: "Products",
    icon: <Package className="w-5 h-5" />,
    color: "from-green-500 to-green-600",
    questions: [
      {
        question: "What types of bearings do you supply?",
        answer: "We supply a comprehensive range of bearings including ball bearings, roller bearings, thrust bearings, needle bearings, and specialized industrial bearings for various applications like automotive, manufacturing, and heavy machinery."
      },
      {
        question: "Which brands do you carry?",
        answer: "We stock premium bearing brands including SKF, FAG, Timken, NSK, NTN, and other renowned manufacturers. All our products meet international quality standards and come with manufacturer warranties."
      },
      {
        question: "Do you have bearings for specific industries?",
        answer: "Yes, we cater to various industries including automotive, textile, steel, cement, paper, mining, and agriculture. Our technical team can help you select the right bearing for your specific application."
      },
      {
        question: "Can you provide custom bearing solutions?",
        answer: "Absolutely! Our experienced team can help identify and source specialized bearings for unique applications. We work closely with manufacturers to provide custom solutions when standard bearings don't meet your requirements."
      }
    ]
  },
  {
    category: "Orders & Delivery",
    icon: <Truck className="w-5 h-5" />,
    color: "from-orange-500 to-orange-600",
    questions: [
      {
        question: "How can I place an order?",
        answer: "You can place orders by visiting our branches, calling us at +91 9825283308, or contacting us through our website. Our sales team will assist you with product selection and pricing."
      },
      {
        question: "What is your delivery time?",
        answer: "For stock items, we typically deliver within 24-48 hours locally. For special orders, delivery time varies from 3-7 days depending on product availability and location."
      },
      {
        question: "Do you offer express delivery?",
        answer: "Yes, we offer express delivery for urgent requirements. Additional charges may apply for same-day or express delivery services."
      },
      {
        question: "What are your minimum order quantities?",
        answer: "We cater to both small and large orders. There's no strict minimum order quantity, but bulk orders may qualify for special pricing and discounts."
      }
    ]
  },
  {
    category: "Quality & Warranty",
    icon: <Shield className="w-5 h-5" />,
    color: "from-red-500 to-red-600",
    questions: [
      {
        question: "Are your bearings genuine?",
        answer: "Yes, all our bearings are 100% genuine products sourced directly from authorized distributors and manufacturers. We maintain strict quality control and never compromise on authenticity."
      },
      {
        question: "What warranty do you provide?",
        answer: "All our bearings come with manufacturer warranties ranging from 6 months to 2 years depending on the brand and application. We also provide technical support throughout the warranty period."
      },
      {
        question: "Do you have quality certifications?",
        answer: "Yes, we achieved ISO quality certifications in 2015 and maintain strict quality standards in all our operations. Our suppliers are also certified and meet international quality norms."
      },
      {
        question: "What if I receive a defective product?",
        answer: "In the rare case of a defective product, we offer immediate replacement or refund. Our quality assurance team investigates all issues and ensures customer satisfaction."
      }
    ]
  },
  {
    category: "Technical Support",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-purple-500 to-purple-600",
    questions: [
      {
        question: "Do you provide technical assistance?",
        answer: "Yes, our team of experienced professionals provides comprehensive technical support including bearing selection, installation guidance, and troubleshooting assistance."
      },
      {
        question: "Can you help with bearing installation?",
        answer: "We provide detailed installation instructions and technical guidance. For complex installations, we can recommend certified service technicians in your area."
      },
      {
        question: "Do you offer maintenance advice?",
        answer: "Absolutely! We provide maintenance schedules, lubrication recommendations, and troubleshooting guides to help you maximize bearing life and performance."
      },
      {
        question: "Can you help identify the right bearing for my application?",
        answer: "Yes, our technical team can help you identify the correct bearing based on your machine specifications, load requirements, speed, and operating conditions."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    icon: <Calculator className="w-5 h-5" />,
    color: "from-yellow-500 to-yellow-600",
    questions: [
      {
        question: "How do you determine pricing?",
        answer: "Our pricing is based on factors including brand, quantity, product specifications, and current market conditions. We offer competitive rates and volume discounts for bulk orders."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, cheque, bank transfer, and digital payments. For regular customers, we also offer credit terms based on business relationship and credit evaluation."
      },
      {
        question: "Do you offer discounts for bulk orders?",
        answer: "Yes, we provide attractive discounts for bulk orders and long-term contracts. Contact our sales team to discuss volume pricing and special offers."
      },
      {
        question: "Can I get a quotation before ordering?",
        answer: "Certainly! We provide detailed quotations including product specifications, pricing, delivery time, and terms. This helps you make informed decisions."
      }
    ]
  }
];

// FAQ Item Component
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
      >
        <span className="font-medium text-foreground pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// FAQ Category Component
function FAQCategory({ category, isExpanded, onToggle }) {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="overflow-hidden border-0 shadow-lg">
        <CardHeader
          className={`cursor-pointer bg-gradient-to-r ${category.color} text-white hover:opacity-90 transition-opacity`}
          onClick={onToggle}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {category.icon}
              <CardTitle className="text-xl">{category.category}</CardTitle>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {category.questions.length}
              </Badge>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </CardHeader>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CardContent className="p-0">
                {category.questions.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openItems[index]}
                    onToggle={() => toggleItem(index)}
                  />
                ))}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

export default function FAQ() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (index) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const expandAllCategories = () => {
    const allExpanded = {};
    faqData.forEach((_, index) => {
      allExpanded[index] = true;
    });
    setExpandedCategories(allExpanded);
  };

  const collapseAllCategories = () => {
    setExpandedCategories({});
  };

  // Filter FAQs based on search term
  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="absolute top-10 left-2 sm:top-20 sm:left-10 opacity-5 text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            FAQ
          </div>
          <div className="absolute bottom-10 right-2 sm:bottom-20 sm:right-10 opacity-5 text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            HELP
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                Frequently Asked Questions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Got Questions?
                </span>
                <br />
                <span className="text-foreground">We Have Answers</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Find quick answers to common questions about our products, services, and policies. 
                Can't find what you're looking for? We're here to help!
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                />
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                onClick={expandAllCategories}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ChevronDown className="w-4 h-4 mr-2" />
                Expand All
              </Button>
              <Button
                onClick={collapseAllCategories}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                <ChevronUp className="w-4 h-4 mr-2" />
                Collapse All
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {(searchTerm ? filteredFAQs : faqData).map((category, index) => (
              <FAQCategory
                key={index}
                category={category}
                isExpanded={expandedCategories[index]}
                onToggle={() => toggleCategory(index)}
              />
            ))}

            {searchTerm && filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  No results found
                </h3>
                <p className="text-muted-foreground mb-8">
                  Try adjusting your search terms or browse all categories.
                </p>
                <Button
                  onClick={() => setSearchTerm("")}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                >
                  Clear Search
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="text-primary mb-4 flex justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground font-medium">Happy Customers</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="text-accent mb-4 flex justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground font-medium">Support Available</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="text-secondary mb-4 flex justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <p className="text-muted-foreground font-medium">Years Experience</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="text-green-600 mb-4 flex justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Still Need Help?
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                We're Here to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Help You
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our expert team is ready to assist you 
                with any questions about our products or services.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-6">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our experts for immediate assistance.
                </p>
                <a href="tel:+919825283308">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    +91 9825283308
                  </Button>
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                <p className="text-muted-foreground mb-6">
                  Get instant answers through our live chat support.
                </p>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                  Start Chat
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-6">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  Send us your detailed queries via email.
                </p>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                    Send Email
                  </Button>
                </Link>
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
              Ready to Get{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Started?
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Browse our extensive catalog of premium bearings or contact our expert team 
              for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4"
                  >
                    View Products
                    <ArrowRight className="w-5 h-5 ml-2" />
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
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}