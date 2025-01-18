"use client";

import { SignUpButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@/hooks/use-auth";
import ThemeMenu from "@/components/theme-menu";
import Link from "next/link";

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Next Stack
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeMenu />
          {isAuthenticated ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              href="/sign-in"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="https://github.com/VidAIze/next-stack-template" className="inline-flex space-x-6">
                  <span className="rounded-full bg-gray-900/10 dark:bg-gray-100/10 px-3 py-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10">
                    Latest release
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-400">
                    <span>v1.0.0</span>
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Next.js + Convex + Clerk Starter Template
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                A modern full-stack starter template with authentication, real-time updates, and dark mode support. Perfect for building your next project.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                {isAuthenticated ? (
                  <Link
                    href="/dashboard"
                    className="rounded-md bg-gray-900 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-700 dark:hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <SignUpButton mode="modal">
                    <button className="rounded-md bg-gray-900 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-700 dark:hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                      Get Started
                    </button>
                  </SignUpButton>
                )}
                <a href="https://github.com/VidAIze/next-stack-template" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  View on GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <pre className="text-[0.8125rem] leading-6 text-gray-300 rounded-xl bg-gray-900 dark:bg-gray-800 p-4">
                    <code className="text-gray-300">
{`### Using Create Command (Recommended)

# Interactive mode with your preferred package manager
npx @vidaize/create-next-stack
# or
yarn create @vidaize/next-stack
# or
pnpm create @vidaize/next-stack

# Or specify project name directly
pnpm create @vidaize/next-stack my-app

### Manual Setup

# Clone the repository
git clone https://github.com/VidAIze/next-stack-template.git

# Install dependencies with your preferred package manager
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
pnpm dev
`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to build your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              This template includes everything you need to build a modern full-stack application with Next.js, Convex, and Clerk.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <svg className="h-5 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                  Authentication
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">Secure authentication with Clerk, including social logins, user management, and more.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <svg className="h-5 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
                  </svg>
                  Dark Mode
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">Built-in dark mode support with next-themes, including system preference detection.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <svg className="h-5 w-5 flex-none text-gray-900 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                  Real-time Updates
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">Real-time database updates with Convex, perfect for collaborative features.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}
