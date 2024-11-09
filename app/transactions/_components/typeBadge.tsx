import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

type TransactionTypeBadgeProp = {
  transaction: Transaction;
};

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProp) {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-light capitalize text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Deposit
      </Badge>
    );
  }

  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 font-light capitalize text-danger hover:bg-danger/10">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Expense
      </Badge>
    );
  }

  return (
    <Badge className="bg-purple-500/10 font-light capitalize text-purple-500 hover:bg-purple-500/10">
      <CircleIcon className="mr-2 fill-purple-500" size={10} />
      Investment
    </Badge>
  );
}
