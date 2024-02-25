import Posts from "@/app/fresh-data-important-prefetch-true/_components/list-posts";
import Fetcher from "@/app/fresh-data-important-prefetch-true/_utils/fetcher";
import { fetchPosts } from "@/app/fresh-data-not-that-important/_lib/queries";
import Link from "next/link";
import { Suspense } from "react";
import { CreatePost } from "./_components/create-post";

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
        <Fetcher
          fetchInitialData={fetchPosts}
          getComponent={(data) => <Posts initialData={data} />}
        />
      </Suspense>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create a new post</h1>
        <CreatePost />
      </div>
    </div>
  );
}
