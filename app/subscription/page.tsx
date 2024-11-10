import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TitlePage } from "../_components/titlePage";
import { CardPlan } from "./_components/cardPlan";

export default async function SubscriptionPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return (
    <div className="space-y-5 p-6">
      <TitlePage title="Subscription" />
      <div className="grid grid-cols-3 gap-2">
        <CardPlan plan="basic" />
        <CardPlan plan="premium" />
      </div>
    </div>
  );
}
