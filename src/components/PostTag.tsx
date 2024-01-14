import React from "react";
import { TagIcon } from "./icons/TagIcon";

interface Props {
  tag: string;
}

export function PostTag({ tag }: Props) {
  return (
    <span className="flex gap-1 flex-nowrap items-center text-orange-400">
      <TagIcon />
      <span>{tag}</span>
    </span>
  );
}
