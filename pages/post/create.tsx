import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [result, setResult] = useState({});
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.title,
        body: formData.body,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((res) => setResult(res));
    new Promise(() => {
      setTimeout(() => {
        router.replace("/");
      }, 2000);
    });
  };

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        Create Blog Post
      </h1>
      <Separator className="mb-6" />
      <form className="mx-auto flex flex-col gap-4 " onSubmit={handleSubmit}>
        <Label>Title:</Label>
        <Input
          name="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Label>Body:</Label>
        <Textarea
          name="body"
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
        <Button type="submit">Submit</Button>
      </form>
      {Object.keys(result).length ? (
        <code>
          {JSON.stringify(result, null, 4)}
        </code>
      ) : (
        ""
      )}
    </div>
  );
}
