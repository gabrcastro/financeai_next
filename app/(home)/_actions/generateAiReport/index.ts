"use server";

import { db } from "@/app/_lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import OpenAi from "openai";
import { GenerateAiReportSchema, generateAiReportSchema } from "./schema";

const DUMMY_REPORT =
  '### Personal Finance Report\n\n#### General Financial Summary\nThe listed transactions were analyzed, and the following information was extracted to provide insights into your finances:\n\n- **Total Expenses:** R$ 19,497.56\n- **Total Investments:** R$ 14,141.47\n- **Total Deposits/Current Accounts:** R$ 10,100.00 (including salary deposits and other sources)\n- **Highest Expense Category:** Food\n\n#### Category Analysis\n\n1. **Food:** R$ 853.76\n2. **Transport:** R$ 144.05\n3. **Entertainment:** R$ 143.94\n4. **Other Expenses:** R$ 17,828.28 (includes categories such as health, education, housing)\n\n#### Trends and Insights\n- **High Food Expenses:** The food category represents a significant portion of your expenses, totaling R$ 853.76 in recent months. Monitoring this category may help you find ways to save.\n\n- **Variable Expenses:** Other expense types, like entertainment and transport, also accumulate throughout the month. Identifying days with higher spending can help you reduce these costs.\n\n- **Investments:** You made substantial investments totaling R$ 14,141.47, which is a positive indicator for wealth building and financial security in the future.\n\n- **Expense Categorization:** There are several expenses listed as "OTHER," which may be worth re-evaluating. Properly classifying these expenses could improve your financial control.\n\n#### Tips to Improve Your Financial Life\n\n1. **Create a Monthly Budget:** Set a spending limit for each category to help avoid overspending on items like food and entertainment.\n\n2. **Reduce Food Expenses:** Consider cooking at home more often, planning meals, and using shopping lists to avoid impulse purchases.\n\n3. **Review Recurring Expenses:** Take a look at your fixed expenses (such as health and education) to see if they meet your needs or if there is room for reduction.\n\n4. **Set Savings Goals:** Based on your deposits and investments, establish specific goals to save a percentage of your monthly income. Estimating your savings can help ensure an emergency fund.\n\n5. **Reduce Entertainment Costs:** Plan leisure activities within your budget; look for free or low-cost options. Remember that entertainment can also be enjoyed at home.\n\n6. **Reevaluate Your Investments:** Ensure your investments align with your short- and long-term financial goals. Explore alternatives that may offer better returns.\n\n7. **Track Your Finances Regularly:** Use financial management apps to monitor your expenses and income, helping you stay informed about your financial health.\n\n#### Conclusion\nImproving your financial life is an ongoing process that involves planning, monitoring, and regular adjustments. With the analysis and suggestions above, you can start making more strategic financial decisions to achieve your goals. Remember, every dollar saved is one step closer to financial security!';

export async function generateAiReport({ month }: GenerateAiReportSchema) {
  generateAiReportSchema.parse({ month });
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  if (!process.env.OPENAI_API_KEY) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return DUMMY_REPORT;
  }
  const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });
  const user = (await clerkClient()).users.getUser(userId);
  const hasPremium = (await user).publicMetadata.subscriptionPlan === "premium";
  if (!hasPremium) throw new Error("You need a premium subscription");

  // get transactions
  const transactions = await db.transaction.findMany({
    where: {
      date: {
        gte: new Date(`2024-${month}-01`),
        lt: new Date(`2024-${month}-31`),
      },
    },
  });

  // send transactions to gpt and ask him for a report
  const content = `Generate a report with insights about my finances with tips and guidance on how to improve my financial life.The transactions are divided by point and comma.The structure of each is {DATE}-{TYPE}-{VALUE}-{CATEGORY}.They are: ${transactions.map((transaction) => `${transaction.date.toLocaleDateString("us-EN")}--${transaction.type}--${transaction.amount}--${transaction.category}`).join(";")}`;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      // QUEM A IA É
      {
        role: "system",
        content:
          "You are an expert in personal finance management and organization.You help people better organize their finances.",
      },
      // USER É A MENSAGEM QUE O USUARIO DIGITA
      {
        role: "user",
        content: content,
      },
    ],
  });

  // get the report by gpt e return the report to the user
  return completion.choices[0].message.content;
}
