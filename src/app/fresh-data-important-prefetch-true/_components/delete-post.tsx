"use client";

import { useDeletePost } from "@/app/fresh-data-not-that-important/_hooks/api";

export function DeleteButton(post: { id: number }) {
  const { deletePost, isLoading } = useDeletePost();
  return (
    <button
      className="border p-2 font-bold text-red-300"
      onClick={() => deletePost({ id: post.id })}
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
}
