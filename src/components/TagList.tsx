import { PostTag } from "./PostTag.tsx";

interface Props {
  tags: string[];
}

export function TagList({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-x-4">
      {tags.map((tag) => (
        <PostTag tag={tag} key={tag} />
      ))}
    </div>
  );
}
