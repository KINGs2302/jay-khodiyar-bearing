'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,   
  Home,
  Info,
  Package,
  Image as ImageIcon,
  MessageSquare,
  HelpCircle,
  Briefcase,
  Mail, 
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', path: '/', badge: null, icon: <Home size={18} /> },
  { name: 'Products', path: '/products', badge: 'Hot', icon: <Package size={18} /> },
  { name: 'Gallery', path: '/gallery', badge: null, icon: <ImageIcon size={18} /> },
  { name: 'Careers', path: '/careers', badge: 'New', icon: <Briefcase size={18} /> },
  { name: 'FAQ', path: '/faq', badge: null, icon: <HelpCircle size={18} /> },
  { name: 'About', path: '/about', badge: null, icon: <Info size={18} /> },
  { name: 'Contact', path: '/contact', badge: null, icon: <Mail size={18} /> },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current path matches link path
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const searchVariants = {
    focused: {
      scale: 1.05,
      boxShadow: "0 0 0 3px rgba(54, 78, 104, 0.1)",
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0 0px rgba(54, 78, 104, 0)",
      transition: { duration: 0.2 }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -1, 1, 0],
      transition: { duration: 0.3 }
    }
  };

  const navLinkVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg' 
            : 'bg-background border-b border-border'
        }`}
      >
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div variants={itemVariants}>
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div
                  variants={logoVariants}
                  whileHover="hover"
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Image 
                    src="/logos/jay khodiyar logo.png" 
                    alt="Logo" 
                    width={40} 
                    height={40} 
                    className="relative z-10 rounded-full"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <motion.span 
                    className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    Jay Khodiyar Bearing
                  </motion.span>
                  <motion.span 
                    className="text-xs text-muted-foreground flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Quality & Precision
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:flex items-center gap-1"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={navLinkVariants}
                  whileHover="hover"
                  className="relative"
                >
                  <Link
                    href={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative flex items-center gap-2 ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/10 shadow-sm'
                        : 'text-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                    {link.badge && (
                      <Badge 
                        variant="secondary" 
                        className="text-xs px-2 py-0.5 bg-gradient-to-r from-secondary to-accent text-white"
                      >
                        {link.badge}
                      </Badge>
                    )}
                  </Link>
                  {/* Active indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(link.path) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              {/* Enhanced Search */}
              <motion.div
                variants={searchVariants}
                animate={searchFocused ? "focused" : "unfocused"}
                className="relative hidden md:block"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-64 text-sm rounded-xl border-2 border-border focus:border-primary/30 transition-all duration-200 bg-background text-foreground"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <AnimatePresence>
                  {searchFocused && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute top-full left-0 right-0 mt-2 p-3 bg-background border border-border rounded-xl shadow-lg"
                    >
                      <p className="text-sm text-muted-foreground">
                        Try searching for "bearings", "industrial", or "automotive"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Enhanced Theme Toggle */}
              {mounted && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="relative overflow-hidden rounded-xl border-2 border-transparent hover:border-primary/30 transition-all duration-200 bg-background text-foreground hover:bg-primary/10"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: theme === 'dark' ? 180 : 0,
                        scale: theme === 'dark' ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <Moon className="h-5 w-5 text-blue-600" />
                      )}
                    </motion.div>
                  </Button>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="relative overflow-hidden rounded-xl border-2 border-transparent hover:border-primary/30 transition-all duration-200 bg-background text-foreground hover:bg-primary/10"
                >
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <motion.div variants={mobileItemVariants} className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      className="pl-10 pr-4 py-3 w-full text-sm rounded-xl border-2 border-border focus:border-primary/30 transition-all duration-200 bg-background text-foreground"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </motion.div>

                {/* Mobile Navigation Links */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={mobileItemVariants}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.path}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                        isActive(link.path)
                          ? 'bg-primary/10 text-primary shadow-sm'
                          : 'text-foreground hover:bg-primary/10 hover:text-primary'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        {link.icon}
                        <span className="font-medium">{link.name}</span>
                        {link.badge && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-0.5 bg-gradient-to-r from-secondary to-accent text-white"
                          >
                            {link.badge}
                          </Badge>
                        )}
                      </div>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:rotate-0 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}