import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Transaction } from "@prisma/client";
import Link from "next/link";
import { LastTransactionItem } from "./lastTransactionItem";

interface ILastTransactionsProps {
  lastTransactions: Transaction[];
}
export function LastTransactions({ lastTransactions }: ILastTransactionsProps) {
  return (
    <ScrollArea className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-xl">Last Transactions</CardTitle>
        <Button variant={"outline"} className="rounded-full" asChild>
          <Link href={"/transactions"}>See more</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastTransactions.map((transaction) => (
          <div key={transaction.id} className="space-y-5">
            <LastTransactionItem {...transaction} />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
}
