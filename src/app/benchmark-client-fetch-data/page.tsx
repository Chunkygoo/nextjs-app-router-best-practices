import { CreatePost } from "@/app/benchmark-client-fetch-data/_components/create-post";
import Posts from "@/app/benchmark-client-fetch-data/_components/list-post";
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
