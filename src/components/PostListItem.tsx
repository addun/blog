import type { MDXInstance } from "astro";
import React from "react";
import { PostTag } from "./PostTag";
import { TagList } from "./TagList.tsx";

interface Props {
  post: MDXInstance<Record<string, any>>;
}

export function PostListItem({ post }: Props) {
  const { title, description, thumbnail, tags } = post.frontmatter;
  const link = post.url;

  return (
    <article className="grid gap-4 grid-cols-1 lg:grid-cols-[320px_auto]">
      <a href={link} className="">
        <img src={thumbnail} alt="" className="w-full rounded-xl" />
      </a>

      <div className="flex flex-col content-between">
        <div>
          <h4 className="text-2xl m-0 mb-3">
            <a href={link}>{title}</a>
          </h4>

          <TagList tags={tags} />

          <div className="text-justify mt-2">{description}</div>
        </div>

        <p className="mt-2 text-orange-400">
          <a href={link}>Read more</a>
        </p>
      </div>
    </article>
  );
}
