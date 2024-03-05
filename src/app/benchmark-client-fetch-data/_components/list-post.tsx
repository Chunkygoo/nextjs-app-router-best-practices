"use client";

import { DeleteButton } from "@/app/benchmark-client-fetch-data/_components/delete-post";
import { api } from "@/trpc/react";
import { unstable_noStore as noStore } from "next/cache";

export default function Posts() {
  noStore();
  const { data: posts, isLoading } = api.post.getPosts.useQuery();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col text-xl">
      <h1 className="text-2xl font-bold">Posts</h1>
      {posts?.map((post) => (
        <div
          className="flex justify-between p-2 hover:bg-gray-800/80"
          key={post.id}
        >
          {post.name}
          <DeleteButton id={post.id} />
        </div>
      ))}
    </div>
  );
}
