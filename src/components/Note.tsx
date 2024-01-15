import React from "react";

interface Props {
  type: "HELPFUL" | "IMPORTANT" | "CRITICAL";
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Note({ children, type, className, as: Component = "div" }: Props) {
  if (type === undefined) {
    throw new Error("Note type has to be defined");
  }

  const extra = {
    CRITICAL: "border-l-red-300 dark:border-l-red-900 bg-red-100 dark:bg-red-950",
    HELPFUL: "border-l-sky-300 dark:border-l-sky-900 bg-sky-100 dark:bg-sky-950",
    IMPORTANT: "border-l-yellow-300 dark:border-l-yellow-900 bg-yellow-100 dark:bg-yellow-950",
  }[type];

  return (
    <Component className={`px-4 py-1 my-6 rounded border-solid  border-l-8 ${extra} ${className}`}>
      {children}
    </Component>
  );
}
