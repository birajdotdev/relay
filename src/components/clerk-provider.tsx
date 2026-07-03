import { ClerkProvider as ClerkNextJSProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";

type ClerkProviderProps = React.ComponentProps<typeof ClerkNextJSProvider>;

export function ClerkProvider({
  children,
  appearance,
  ...props
}: ClerkProviderProps) {
  return (
    <ClerkNextJSProvider
      appearance={{
        theme: shadcn,
        options: {
          socialButtonsPlacement: "bottom",
          unsafe_disableDevelopmentModeWarnings: true,
          logoImageUrl: "/logo.svg",
        },
        ...appearance,
      }}
      {...props}
    >
      {children}
    </ClerkNextJSProvider>
  );
}
