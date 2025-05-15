"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: "https://github.com/armand0e",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "#", // Placeholder for LinkedIn
    icon: Linkedin,
    label: "LinkedIn (Coming Soon)",
  },
  {
    href: "mailto:ARAN.Rafiee@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 py-8 text-center md:flex-row md:space-y-0 md:py-10">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Arman Rafiee. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              title={link.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Made with <span className="text-primary/80 font-semibold">Next.js</span> & <span className="text-primary/80 font-semibold">Tailwind CSS</span>.
        </p>
      </div>
    </motion.footer>
  );
} 