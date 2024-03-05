import { CreatePost } from "@/app/benchmark-server-fetch-data/_components/create-post";
import { DeleteButton } from "@/app/benchmark-server-fetch-data/_components/delete-post";
import { api } from "@/trpc/server";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="container flex max-w-2xl flex-col gap-24 px-4 py-16">
      <Link
        href="/"
        className="text-xl text-blue-300 underline hover:text-blue-500"
      >
        home
        {Math.random()}
      </Link>
      <Suspense fallback={"Loading..."}>
        <Posts />
      </Suspense>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create a new post</h1>
        <CreatePost />
      </div>
    </div>
  );
}

async function Posts() {
  noStore();
  const posts = await api.post.getPosts.query();
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
