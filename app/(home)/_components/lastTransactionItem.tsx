import { TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { LastTransactionType } from "./lastTransactionType";
import { Decimal } from "@prisma/client/runtime/library";
import Image from "next/image";
import { TRANSACTION_PAYMENT_METHOD_LABELS_ICON } from "@/app/_constants/transactions";

interface ILastTransactionsProps {
  paymentMethod: TransactionPaymentMethod;
  type: TransactionType;
  name: string;
  amount: Decimal;
  date: Date;
}
export function LastTransactionItem({
  paymentMethod,
  type,
  amount,
  date,
  name,
}: ILastTransactionsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="flex h-[50px] min-h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full bg-muted/40 p-3">
          <Image
            width={25}
            height={25}
            alt="Payment Method"
            src={TRANSACTION_PAYMENT_METHOD_LABELS_ICON[paymentMethod]}
          />
        </span>

        <div className="flex flex-col items-start justify-between">
          <p className="text-white">{name}</p>
          <p className="text-muted-foreground">
            {new Date(date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <LastTransactionType amount={Number(amount)} typeTransaction={type} />
    </div>
  );
}
