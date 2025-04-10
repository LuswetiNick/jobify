"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Chrome, Github, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const githubSignIn = async () => {
    try {
      await authClient.signIn.social(
        {
          provider: "github",
          callbackURL: "/",
        },
        {
          onRequest: () => {
            setLoading(true);
          },
          onSuccess: () => {
            toast.success("Login successfull");
            setLoading(false);
          },
          onError: (ctx) => {
            setLoading(false);
            toast.error(ctx.error.message);
          },
        }
      );
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const googleSignIn = async () => {
    try {
      await authClient.signIn.social(
        {
          provider: "google",
          callbackURL: "/",
        },
        {
          onRequest: () => {
            setLoading(true);
          },
          onSuccess: () => {
            toast.success("Login successful");
            setLoading(false);
          },
          onError: (ctx) => {
            setLoading(false);
            toast.error(ctx.error.message);
          },
        }
      );
    } catch (error: unknown) {
      console.log(error);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">Welcome</CardTitle>
          <CardDescription>
            Login with your Google or Github account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button
              disabled={loading}
              variant="outline"
              className="w-full"
              onClick={googleSignIn}
            >
              <Chrome />
              Login with Google
            </Button>
            <Button
              disabled={loading}
              variant="outline"
              className="w-full"
              onClick={githubSignIn}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  {" "}
                  <Github />
                  Login with Github
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
};

export default LoginPage;
