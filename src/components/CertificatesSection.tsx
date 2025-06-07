"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const certificatesData = [
  {
    name: "Placeholder Certificate Name 1",
    organization: "Issuing Organization 1",
    date: "Date Obtained 1",
    description: "Brief description or details about the certificate."
  },
  {
    name: "Placeholder Certificate Name 2",
    organization: "Issuing Organization 2",
    date: "Date Obtained 2",
    description: "Brief description or details about the certificate."
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Certificates
          </h2>
          <div className="space-y-8">
            {certificatesData.map((certificate, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary/90">{certificate.name}</CardTitle>
                  <CardDescription className="text-base">
                    {certificate.organization} - {certificate.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    {certificate.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
