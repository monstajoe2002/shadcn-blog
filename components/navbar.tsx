"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Plus, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <nav className="border-b-gray-300 border-b-2 gap-4 py-2 flex px-16">
      <Link href="/">
        <Button variant={"link"}>Home</Button>
      </Link>
      <Link href="/about">
        <Button variant={"link"}>About</Button>
      </Link>

      <Link className="ml-auto " href="/post/create">
        <Button className="flex justify-between">
          <Plus />
          <span>New Post</span>
        </Button>
      </Link>
      <Button
        variant={"ghost"}
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }>
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </nav>
  );
}
