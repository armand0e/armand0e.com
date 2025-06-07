"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const educationData = {
  university: "University of Florida",
  majors: "Computer Science and Microbiology & Cell Science",
  status: "Junior Year",
  achievements: [
    "Completed the IB Diploma Program",
    // Add other relevant academic achievements here if desired
  ]
};

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Education
          </h2>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">{educationData.university}</CardTitle>
              <CardDescription className="text-base">
                {educationData.status}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-2">
                Majoring in: <strong>{educationData.majors}</strong>
              </p>
              {educationData.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-2 text-primary/80">Key Achievements:</h4>
                  <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    {educationData.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 