"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/getDashboard/types";
import { PieItemPercentage } from "./pieItemPercentage";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Invested",
    color: "#a855f7",
  },
  [TransactionType.DEPOSIT]: {
    label: "Invested",
    color: "#55B02e",
  },
  [TransactionType.EXPENSE]: {
    label: "Invested",
    color: "#e93030",
  },
} satisfies ChartConfig;

interface ITransactionPieChart {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

export function TransactionPieChart({
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  typesPercentage,
}: ITransactionPieChart) {
  const chartData = [
    { type: TransactionType.DEPOSIT, amount: depositsTotal, fill: "#55B02E" },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#A855F7",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
  ];
  return (
    <Card className="flex max-h-fit flex-col py-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-2">
          <PieItemPercentage
            icon={<PiggyBankIcon size={16} className="text-purple-500" />}
            title="Investments"
            type="investment"
            percentage={typesPercentage.INVESTMENT}
          />
          <PieItemPercentage
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Deposits"
            type="debit"
            percentage={typesPercentage.DEPOSIT}
          />
          <PieItemPercentage
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Expenses"
            type="expense"
            percentage={typesPercentage.EXPENSE}
          />
        </div>
      </CardContent>
    </Card>
  );
}
