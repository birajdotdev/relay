import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.literal(["development", "preview", "production"]),
    CLERK_SECRET_KEY: z.string().min(1),
    VERCEL_OIDC_TOKEN: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().default("/sign-in"),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().default("sign-up"),
    NEXT_PUBLIC_CONVEX_URL: z.url(),
    NEXT_PUBLIC_CONVEX_SITE_URL: z.url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CONVEX_SITE_URL: process.env.NEXT_PUBLIC_CONVEX_SITE_URL,
  },
  createFinalSchema: (shape) =>
    z.object(shape).transform((env) => {
      if (env.NODE_ENV === "development") {
        return {
          ...env,
          CONVEX_DEPLOYMENT: z.string(),
          CONVEX_DEPLOY_KEY: z.string().optional(),
        };
      }

      return {
        ...env,
        CONVEX_DEPLOYMENT: z.string().optional,
        CONVEX_DEPLOY_KEY: z.string(),
      };
    }),
  emptyStringAsUndefined: true,
});
