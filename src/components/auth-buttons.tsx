"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export function AuthButtons() {
  return (
    <div className="flex items-center gap-x-2">
      <Unauthenticated>
        <SignInButton>
          <Button variant="ghost">Sign in</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign up</Button>
        </SignUpButton>
      </Unauthenticated>
      <AuthLoading>
        <Skeleton className="aspect-square size-7.5 rounded-full" />
      </AuthLoading>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </div>
  );
}
