import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SummaryCards } from "./_components/summaryCards";
import { MonthSelect } from "./_components/monthSelect";
import { isMatch } from "date-fns";
import { TransactionPieChart } from "./_components/pieChart";
import { getDashboard } from "../_data/getDashboard";
import { ExpensesPerCategory } from "./_components/expensesPerCategory";
import { LastTransactions } from "./_components/lastTransactions";
import { TitlePage } from "../_components/titlePage";

interface IHomePage {
  searchParams: { month: string };
}
export default async function HomePage({ searchParams: { month } }: IHomePage) {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) redirect(`?month=${new Date().getMonth() + 1}`);

  const dashboardData = await getDashboard(month);

  return (
    <div className="flex h-full w-full flex-col space-y-2 overflow-hidden p-6">
      <TitlePage title="Dashboard">
        <MonthSelect />
      </TitlePage>
      <div className="grid grid-cols-[2fr,1fr] gap-2 overflow-hidden">
        <div className="flex max-h-full flex-col gap-2 overflow-hidden">
          <SummaryCards month={month} {...dashboardData} />

          <div className="grid max-h-full grid-cols-3 grid-rows-1 gap-2 overflow-hidden">
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
