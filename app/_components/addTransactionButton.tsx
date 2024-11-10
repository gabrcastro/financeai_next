"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { UpsertTransactionDialog } from "./upsertTransactionDialog";
import { useUser } from "@clerk/nextjs";

interface IAddTransactionButton {
  transactionsNumber: number;
}
export function AddTransactionButton({
  transactionsNumber,
}: IAddTransactionButton) {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  const { user } = useUser();
  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium";
  const transactionsLimited = transactionsNumber === 10 && !hasPremiumPlan;

  return (
    <>
      <Button
        disabled={transactionsLimited}
        className={`rounded-full font-bold ${transactionsLimited && "bg-muted hover:cursor-not-allowed"}`}
        onClick={() => setDialogIsOpen(true)}
      >
        {transactionsLimited ? (
          <span>{transactionsNumber}/10 transactions</span>
        ) : (
          <span className="flex gap-4">
            Add Transaction <ArrowDownUpIcon className="ml-2" />
          </span>
        )}
      </Button>
      <UpsertTransactionDialog
        transactionsNumber={transactionsNumber ?? 0}
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}
