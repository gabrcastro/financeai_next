import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

// LABELS
export const TRANSACTION_CATEGORY_LABELS = {
  HOUSING: "Housing",
  TRANSPORTATION: "Transportation",
  FOOD: "Food",
  ENTERTAINMENT: "Entertainment",
  HEALTH: "Health",
  UTILITY: "Utility",
  SALARY: "Salary",
  EDUCATION: "Education",
  OTHER: "Other",
};
export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Credit Card",
  DEBIT_CARD: "Debit Card",
  BANK_TRANSFER: "Bank Transfer",
  BANK_SLIP: "Bank Slip",
  CASH: "Cash",
  PIX: "Pix",
  OTHER: "Other",
};
export const TRANSACTION_PAYMENT_METHOD_LABELS_ICON = {
  [TransactionPaymentMethod.CREDIT_CARD]: "/paymentMethods/credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "/paymentMethods/debit-card.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "/paymentMethods/bank-slip.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "/paymentMethods/bank-transfer.svg",
  [TransactionPaymentMethod.CASH]: "/paymentMethods/money.svg",
  [TransactionPaymentMethod.PIX]: "/paymentMethods/pix.svg",
  [TransactionPaymentMethod.OTHER]: "/paymentMethods/other.svg",
};
export const TRANSACTION_TYPE_LABELS = {
  DEPOSIT: "Deposit",
  EXPENSE: "Expense",
  INVESTMENT: "Investment",
};

// OPTIONS
export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.DEPOSIT,
    label: TRANSACTION_TYPE_LABELS[TransactionType.DEPOSIT],
  },
  {
    value: TransactionType.EXPENSE,
    label: TRANSACTION_TYPE_LABELS[TransactionType.EXPENSE],
  },
  {
    value: TransactionType.INVESTMENT,
    label: TRANSACTION_TYPE_LABELS[TransactionType.INVESTMENT],
  },
];
export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
  },
];
export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
];
