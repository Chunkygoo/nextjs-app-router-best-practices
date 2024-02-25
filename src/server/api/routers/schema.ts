import { z } from "zod";

export const createPostSchema = z.object({ name: z.string().min(1) });
export const deletePostSchema = z.object({ id: z.number() });

export type CreatePost = z.infer<typeof createPostSchema>;
export type DeletePost = z.infer<typeof deletePostSchema>;
