import {
  createPostAction,
  deletePostAction,
} from "@/app/fresh-data-not-that-important/_lib/mutations";
import { useAction } from "next-safe-action/hooks";

export const useCreatePost = () => {
  const { execute, result, status } = useAction(createPostAction);
  return {
    createPost: execute,
    data: result.data,
    isLoading: status === "executing",
  };
};

export const useDeletePost = () => {
  const { execute, status } = useAction(deletePostAction);
  return {
    deletePost: execute,
    isLoading: status === "executing",
  };
};
