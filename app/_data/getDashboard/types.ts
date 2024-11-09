import { TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
  [Key in TransactionType]: number;
};
