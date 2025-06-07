"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const objective = "Highly motivated and detail-oriented individual with a strong passion for technology. Seeking to contribute to a dynamic IT team as a Computer Support Assistant. Offering excellent problem-solving abilities, a solid understanding of computer systems, hardware, and software, and a commitment to delivering exceptional service and support to users.";
  const seeking = "I am currently seeking internship opportunities to expand my skills and prepare for a successful career in technology. As a quick learner and a dedicated worker, I'm committed to making valuable contributions and eager to grow in a collaborative environment.";

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              {objective}
            </p>
            <p>
              {seeking}
            </p>
            {/* We can add more details or a picture later if you like */}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 