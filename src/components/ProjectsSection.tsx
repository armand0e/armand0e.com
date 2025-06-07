"use client";

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Star, GitFork } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  languages_url: string;
  homepage: string | null;
  languages?: Record<string, number>; // To store fetched languages
}

const projectContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly different stagger for projects
    },
  },
};

const projectItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/armand0e/repos?sort=updated&direction=desc&per_page=6');
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        const data: Repo[] = await response.json();
        
        const reposWithLanguages = await Promise.all(
          data.map(async (repo) => {
            try {
              const langResponse = await fetch(repo.languages_url);
              if (!langResponse.ok) {
                console.warn(`Failed to fetch languages for ${repo.name}: ${langResponse.status}`);
                return { ...repo, languages: {} };
              }
              const languages = await langResponse.json();
              return { ...repo, languages };
            } catch (langError) {
              console.warn(`Error fetching languages for ${repo.name}:`, langError);
              return { ...repo, languages: {} };
            }
          })
        );

        setRepos(reposWithLanguages);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        console.error("Failed to fetch repos:", err);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div // Overall section animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }} // smaller amount to trigger sooner
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            My Projects
          </h2>

          {loading && <p className="text-center text-muted-foreground">Loading projects...</p>}
          {error && <p className="text-center text-destructive">Error: {error}</p>}
          
          {!loading && !error && repos.length === 0 && (
            <p className="text-center text-muted-foreground">No public projects found or failed to load.</p>
          )}

          {!loading && !error && repos.length > 0 && (
            <motion.div // This div will control the staggering of children (project cards)
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={projectContainerVariants}
              initial="hidden"
              animate="visible" // Animate when data is ready
              // whileInView and viewport are not needed here as we animate when data loads
            >
              {repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  variants={projectItemVariants}
                  // No initial/whileInView needed, handled by parent
                >
                  {/* Added whileHover for scale and shadow effect */}
                  <Card className="h-full flex flex-col overflow-hidden border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 ease-in-out">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                      <CardHeader>
                        <CardTitle className="text-xl text-primary/90 hover:underline">
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                          </a>
                        </CardTitle>
                        <CardDescription className="text-sm h-16 overflow-y-auto">
                          {repo.description || "No description available."}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {repo.languages && Object.keys(repo.languages).length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase">Languages:</h4>
                            <div className="flex flex-wrap gap-2">
                              {Object.keys(repo.languages).slice(0, 5).map((lang) => (
                                <Badge key={lang} variant="secondary" className="text-xs">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <span className="flex items-center"><Star className="w-4 h-4 mr-1" /> {repo.stargazers_count}</span>
                          <span className="flex items-center"><GitFork className="w-4 h-4 mr-1" /> {repo.forks_count}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto pt-4 flex flex-wrap gap-2 justify-start">
                        <Button asChild variant="outline" size="sm" className="hover:bg-primary/10">
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                          </a>
                        </Button>
                        {repo.homepage && (
                          <Button asChild variant="outline" size="sm" className="hover:bg-primary/10">
                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" /> Live Demo
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 