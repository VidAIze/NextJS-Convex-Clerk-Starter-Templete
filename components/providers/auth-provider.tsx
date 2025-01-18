"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, isSignedIn } = useUser();
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (!isSignedIn || !user) return;

    storeUser({
      tokenIdentifier: user.id,
      name: `${user.firstName} ${user.lastName}`.trim(),
      email: user.emailAddresses[0]?.emailAddress || "",
      imageUrl: user.imageUrl,
    });
  }, [isSignedIn, user, storeUser]);

  return <>{children}</>;
} 