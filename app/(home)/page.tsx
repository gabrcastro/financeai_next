import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SummaryCards } from "./_components/summaryCards";
import { MonthSelect } from "./_components/monthSelect";
import { isMatch } from "date-fns";

interface IHomePage {
  searchParams: { month: string };
}
export default async function HomePage({ searchParams: { month } }: IHomePage) {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) redirect("?month=01");

  return (
    <div className="flex h-full w-full flex-col space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <MonthSelect />
      </div>
      <SummaryCards month={month} />
    </div>
  );
}
