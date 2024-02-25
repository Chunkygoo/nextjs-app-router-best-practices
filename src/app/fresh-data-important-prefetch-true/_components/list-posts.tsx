"use client";

import { DeleteButton } from "@/app/fresh-data-important-prefetch-true/_components/delete-post";
import { type db } from "@/server/db";
import { api } from "@/trpc/react";
import { type inferAsyncReturnType } from "@trpc/server";

type PostType = NonNullable<
  inferAsyncReturnType<typeof db.query.posts.findFirst>
>;

function Posts({
  initialData, //   children,
}: {
  initialData: PostType[];
}) {
  const { data: posts } = api.post.getPosts.useQuery(undefined, {
    initialData,
    refetchOnMount: false,
  });
  return (
    <div className="flex flex-col text-xl">
      <h1 className="text-2xl font-bold">Posts</h1>
      {posts.map((post) => (
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

export default Posts;
