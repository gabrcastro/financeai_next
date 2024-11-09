import { ReactNode } from "react";

interface IPierItemPercentage {
  type: "default" | "expense" | "debit" | "investment";
  icon: ReactNode;
  title: string;
  percentage: number;
}
export function PieItemPercentage({
  type,
  icon,
  title,
  percentage,
}: IPierItemPercentage) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <span
          className={`${type === "expense" ? "bg-red-500/10" : type === "debit" ? "bg-primary/10" : type === "investment" ? "bg-purple-500/10" : "bg-muted/50"} rounded-full p-2`}
        >
          {icon}
        </span>
        <p className={`text-muted-foreground opacity-70`}>{title}</p>
      </div>

      <span className="text-muted-foreground">{percentage}%</span>
    </div>
  );
}
