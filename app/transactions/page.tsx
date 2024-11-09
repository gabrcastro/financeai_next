import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/dataTable";
import { transactionColumns } from "./_columns";
import { AddTransactionButton } from "../_components/addTransactionButton";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TitlePage } from "../_components/titlePage";

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
      <TitlePage title="Transactions">
        <AddTransactionButton />
      </TitlePage>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
}
