import { TagIcon } from "./icons/TagIcon";

interface Props {
  tag: string;
}

export function PostTag({ tag }: Props) {
  return (
    <a href={"/tags/" + tag} className="flex gap-2 flex-nowrap items-center text-orange-400">
      <TagIcon />
      <span>{tag}</span>
    </a>
  );
}
