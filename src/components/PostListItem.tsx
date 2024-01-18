import type { CollectionEntry } from "astro:content";
import { TagList } from "./TagList.tsx";
import { getBlogPostPath } from "../utils/blog-id.ts";

interface Props {
  blogEntry: CollectionEntry<"blog">;
}

export function PostListItem({ blogEntry }: Props) {
  const { title, description, thumbnail, tags, id } = blogEntry.data;
  const link = getBlogPostPath(blogEntry);

  return (
    <article id={id} className="grid gap-4 grid-cols-1 lg:grid-cols-[320px_auto]">
      <a href={link}>
        <img src={thumbnail} alt="" className="w-full rounded-xl" />
      </a>

      <div className="flex flex-col content-between">
        <div>
          <h4 className="text-2xl m-0 mb-3">
            <a href={link}>{title}</a>
          </h4>

          <TagList tags={tags.map((t) => t.slug)} />

          <div className="text-justify mt-2">{description}</div>
        </div>

        <p className="mt-2 text-orange-400">
          <a href={link}>Read more</a>
        </p>
      </div>
    </article>
  );
}
