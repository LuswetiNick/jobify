"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoutButton from "./logout-button";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

export default function AuthButtons() {
  const { data, isPending } = authClient.useSession();
  if (isPending)
    return (
      <div>
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );

  const session = data;

  return !session ? (
    <Button asChild>
      <Link href={"/login"}>Get Started</Link>
    </Button>
  ) : (
    <div className="flex items-center gap-2">
      <LogoutButton />
    </div>
  );
}
