import { Button } from "@/components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

export function Header() {
  return (
    <header className="sticky top-0 border-b bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            src="/logo.svg"
            alt="Relay logo"
            height={44}
            width={44}
            className="size-7.5"
          />
          <span className="text-lg font-semibold">Relay</span>
        </Link>
        <div className="flex items-center gap-x-2">
          <Show when="signed-out">
            <SignInButton>
              <Button variant="ghost">Sign in</Button>
            </SignInButton>
            <SignUpButton>
              <Button>Sign up</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton
              fallback={
                <Skeleton className="aspect-square size-7.5 rounded-full" />
              }
            />
          </Show>
        </div>
      </div>
    </header>
  );
}
