import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summaryCard";

interface ISymmaryCards {
  month: string;
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

export async function SummaryCards({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: ISymmaryCards) {
  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Balance"
        size="large"
        amount={balance}
      />

      {/* Others */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} className="text-purple-500" />}
          title="Invested"
          amount={investmentsTotal}
          type="investment"
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Deposits"
          amount={depositsTotal}
          type="debit"
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Expenses"
          amount={expensesTotal}
          type="expense"
        />
      </div>
    </div>
  );
}
