import React from "react";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

// Demo list of posts
const posts = [
  {
    title: "React Testing",
    excerpt: "Learn React Testing",
  },
  {
    title: "React w Tailwind",
    excerpt: "Learn React Testing w Tailwind",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Website Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div>
          {/* {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))} */}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
