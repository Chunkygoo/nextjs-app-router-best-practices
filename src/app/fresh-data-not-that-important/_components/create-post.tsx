"use client";

import { useCreatePost } from "@/app/fresh-data-not-that-important/_hooks/api";
import { useZodForm } from "@/app/fresh-data-not-that-important/_utils/zod-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createPostSchema, type CreatePost } from "@/server/api/routers/schema";

export function CreatePost() {
  const { createPost, isLoading } = useCreatePost();

  const form = useZodForm({
    schema: createPostSchema,
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: CreatePost) => {
    form.reset();
    createPost({ name: data.name });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} className="text-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
