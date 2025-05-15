"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge"; // For potential future use

const experiences = [
  {
    role: "Computer Technician & Builder/Technical Support",
    company: "Self-Employed",
    period: "2021 – Present",
    location: "Parkland, FL",
    description: [
      "Specialized in custom PC construction, assembly, and configuration, offering tailored hardware and software solutions for optimal performance.",
      "Diagnosed and resolved hardware issues (e.g., faulty RAM, hard drives, power supplies) and performed system upgrades (GPU, RAM, storage).",
      "Provided ongoing support for system maintenance, including data backup, antivirus installation, and performance optimization.",
      "Assisted with troubleshooting software, hardware, and network issues for users, guiding them through tasks like printer setup and software installation.",
      "Managed help desk requests, documented solutions, and ensured systems were up-to-date and functioning smoothly."
    ],
  },
  {
    role: "Audio-Visual Technician",
    company: "Self-Employed (Conferences/Conventions)",
    period: "2022 – Present",
    location: "Parkland, FL (Servicing events across Florida)",
    description: [
      "Set up and operated audiovisual equipment for major conferences and conventions, including events for the NCAA and AACR.",
      "Collaborated with teams to install, operate, and maintain AV equipment, ensuring optimal functionality during events.",
      "Troubleshot AV system errors to prevent downtime and managed service requests efficiently.",
      "Communicated technical and non-technical information effectively to management, colleagues, and clients.",
      "Maintained an organized inventory of equipment and provided technical support to end-users."
    ],
  },
  {
    role: "Grader & Roamer",
    company: "Kumon Math & Reading Center",
    period: "2020 – 2021",
    location: "Boynton Beach, FL",
    description: [
      "Provided immediate feedback and in-class assistance to students, helping improve their academic skills.",
      "Graded papers quickly, tracked student progress, and identified areas for enhancing tutoring methods.",
      "Motivated students, built their self-confidence, and supported them in reaching academic goals."
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adjusted stagger delay for a slightly more spaced feel
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 }, // Changed to tween animation
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div // This is the overall section animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            My Experience
          </h2>
          <motion.div // This div will control the staggering of children (cards)
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Adjust amount if cards are tall
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index} // Using index as key is acceptable here as the list is static
                variants={itemVariants}
                // No need for initial, whileInView, transition, viewport here for individual items
              >
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary/90">{exp.role}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} | {exp.period} | {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 