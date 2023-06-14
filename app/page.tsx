import { metadata } from "./layout";
import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import axios from "axios";

export type Post = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

async function getPosts() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await axios.get("https://dummyjson.com/posts?limit=15");
  if (res.status !== 200) {
    throw new Error("failed to fetch");
  }
  return res.data;
}
export default async function Home() {
  const { posts } = await getPosts();
  return (
    <>
      <section>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          {metadata.title}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6  text-center">
          {metadata.description}
        </p>
      </section>
      <main className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6 mx-auto">
        {posts.map((post: Post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.body}
            tags={post.tags}
          />
        ))}
      </main>
    </>
  );
}
