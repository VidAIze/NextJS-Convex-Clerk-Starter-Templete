"use client";

import { cn } from "@/lib/utils";

interface LoadingProps {
  variant?: "default" | "spinner" | "dots" | "pulse" | "skeleton" | "bar";
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
  textClassName?: string;
}

export function Loading({
  variant = "default",
  size = "md",
  text,
  className,
  textClassName,
}: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const renderLoader = () => {
    switch (variant) {
      case "spinner":
        return (
          <div
            className={cn(
              "animate-spin rounded-full border-2 border-current border-t-transparent",
              "text-gray-700 dark:text-gray-300",
              sizeClasses[size],
              className
            )}
          />
        );
      case "dots":
        return (
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  animationDelay: `${i * 150}ms`,
                }}
                className={cn(
                  "animate-bounce rounded-full",
                  "bg-gray-700 dark:bg-gray-300",
                  size === "sm" && "h-1 w-1",
                  size === "md" && "h-2 w-2",
                  size === "lg" && "h-3 w-3",
                  className
                )}
              />
            ))}
          </div>
        );
      case "pulse":
        return (
          <div
            className={cn(
              "animate-pulse rounded-full",
              "bg-gray-700 dark:bg-gray-300",
              sizeClasses[size],
              className
            )}
          />
        );
      case "skeleton":
        return (
          <div
            className={cn(
              "animate-pulse rounded-md",
              "bg-gray-200 dark:bg-gray-700",
              size === "sm" && "h-4 w-24",
              size === "md" && "h-6 w-32",
              size === "lg" && "h-8 w-48",
              className
            )}
          />
        );
      case "bar":
        return (
          <div
            className={cn(
              "relative overflow-hidden rounded-full",
              "bg-gray-200 dark:bg-gray-700",
              size === "sm" && "h-1",
              size === "md" && "h-2",
              size === "lg" && "h-3",
              "w-full max-w-[200px]",
              className
            )}
          >
            <div
              className={cn(
                "absolute inset-y-0 w-1/3 rounded-full animate-loading-bar",
                "bg-gray-700 dark:bg-gray-300"
              )}
            />
          </div>
        );
      default:
        return (
          <div
            className={cn(
              "animate-pulse rounded-full",
              "bg-gray-700 dark:bg-gray-300",
              sizeClasses[size],
              className
            )}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {renderLoader()}
      {text && (
        <p className={cn("text-sm font-medium text-gray-700 dark:text-gray-300", textClassName)}>
          {text}
        </p>
      )}
    </div>
  );
} 