import { ReactNode } from "react";

interface ITitlePage {
  title: string;
  children?: ReactNode;
}
export function TitlePage({ title, children }: ITitlePage) {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
