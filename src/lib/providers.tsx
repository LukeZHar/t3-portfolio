"use client";

import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "~/components/ui/sonner";
import { TooltipProvider } from "~/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
    
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          {children}
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
  );
}
