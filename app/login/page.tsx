import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="grid h-full grid-cols-2">
      {/* form */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col items-start justify-center p-8">
        <Image
          src={"/logo.svg"}
          alt="Finance AI"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Welcome</h1>
        <p className="text-muted-foreground mb-8">
          Finance AI is a financial management platform that uses it to monitor
          your movements, and offer personalized insights, facilitating control
          of your budget.
        </p>
        <Button variant={"outline"} className="w-full">
          <LogInIcon className="mr-2" />
          Login or create account
        </Button>
      </div>
      {/* Image */}
      <div className="relative h-full w-full">
        <Image
          src={"/login.png"}
          alt="Login to your account"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
