"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Building,
  Truck,
  Settings,
  Award,
  Users,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Heart,
  Star,
  ArrowRight,
  Filter,
  Grid3X3,
  List,
  Search,
  Eye,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/bearing1.jpg",
    alt: "Premium Ball Bearings",
    title: "Premium Ball Bearings",
    description: "High-quality ball bearings for industrial applications",
    category: "products",
    featured: true,
    tags: ["ball bearings", "industrial", "premium"],
  },
  {
    id: 2,
    src: "/gallery/bearing2.jpg",
    alt: "Roller Bearings Collection",
    title: "Roller Bearings Collection",
    description: "Comprehensive range of roller bearings for heavy-duty use",
    category: "products",
    featured: false,
    tags: ["roller bearings", "heavy duty", "industrial"],
  },
  {
    id: 3,
    src: "/gallery/store1.jpg",
    alt: "Main Store Front",
    title: "Main Store Front",
    description: "Our flagship store in the heart of the city",
    category: "facilities",
    featured: true,
    tags: ["store", "flagship", "retail"],
  },
  {
    id: 4,
    src: "/gallery/store2.jpg",
    alt: "Interior Store View",
    title: "Interior Store View",
    description: "Well-organized product displays and customer service area",
    category: "facilities",
    featured: false,
    tags: ["interior", "organized", "service"],
  },
  {
    id: 5,
    src: "/gallery/warehouse1.jpg",
    alt: "Warehouse Facility",
    title: "Warehouse Facility",
    description: "Modern warehouse with efficient inventory management",
    category: "facilities",
    featured: true,
    tags: ["warehouse", "inventory", "modern"],
  },
  {
    id: 6,
    src: "/gallery/team1.jpg",
    alt: "Our Expert Team",
    title: "Our Expert Team",
    description: "Dedicated professionals serving our customers",
    category: "team",
    featured: false,
    tags: ["team", "professionals", "service"],
  },
  {
    id: 7,
    src: "/gallery/delivery1.jpg",
    alt: "Delivery Service",
    title: "Reliable Delivery Service",
    description: "Fast and secure delivery to your doorstep",
    category: "services",
    featured: true,
    tags: ["delivery", "service", "logistics"],
  },
  {
    id: 8,
    src: "/gallery/quality1.jpg",
    alt: "Quality Control",
    title: "Quality Control Process",
    description: "Rigorous testing ensures product excellence",
    category: "services",
    featured: false,
    tags: ["quality", "testing", "excellence"],
  },
  {
    id: 9,
    src: "/gallery/brands1.jpg",
    alt: "Premium Brands",
    title: "Premium Brands",
    description: "Authorized dealer for top bearing manufacturers",
    category: "products",
    featured: true,
    tags: ["brands", "authorized", "premium"],
  },
  {
    id: 10,
    src: "/gallery/customer1.jpg",
    alt: "Customer Service",
    title: "Customer Service Excellence",
    description: "Personalized service and technical support",
    category: "services",
    featured: false,
    tags: ["customer service", "support", "excellence"],
  },
  {
    id: 11,
    src: "/gallery/installation1.jpg",
    alt: "Installation Support",
    title: "Installation Support",
    description: "Expert installation and maintenance services",
    category: "services",
    featured: true,
    tags: ["installation", "maintenance", "support"],
  },
  {
    id: 12,
    src: "/gallery/achievement1.jpg",
    alt: "Awards and Recognition",
    title: "Awards and Recognition",
    description: "Industry recognition for excellence and service",
    category: "achievements",
    featured: false,
    tags: ["awards", "recognition", "excellence"],
  },
];

const categories = [
  { id: "all", label: "All Images", icon: <Grid3X3 className="w-4 h-4" />, count: galleryImages.length },
  { id: "products", label: "Products", icon: <Settings className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "products").length },
  { id: "facilities", label: "Facilities", icon: <Building className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "facilities").length },
  { id: "services", label: "Services", icon: <Truck className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "services").length },
  { id: "team", label: "Our Team", icon: <Users className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "team").length },
  { id: "achievements", label: "Achievements", icon: <Award className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "achievements").length },
];

const stats = [
  { number: "500+", label: "Product Photos", icon: <Camera className="w-5 h-5" /> },
  { number: "25+", label: "Years Documented", icon: <Star className="w-5 h-5" /> },
  { number: "50+", label: "Facility Images", icon: <Building className="w-5 h-5" /> },
  { number: "100+", label: "Happy Moments", icon: <Heart className="w-5 h-5" /> },
];

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  React.useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * parseInt(end.replace(/\D/g, ''))));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      className="text-center"
    >
      <div className="text-2xl font-bold text-primary">
        {count}{suffix}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [likedImages, setLikedImages] = useState(new Set());

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredImages = galleryImages.filter(image => image.featured);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const toggleLike = (imageId) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(imageId)) {
      newLiked.delete(imageId);
    } else {
      newLiked.add(imageId);
    }
    setLikedImages(newLiked);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="absolute top-10 left-2 sm:top-20 sm:left-10 opacity-5 text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            GALLERY
          </div>
          <div className="absolute bottom-10 right-2 sm:bottom-20 sm:right-10 opacity-5 text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black select-none pointer-events-none">
            MOMENTS
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                Visual Journey
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Our
                </span>
                <br />
                <span className="text-foreground">Gallery</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Explore our journey through images - from premium products to state-of-the-art facilities, 
                witness the excellence that defines Jay Khodiyar Bearings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#gallery-section">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Explore Gallery
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-muted/30"
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
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <AnimatedCounter end={stat.number} />
                  <p className="text-muted-foreground font-medium mt-2">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Images Section */}
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
                Featured
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Spotlight{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover our most remarkable moments and achievements through this curated selection.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(image.id);
                          }}
                        >
                          <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Gallery Section */}
      <motion.section
        id="gallery-section"
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
                Complete Collection
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Full{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? 
                      "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white" : 
                      "border-primary text-primary hover:bg-primary hover:text-white"
                    }
                  >
                    {category.icon}
                    <span className="ml-2">{category.label}</span>
                    <Badge variant="secondary" className="ml-2 bg-white/20">
                      {category.count}
                    </Badge>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className={`relative ${viewMode === 'grid' ? 'aspect-square' : 'aspect-[3/2]'} overflow-hidden`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(image.id);
                            }}
                          >
                            <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-red-500 text-red-500' : ''}`} />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                        <div className="flex gap-1 mt-2">
                          {image.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-4">
                <Search className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg">No images found matching your search criteria.</p>
                <p className="text-sm">Try adjusting your search terms or category filter.</p>
              </div>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
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
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Journey?
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the quality and excellence showcased in our gallery. Contact us today to discuss your bearing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4"
                  >
                    Get Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                  >
                    View Products
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={() => toggleLike(selectedImage.id)}
                  >
                    <Heart className={`w-4 h-4 ${likedImages.has(selectedImage.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="relative aspect-[4/3] bg-black">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="p-6 bg-background">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                      <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
                    </div>
                    <Badge variant="secondary" className="capitalize">
                      {selectedImage.category}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedImage.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Image {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}</span>
                      {selectedImage.featured && (
                        <Badge variant="default" className="bg-gradient-to-r from-primary to-accent">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handlePrevImage}
                        disabled={filteredImages.length <= 1}
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Previous
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleNextImage}
                        disabled={filteredImages.length <= 1}
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}