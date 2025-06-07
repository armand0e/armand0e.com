import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils"; // Assuming utils will be created by shadcn init or manually
import { Footer } from "@/components/Footer"; // Import the Footer component
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"; // Import SmoothScrollProvider

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Arman Rafiee - Developer Portfolio",
  description: "Arman Rafiee's personal developer portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col", // Added flex flex-col
          inter.variable
        )}
      >
        <SmoothScrollProvider> {/* Wrap with SmoothScrollProvider */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false} // Force dark mode as per preference
            disableTransitionOnChange
          >
            <div className="flex-grow">{/* Added flex-grow to push footer down */}
              {children}
            </div>
            <Footer /> {/* Add Footer component here */}
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
} 