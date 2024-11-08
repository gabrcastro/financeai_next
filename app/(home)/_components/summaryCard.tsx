import { AddTransactionButton } from "@/app/_components/addTransactionButton";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface ISymmaryCard {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}
export function SummaryCard({ icon, title, amount, size }: ISymmaryCard) {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        {icon}
        <p
          className={`${size == "large" ? "text-white" : "text-muted-foreground"} opacity-70`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`${size == "large" ? "text-4xl" : "text-2xl"} font-bold`}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)}
        </p>
        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
}
