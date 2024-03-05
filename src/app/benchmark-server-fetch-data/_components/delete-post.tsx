"use client";

import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export function DeleteButton(post: { id: number }) {
  const router = useRouter();
  const { mutate: deletePost, isLoading } = api.post.delete.useMutation({
    onSuccess: () => {
      router.refresh();
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
