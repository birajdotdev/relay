import Image from "next/image";
import Link from "next/link";
import { AuthButtons } from "./auth-buttons";

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
        <AuthButtons />
      </div>
    </header>
  );
}
