import { CheckIcon, XIcon } from "lucide-react";
import { ReactNode } from "react";

interface IBenefit {
  title: string | ReactNode;
  exist?: boolean;
}
export function Benefit({ title, exist }: IBenefit) {
  return (
    <div className="flex flex-row items-center gap-3 text-sm">
      {exist ? (
        <CheckIcon size={20} className="text-primary" />
      ) : (
        <XIcon size={20} className="" />
      )}
      <p>{title}</p>
    </div>
  );
}
