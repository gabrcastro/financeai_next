"use client";

import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { MONTH_OPTIONS } from "@/app/_constants/months";
import { useRouter, useSearchParams } from "next/navigation";

export function MonthSelect() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  function handleMonthChange(month: string) {
    push(`/?month=${month}`);
  }

  return (
    <Select
      onValueChange={(month) => handleMonthChange(month)}
      defaultValue={month ?? ""}
    >
      <SelectTrigger className="w-[200px] rounded-full">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((month) => (
          <SelectItem key={month.value} value={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
