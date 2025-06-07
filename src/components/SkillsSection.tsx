"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  programming: ["Java", "JavaScript", "Python", "C++", "CSS", "HTML"],
  os: ["Windows", "macOS", "Linux"],
  tools: ["Microsoft Office Suite", "Google Workspace"],
  // Add more categories and skills as needed from the resume
  // e.g., troubleshooting: ["Hardware Troubleshooting", "Software Troubleshooting", "Network Troubleshooting"]
  //       concepts: ["Network Connectivity", "System Maintenance", "Data Backup", "Antivirus Installation"]
};

const skillCategories = [
  { title: "Programming Languages", skills: skillsData.programming, variant: "default" as const },
  { title: "Operating Systems", skills: skillsData.os, variant: "secondary" as const },
  { title: "Software & Tools", skills: skillsData.tools, variant: "outline" as const },
  // Add more categories here matching skillsData
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Adjust stagger delay as needed
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }, // Added spring animation
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Viewport for the whole section
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            My Skills
          </h2>
          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-primary/90">
                  {category.title}
                </h3>
                <motion.div
                  className="flex flex-wrap justify-center md:justify-start gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible" // Trigger when this container is in view
                  viewport={{ once: true, amount: 0.3 }} // Fine-tune amount for when stagger starts
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={badgeVariants}
                      // No need for initial, whileInView, transition, viewport here as it's handled by parent variants
                    >
                      <Badge variant={category.variant} className="px-4 py-2 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-muted-foreground">
            ...and more, including hardware diagnostics, component upgrades, and network configuration.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 