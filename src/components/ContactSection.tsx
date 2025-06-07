"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactInfo = {
  email: "ARAN.Rafiee@gmail.com",
  github: "https://github.com/armand0e",
  linkedin: "#", // Placeholder
};

export function ContactSection() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${contactInfo.email}`}>
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </a>
            </Button>
          </motion.div>

          <div className="flex justify-center space-x-6">
            <motion.div custom={0} initial="hidden" whileInView="visible" variants={iconVariants} viewport={{ once: true }}>
              <Link href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
                </Button>
              </Link>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" variants={iconVariants} viewport={{ once: true }}>
              <Link href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn (Coming Soon)">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
                </Button>
              </Link>
            </motion.div>
            {/* Add other social media links here if needed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 