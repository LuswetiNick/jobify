import Link from "next/link";
import { DatabaseZap } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex justify-center items-center w-full">
          <Link href="/" className="flex items-center gap-1 text-2xl font-bold">
            <DatabaseZap />
            Jobify.
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
