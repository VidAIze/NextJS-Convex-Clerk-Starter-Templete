"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          {error.message || "An unexpected error occurred"}
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 underline"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
} 