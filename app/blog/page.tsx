"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import ThemeMenu from "@/components/theme-menu";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function BlogPage() {
  const { isAuthenticated } = useAuth();
  const posts = useQuery(api.posts.list);

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

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Blog Posts</h1>

          <div className="space-y-6">
            {posts?.map((post) => (
              <article
                key={post._id}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {post.content}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.author.imageUrl}
                        alt={post.author.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span>{post.author.name}</span>
                    </div>
                  )}
                  <span>•</span>
                  <time dateTime={new Date(post._creationTime).toISOString()}>
                    {new Date(post._creationTime).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </article>
            ))}
            {posts?.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-700 dark:text-gray-300">
                  No posts yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 