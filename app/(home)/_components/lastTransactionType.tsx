import { TransactionType } from "@prisma/client";
import { ArrowDownIcon, ArrowUpIcon, CircleIcon } from "lucide-react"; // exemplo de ícones

interface ILastTransactionType {
  typeTransaction: TransactionType;
  amount: number;
}

export function LastTransactionType({
  typeTransaction,
  amount,
}: ILastTransactionType) {
  const config = {
    [TransactionType.DEPOSIT]: {
      icon: ArrowUpIcon,
      color: "text-green-500",
      prefix: "+",
    },
    [TransactionType.EXPENSE]: {
      icon: ArrowDownIcon,
      color: "text-red-500",
      prefix: "-",
    },
    [TransactionType.INVESTMENT]: {
      icon: CircleIcon,
      color: "text-purple-500",
      prefix: "-",
    },
  };

  const { color, prefix } = config[typeTransaction] || {
    color: "text-white",
    prefix: "-",
  };

  return (
    <div className={`flex items-center ${color}`}>
      <span className="ml-2">
        {prefix}
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)}
      </span>
    </div>
  );
}
