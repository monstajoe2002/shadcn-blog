import type { Post } from "@/app/page";
import axios from "axios";
import React from "react";
async function getPost(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await axios.get(`https://dummyjson.com/posts/${id}`);
  if (res.status !== 200) {
    throw new Error("falied to fetch");
  }
  return res.data;
}
export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post: Post = await getPost(slug);
  return (
    <>
      <section>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-4">
          {post.title}
        </h1>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-8">
          Tags: {post.tags.join(" // ")}
        </h4>
      </section>
      <main>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify ">
          {post.body}
        </p>
      </main>
    </>
  );
}
