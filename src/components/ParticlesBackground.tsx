"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import type { Container } from "@tsparticles/engine";
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's a big bundle
      // prefer preparing a custom bundle using AOT builds for production
      await loadFull(engine);
      // await loadSlim(engine); // if using the slim bundle
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // console.log(container); // You can uncomment this to see the container object
  }, []);

  const particleOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: ["repulse", "trail"],
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
        trail: {
          delay: 0.005,
          pauseOnStop: false,
          quantity: 2,
          particles: {
            color: {
              value: "#A8E6F0"
            },
            opacity: {
              value: { min: 0.1, max: 0.2 }
            },
            size: {
              value: { min: 1, max: 2 }
            }
          }
        }
      },
    },
    particles: {
      color: {
        value: "#A8E6F0", // Updated to pastel cyan
      },
      links: {
        color: "#95A3B8", // Use muted-foreground
        distance: 150,
        enable: true,
        opacity: 0.2, // Reduced opacity for subtlety
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.5, // Reduced speed
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.3, // Reduced opacity
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 }, // Smaller particles
      },
      life: { // Added particle lifetime back
        duration: {
          sync: false,
          value: 7, // Particles last for 7 seconds
        },
        count: 1, // Particles disappear after their lifetime and don't respawn on their own
      },
    },
    detectRetina: true,
    background: {
        color: {
            value: "transparent" // Ensure background is transparent
        }
    },
    fullScreen: {
        enable: true,
        zIndex: -1 // Send to back
    }
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particleOptions as any} // Cast to any to avoid deep type issues for now
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1 // Ensure it's behind other content
        }}
      />
    );
  }

  return <></>;
} 