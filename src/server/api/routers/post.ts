import { z } from "zod";

import { deletePostSchema } from "@/server/api/routers/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { posts } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await ctx.db.insert(posts).values({
        name: input.name,
      });
    }),

  delete: publicProcedure
    .input(deletePostSchema)
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await ctx.db.delete(posts).where(eq(posts.id, input.id));
    }),
  getPosts: publicProcedure.query(async ({ ctx }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return ctx.db.query.posts.findMany();
  }),
});
