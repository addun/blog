import type { CollectionEntry } from "astro:content";
import { TagList } from "./TagList.tsx";

interface Props {
  blogEntry: CollectionEntry<"blog">;
}

export function PostListItem({ blogEntry }: Props) {
  const { title, description, thumbnail, tags } = blogEntry.data;
  const link = blogEntry.slug;

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
