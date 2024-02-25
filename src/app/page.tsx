import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex max-w-xl flex-col gap-2">
      <p className="text-xl">
        I built this to show case Nextjs App router data fetching, mutation and
        caching features.
      </p>
      <h1 className="pt-8 text-center text-2xl font-bold">Demos</h1>
      <Link
        href="/fresh-data-not-that-important"
        // prefetch={false} // change this to see the behaviors in effect
        className="text-xl text-blue-300 underline hover:text-blue-500"
      >
        fresh-data-not-that-important
      </Link>
      <Link
        href="/fresh-data-important-prefetch-true"
        prefetch={true}
        className="text-xl text-blue-300 underline hover:text-blue-500"
      >
        fresh-data-important-prefetch-true (recommended)
      </Link>
    </div>
  );
}
