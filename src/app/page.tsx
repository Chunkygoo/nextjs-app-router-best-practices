import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex max-w-xl flex-col gap-2">
      <p className="text-xl">
        I built this to show case Nextjs App router data fetching, mutation and
        caching features. (Nextjs 14.1.0)
      </p>
      <h1 className="pt-8 text-center text-2xl font-bold">Demos</h1>
      <p className="text-xl">
        {`Go to dev tools and use slow network to see the power of server actions.
        Compare it to the benchmarks (links 3 and 4). Using slow 3g and hard
        refreshing for every link visit, in the format of (seconds)
        Link:pageLoadTime:uiUpdateOnMutateTime We have in dev mode 1:13:4,
        2:19:4, 3:19:6,4:21:4. In built/prod mode with prefetch={undefined} for all links, we
        have 1:2:2, 2:2:4, 3:2:4, 4:4:4`}
      </p>
      So we can conclude that
      <ol>
        <li>Server side data fetching has faster initial page load.</li>
        <li>
          Using a trpc/react query type mutation takes longer to
          invalidate/update the page, since we need to invalidate the data in
          React Querys cache and rerender. Whereas if the page is rendered
          server side completely, we can use revalidatePath and the page updates
          faster.
        </li>
      </ol>
      <p className="text-xl">
        {`In built/prod mode with prefetch={true} and all page.js loaded, Using slow 3g and hard
        refreshing for every link visit, for all links, we
        have 1:0:2, 2:0:4, 3:0:4, 4:2:4`}
      </p>
      So we can conclude that
      <ol>
        <li>Prefetch true reduces initial page load time</li>
      </ol>
      <p className="text-xl">
        {`In built/prod mode with prefetch={false} and all page.js loaded, Using slow 3g and hard
        refreshing for every link visit, for all links, we
        have 1:2:2, 2:2:4, 3:2:4, 4:4:4`}
      </p>
      So we can conclude that
      <ol>
        <li>
          Prefetch false has similar performance as prefetch undefined, only the
          cache behaviour changes
        </li>
      </ol>
      <Link
        href="/fresh-data-not-that-important"
        // prefetch={false} // change this to see the behaviors in effect
        prefetch={true}
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
      <Link
        href="/benchmark-server-fetch-data"
        prefetch={false}
        className="text-xl text-blue-300 underline hover:text-blue-500"
      >
        Benchmark server fetch data (no server actions - pure trpc mutation)
      </Link>
      <Link
        href="/benchmark-client-fetch-data"
        prefetch={false}
        className="text-xl text-blue-300 underline hover:text-blue-500"
      >
        Benchmark client fetch data (no server actions - pure trpc). This
        somehow has similar performance for mutation with server actions. It
        does not need to download layout.css everytime which server actions do.
        However, data fetching is horrendous. So it is not really comparable to
        the previous three links since those fetch data on the server side.
      </Link>
    </div>
  );
}
