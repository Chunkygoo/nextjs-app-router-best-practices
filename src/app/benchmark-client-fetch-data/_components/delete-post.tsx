"use client";

import { api } from "@/trpc/react";

export function DeleteButton(post: { id: number }) {
  const utils = api.useUtils();
  const { mutate: deletePost, isLoading } = api.post.delete.useMutation({
    onSuccess: () => {
      void utils.post.getPosts.invalidate();
    },
  });
  return (
    <button
      className="border p-2 font-bold text-red-300"
      onClick={() => deletePost({ id: post.id })}
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
}
