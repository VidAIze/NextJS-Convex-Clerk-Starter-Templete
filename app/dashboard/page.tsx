"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TransitionContent } from "@/components/transition-content";
import ThemeMenu from "@/components/theme-menu";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function DashboardPage() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createPost = useMutation(api.posts.create);

  useEffect(() => {
    if (isUserLoaded && !user) {
      router.replace('/sign-in?redirect_url=/dashboard');
    }
  }, [isUserLoaded, user, router]);

  if (!isUserLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <TransitionContent
          isLoading={true}
          loadingVariant="spinner"
          loadingSize="lg"
          loadingText="Loading..."
        >
          <div />
        </TransitionContent>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setIsSubmitting(true);
    try {
      await createPost({ title, content });
      setTitle("");
      setContent("");
      router.push("/blog");
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            My App
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
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Welcome, {user.firstName}!
            </h2>
            
            <div className="space-y-6">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Create a New Post
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Content
                    </label>
                    <textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-md bg-black dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Creating..." : "Create Post"}
                    </button>
                  </div>
                </form>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Profile Information
                </h3>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                    <p className="mt-1 text-gray-900 dark:text-white">{user.primaryEmailAddress?.emailAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</p>
                    <p className="mt-1 text-gray-900 dark:text-white">{user.fullName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 