import {
  createPostAction,
  deletePostAction,
} from "@/app/fresh-data-important-prefetch-true/_lib/mutations";
import { api } from "@/trpc/react";
import { useAction } from "next-safe-action/hooks";

export const useCreatePost = () => {
  const utils = api.useUtils();
  const { execute, result, status } = useAction(createPostAction, {
    onSuccess() {
      void utils.post.getPosts.invalidate(); // if using query client, invalidate.
    },
  });
  return {
    createPost: execute,
    data: result.data,
    isLoading: status === "executing",
  };
};

export const useDeletePost = () => {
  const utils = api.useUtils();
  const { execute, status } = useAction(deletePostAction, {
    onSuccess() {
      void utils.post.getPosts.invalidate(); // if using query client, invalidate.
    },
  });
  return {
    deletePost: execute,
    isLoading: status === "executing",
  };
};
