import { AddTransactionButton } from "@/app/_components/addTransactionButton";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { endOfMonth, startOfMonth } from "date-fns";
import { ReactNode } from "react";

interface ISymmaryCard {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  type?: "default" | "expense" | "debit" | "investment";
}
export async function SummaryCard({
  icon,
  title,
  amount,
  size,
  type,
}: ISymmaryCard) {
  const { userId } = await auth();
  if (!userId) throw new Error("User not logged in");
  const currentMonthTransactions = await db.transaction.count({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth(new Date()),
        lt: endOfMonth(new Date()),
      },
    },
  });
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <span
          className={`${type === "expense" ? "bg-red-500/10" : type === "debit" ? "bg-primary/10" : type === "investment" ? "bg-purple-500/10" : "bg-muted/50"} rounded-full p-2`}
        >
          {icon}
        </span>
        <p
          className={`${size == "large" ? "text-white" : "text-muted-foreground"} text-xs opacity-70`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`${size == "large" ? "text-2xl" : "text-lg"} font-bold`}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)}
        </p>
        {size === "large" && (
          <AddTransactionButton transactionsNumber={currentMonthTransactions} />
        )}
      </CardContent>
    </Card>
  );
}
