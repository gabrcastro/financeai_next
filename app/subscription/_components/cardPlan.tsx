"use client";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Benefit } from "./benefit";
import { createStripeCheckout } from "../_actions/createCheckout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

interface ICardPlan {
  plan: "basic" | "premium";
}
export function CardPlan({ plan }: ICardPlan) {
  const { user } = useUser();
  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium";

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

  if (!process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_LINK)
    throw new Error("Please specify a valid portal link");

  return (
    <Card
      className={`col-span-1 p-0 ${((hasPremiumPlan && plan === "premium") || (!hasPremiumPlan && plan === "basic")) && "boder border-primary"}`}
    >
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
          {plan === "premium" && hasPremiumPlan ? (
            <Button
              className={`w-full rounded-full border border-primary bg-transparent font-bold text-primary hover:bg-transparent hover:text-primary`}
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_LINK}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
              >
                Manage plan
              </Link>
            </Button>
          ) : plan === "premium" && !hasPremiumPlan ? (
            <Button
              onClick={handleAcquirePlanClick}
              className={`w-full rounded-full border border-primary font-bold text-muted`}
            >
              Upgrade
            </Button>
          ) : (
            <></>
          )}
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
