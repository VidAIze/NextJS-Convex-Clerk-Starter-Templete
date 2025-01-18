"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

export function useAuth() {
  const { isSignedIn, isLoaded, user } = useUser();
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      // Store user data in Convex when they sign in
      storeUser({
        name: user.fullName ?? "",
        email: user.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user.imageUrl ?? "",
        tokenIdentifier: user.id,
      }).catch(console.error);
    }
  }, [isLoaded, isSignedIn, user, storeUser]);

  return {
    isAuthenticated: isSignedIn,
    isLoading: !isLoaded,
  };
}