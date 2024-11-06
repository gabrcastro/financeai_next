import Image from "next/image";
import { Button } from "./_components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dark } from "@clerk/themes";

export default async function HomePage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
}
