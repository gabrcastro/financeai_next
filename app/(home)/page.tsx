import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SummaryCards } from "./_components/summaryCards";
import { MonthSelect } from "./_components/monthSelect";
import { isMatch } from "date-fns";
import { TransactionPieChart } from "./_components/pieChart";
import { getDashboard } from "../_data/getDashboard";
import { ExpensesPerCategory } from "./_components/expensesPerCategory";
import { LastTransactions } from "./_components/lastTransactions";

interface IHomePage {
  searchParams: { month: string };
}
export default async function HomePage({ searchParams: { month } }: IHomePage) {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) redirect("?month=01");

  const dashboardData = await getDashboard(month);

  return (
    <div className="h-full w-full space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <MonthSelect />
      </div>
      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <div className="flex flex-col gap-6">
          <SummaryCards month={month} {...dashboardData} />

          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <TransactionPieChart {...dashboardData} />
            <ExpensesPerCategory
              expensesPerCategory={dashboardData.totalExpensesPerCategory}
            />
          </div>
        </div>
        <LastTransactions lastTransactions={dashboardData.lastTransactions} />
      </div>
    </div>
  );
}
