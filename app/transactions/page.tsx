import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/dataTable";
import { transactionColumns } from "./_columns";
import { AddTransactionButton } from "../_components/addTransactionButton";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function TransactionsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  // access database transactions
  const transactions = await db.transaction.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="h-screen space-y-6 overflow-hidden p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
}
