interface Props {
  height: number;
  repository: string;
  branch?: string;
}

export function Demo({ height, repository, branch = "master" }: Props) {
  const demo = `https://${branch}--${repository}-cdgstudio.netlify.app/`;
  const github = `https://github.com/cdgstudio/${repository}/tree/${branch}`;
  const stackBlitz = `https://stackblitz.com/~/github/cdgstudio/${repository}/tree/${branch}`;

  return (
    <div className="not-prose flex flex-col">
      <iframe
        src={demo}
        sandbox="allow-scripts allow-same-origin allow-modals allow-forms"
        height={height}
        loading="lazy"
        className="w-full min-h-[100px] border border-blue-100 dark:border-sky-950"
      ></iframe>
      <ul className="text-sm flex justify-end list-none p-1 my-0 bg-blue-100 dark:bg-sky-950 rounded-b-sm">
        <li>
          <a href={github} target="_blank" className="text-xs">
            GitHub
          </a>
        </li>
        <li className="px-2">&#x2022;</li>
        <li>
          <a href={demo} target="_blank" className="text-xs">
            New window
          </a>
        </li>
        <li className="px-2">&#x2022;</li>
        <li>
          <a href={stackBlitz} target="_blank" className="text-xs">
            StackBlitz
          </a>
        </li>
      </ul>
    </div>
  );
}
