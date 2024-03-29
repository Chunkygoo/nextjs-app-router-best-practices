"use server";

import { action } from "@/app/fresh-data-important-prefetch-true/_utils/safe-action";
import {
  createPostSchema,
  deletePostSchema,
} from "@/server/api/routers/schema";
import { api } from "@/trpc/server";
import { revalidatePath } from "next/cache";

export const createPostAction = action(createPostSchema, async ({ name }) => {
  await api.post.create.mutate({ name: name }); // Insert into DB
  revalidatePath("/fresh-data-important-prefetch-true"); // Revalidate page to see new content
});

export const deletePostAction = action(deletePostSchema, async ({ id }) => {
  await api.post.delete.mutate({ id }); // Insert into DB
  revalidatePath("/fresh-data-important-prefetch-true"); // Revalidate page to see new content
});
