"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useLenis } from "@/components/SmoothScrollProvider";

const ParticlesBackground = dynamic(() => import('./ParticlesBackground').then(mod => mod.ParticlesBackground), {
  ssr: false,
});

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-50%", "-100%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 0.8, 0]);

  const subtitleY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-30%", "-80%"]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.7, 0]);
  
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 1, 0]);

  const lenisContext = useLenis();

  return (
    <section id="home" ref={targetRef} className="relative flex h-screen flex-col items-center justify-center text-center overflow-hidden">
      <ParticlesBackground />
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="z-10 p-4"
      >
        <h1 className="text-6xl font-bold tracking-tight text-primary sm:text-7xl md:text-8xl lg:text-9xl">
          ARMAN RAFIEE
        </h1>
      </motion.div>
      
      <motion.div 
        style={{ y: subtitleY, opacity: subtitleOpacity }}
        className="z-10 p-4 mt-[-1rem] md:mt-[-2rem]"
      >
        <p className="text-lg leading-8 text-muted-foreground sm:text-xl md:text-2xl">
          Software Developer | Innovator | Problem Solver
        </p>
      </motion.div>

      <motion.div 
        style={{ opacity: buttonsOpacity }}
        className="z-10 p-4"
      >
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/#projects" legacyBehavior passHref>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 hover:scale-105 transition-transform">
              View My Work
            </Button>
          </Link>
          <Link href="/resume.pdf" legacyBehavior passHref target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-primary-foreground hover:scale-105 transition-transform">
              Download Resume
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 z-20"
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Number.POSITIVE_INFINITY, 
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{ opacity: buttonsOpacity }}
      >
        <Link href="/#about" onClick={(e) => {
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          if (aboutSection && lenisContext?.lenis) {
            lenisContext.lenis.scrollTo(aboutSection);
          } else if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <ArrowDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </motion.div>

    </section>
  );
} 