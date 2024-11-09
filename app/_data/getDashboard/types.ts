import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
  [Key in TransactionType]: number;
};

export interface TotalExpensesPerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentage: number;
}
