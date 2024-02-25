import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "better-sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["nextjs-app-router-best-practices_*"],
} satisfies Config;
