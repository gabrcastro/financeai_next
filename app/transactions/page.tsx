import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/dataTable";
import { transactionColumns } from "./_columns";
import { AddTransactionButton } from "../_components/addTransactionButton";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TitlePage } from "../_components/titlePage";
import { endOfMonth, startOfMonth } from "date-fns";

export default async function TransactionsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  // access database transactions
  const transactions = await db.transaction.findMany({
    where: {
      userId: userId,
    },
  });

  if (!userId) throw new Error("User not found");
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
    <div className="h-screen space-y-6 overflow-hidden p-6">
      <TitlePage title="Transactions">
        <div className="flex flex-row items-center gap-5">
          <AddTransactionButton transactionsNumber={currentMonthTransactions} />
        </div>
      </TitlePage>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
}
