import { api } from "@/trpc/server";
import { unstable_noStore as noStore } from "next/cache";

export const fetchPosts = async () => {
  noStore();
  const posts = await api.post.getPosts.query();
  return posts;
};
