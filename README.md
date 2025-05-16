# Armand0e Portfolio Website

This is the personal portfolio website for Armand0e, built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. It features a smooth scrolling experience powered by Lenis and an interactive particle background using tsParticles.

## Project Goals
- Showcase projects, skills, and experience.
- Provide a modern, visually appealing, and performant user experience.
- Experiment with advanced front-end technologies and animations.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI
- **Animation**: Framer Motion, tsParticles
- **Smooth Scroll**: Lenis

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn

### Setup
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/armand0e.com.git
    cd armand0e.com
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server
To start the development server (usually on `http://localhost:3000`):
```bash
npm run dev
# or
# yarn dev
```

### Building for Production
To create an optimized production build:
```bash
npm run build
```

### Running in Production Mode
To start the application in production mode (after building):
```bash
npm run start
# This will serve the app on 0.0.0.0:7626 by default (as configured in package.json)
```

## Project Structure
- `src/app/`: Core Next.js app router files (layouts, pages, global styles).
- `src/components/`: Reusable React components.
  - `src/components/ui/`: Shadcn UI components.
  - `src/components/sections/`: Components for different sections of the portfolio (Hero, About, Projects, etc. - *Note: this is an example, actual structure might vary or be flatter*).
- `src/lib/`: Utility functions and libraries.
- `public/`: Static assets.
- `next.config.mjs`: Next.js configuration.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.

## Key Features Implemented
- Smooth scrolling using Lenis.
- Interactive particle background.
- Theme provider for light/dark mode (currently defaults to dark).
- Responsive design for various screen sizes.
- Section-based navigation.

## Troubleshooting
- If the build fails or hangs, ensure all dependencies are correctly installed and that there are no circular dependencies or self-references in `package.json`.
- Check for TypeScript errors in the console.
- Ensure client-side specific code (using `window` or `document`) is properly handled within `useEffect` hooks or conditional checks (`typeof window !== 'undefined'`). 