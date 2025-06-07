"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/SmoothScrollProvider";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Certificates", href: "/#certificates" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const lenisContext = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (lenisContext?.lenis) {
      const cleanId = targetId.startsWith('/#') ? targetId.substring(2) : targetId;
      const targetElement = document.getElementById(cleanId);
      if (targetElement) {
        lenisContext.lenis.scrollTo(targetElement);
      } else {
        console.warn(`Target element with ID '${cleanId}' not found for scrolling.`);
      }
    } else {
      console.warn("Lenis scroll not available. Falling back to default link behavior or doing nothing.");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link 
          href="/#home" 
          className="text-2xl font-bold text-primary"
          onClick={(e) => handleScrollTo(e, "/#home")}
        >
          AR
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" && item.href === "/#home" 
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 