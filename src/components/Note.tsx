import React from "react";

interface Props {
  type: "HELPFUL" | "IMPORTANT" | "CRITICAL";
  children: React.JSX.Element;
}

export function Note({ children, type }: Props) {
  if (type === undefined) {
    throw new Error("Note type has to be defined");
  }

  const extra = {
    CRITICAL: "border-l-red-300 bg-red-100",
    HELPFUL: "border-l-sky-300 bg-sky-100",
    IMPORTANT: "border-l-yellow-300 bg-yellow-100",
  }[type];

  return <div className={`px-4 py-1 my-6 rounded border-solid  border-l-8 ${extra} `}>{children}</div>;
}
