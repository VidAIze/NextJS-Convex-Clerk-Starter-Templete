"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Loading } from "./loading";

interface TransitionContentProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingVariant?: React.ComponentProps<typeof Loading>["variant"];
  loadingSize?: React.ComponentProps<typeof Loading>["size"];
  loadingText?: string;
  className?: string;
}

export function TransitionContent({
  isLoading,
  children,
  loadingVariant = "spinner",
  loadingSize = "md",
  loadingText,
  className,
}: TransitionContentProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(false);
      setIsTransitioning(false);
    } else {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 300); // Match this with the animation duration
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading || isTransitioning) {
    return (
      <div
        className={cn(
          shouldRender ? "animate-fade-out" : "animate-fade-in",
          "flex items-center justify-center",
          className
        )}
      >
        <Loading
          variant={loadingVariant}
          size={loadingSize}
          text={loadingText}
        />
      </div>
    );
  }

  return (
    <div className={cn("animate-fade-in", className)}>
      {children}
    </div>
  );
} 