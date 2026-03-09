'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Reusable NavLink component
const NavLink = ({ href, children, onClick }: { href: string; children: string; onClick?: () => void }) => (
  <a 
    href={href}
    onClick={onClick}
    className="
      relative text-black no-underline text-sm font-medium
      transition-colors duration-200 hover:text-gray-600
    "
    style={{ fontFamily: 'Inter, sans-serif' }}
  >
    {children}
  </a>
);

// Animated Button component
const AnimatedButton = ({ onClick }: { onClick?: () => void }) => (
  <motion.a
    href="/contact"
    onClick={onClick}
    className="
      relative inline-block bg-maroon text-white rounded-lg px-6 py-2.5
      text-sm font-medium no-underline overflow-hidden min-h-[44px] flex items-center
    "
    whileHover={{ scale: 0.97 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative overflow-hidden">
      <motion.div
        className="relative"
        initial={{ y: 0 }}
        whileHover={{ y: -24 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-white">Schedule Consultation</div>
        <div className="absolute top-6 left-0 text-white whitespace-nowrap">Schedule Consultation</div>
      </motion.div>
    </div>
  </motion.a>
);

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/#about", text: "About" },
    { href: "/#rwanda", text: "Rwanda" },
    { href: "/#process", text: "Process" },
    { href: "/#partners", text: "Partners" },
    { href: "/#founder", text: "Founder" },
    { href: "/contact", text: "Contact" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link 
            href="/" 
            className="flex items-center z-50"
            aria-label="home"
          >
            <Image
              src="/elev8-logo-dark.svg"
              alt="Elev8 Logo"
              width={91}
              height={32}
              className="w-[4.5rem] md:w-[5.68rem]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.text}
              </NavLink>
            ))}
            <AnimatedButton />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black block transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-black block transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black block transition-all"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-40 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex flex-col gap-6">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-black no-underline text-lg font-medium block py-2 min-h-[44px] flex items-center"
                    >
                      {link.text}
                    </a>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <AnimatedButton onClick={closeMobileMenu} />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;