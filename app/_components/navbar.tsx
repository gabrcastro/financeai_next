"use client";

import { UserButton } from "@clerk/nextjs";
import {
  ArrowLeftRightIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center justify-between border-r-[1px] border-r-zinc-800 p-5">
      <div className="flex flex-col gap-6">
        <Image
          src={"/icon.svg"}
          width={30}
          height={30}
          alt="Finance AI"
          className="mb-10"
        />
        <Link
          className={`${pathname == "/" ? "font-bold text-primary" : "text-muted-foreground"} flex w-full items-center justify-center py-4 text-base hover:opacity-50`}
          href={"/"}
        >
          <LayoutDashboardIcon />
        </Link>
        <Link
          className={`${pathname == "/transactions" ? "font-bold text-primary" : "text-muted-foreground"} flex w-full items-center justify-center py-4 text-base hover:opacity-50`}
          href={"/transactions"}
        >
          <ArrowLeftRightIcon />
        </Link>
        <Link
          className={`${pathname == "/subscription" ? "font-bold text-primary" : "text-muted-foreground"} flex w-full items-center justify-center py-4 text-base hover:opacity-50`}
          href={"/subscription"}
        >
          <CreditCardIcon />
        </Link>
      </div>

      <UserButton />
    </nav>
  );
}
