"use client";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Benefit } from "./benefit";
import { createStripeCheckout } from "../_actions/createCheckout";
import { loadStripe } from "@stripe/stripe-js";

interface ICardPlan {
  plan: "basic" | "premium";
  active?: boolean;
}
export function CardPlan({ plan, active }: ICardPlan) {
  async function handleAcquirePlanClick() {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      throw new Error("Please enter a public subscription key");

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

    if (!stripe) throw new Error("Stripe not available");

    await stripe.redirectToCheckout({ sessionId });
  }

  return (
    <Card className="col-span-1 p-0">
      <CardContent className="relative flex-col space-y-6 px-0 py-6">
        <div className="relative flex flex-col">
          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-lg">
              {plan === "basic" ? "Basic Plan" : "Premium Plan"}
            </p>
            <p className="flex flex-row items-center gap-2 text-4xl">
              {plan === "basic" ? "$0,00" : "$9,90"}{" "}
              <span className="text-xs text-muted-foreground">/month</span>
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-muted-foreground/30" />
        <div className="flex flex-col space-y-7 px-6">
          <div className="flex flex-col items-start justify-center space-y-3">
            <Benefit title={"Only 10 transactions per month"} exist />
            <Benefit title={"Unlimited the AI"} exist={plan === "premium"} />
            <Benefit title={"..."} exist={plan === "premium"} />
          </div>
          <Button
            onClick={handleAcquirePlanClick}
            variant={plan === "basic" ? "outline" : "default"}
            className={`w-full rounded-full border-primary font-bold ${plan === "basic" ? "text-primary" : "text-muted"} ${active && "bg-primary/20 hover:cursor-not-allowed hover:bg-primary/20 hover:text-primary"}`}
          >
            {active ? "Active" : "Upgrade"}
          </Button>
        </div>

        {/* {active && (
          <Badge className="absolute left-0 top-0 ml-6 bg-primary/20 font-light capitalize text-primary hover:bg-primary/20">
            Current
          </Badge>
        )} */}
      </CardContent>
    </Card>
  );
}
