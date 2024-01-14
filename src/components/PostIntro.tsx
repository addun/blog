import React from "react";
import { PostTag } from "./PostTag";

interface Props {
  frontmatter: {
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
  };
}

export function PostIntro({ frontmatter }: Props) {
  const { title, description, tags, thumbnail } = frontmatter;

  return (
    <header className="flex my-20 flex-col gap-12">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-[3fr_2fr] ">
        <div className="order-2 lg:order-none">
          <h1 className="text-4xl m-0 font-bold">{title}</h1>
          <p className="text-justify my-4">{description}</p>
          <div className="flex gap-4 flex-wrap">
            {tags.map((tag) => (
              <PostTag tag={tag} />
            ))}
          </div>
        </div>
        <img src={thumbnail} className="w-full rounded-xl order-1 lg:order-none" alt="" />
      </div>
    </header>
  );
}
