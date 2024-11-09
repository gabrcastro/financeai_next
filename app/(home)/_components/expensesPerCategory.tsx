import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transactions";
import { TotalExpensesPerCategory } from "@/app/_data/getDashboard/types";

interface IExpensesPerCategory {
  expensesPerCategory: TotalExpensesPerCategory[];
}
export function ExpensesPerCategory({
  expensesPerCategory,
}: IExpensesPerCategory) {
  return (
    <ScrollArea className="col-span-2 max-h-fit rounded-md border pb-6">
      <CardHeader>
        <CardTitle>Expenses by Category</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-normal">
                {TRANSACTION_CATEGORY_LABELS[category.category]}
              </p>
              <p className="text-sm font-normal">{category.percentage}%</p>
            </div>
            <Progress value={category.percentage} />
            <p className="text-sm font-normal text-muted-foreground">
              {" "}
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(category.totalAmount)}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
}
