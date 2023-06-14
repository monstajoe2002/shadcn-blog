import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export default function BlogCard({
  id,
  title,
  description,
  tags,
}: Props) {
  return (
    <Card className=" w-[380px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          
          Tags: {tags.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Link className="w-full" href={`post/${id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
