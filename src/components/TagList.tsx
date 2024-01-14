import React from "react";
import { PostTag } from "./PostTag.tsx";

interface Props {
  tags: string[];
}

export function TagList({ tags }: Props) {
  return (
    <div className="flex gap-4">
      {tags.map((tag) => (
        <PostTag tag={tag} />
      ))}
    </div>
  );
}
