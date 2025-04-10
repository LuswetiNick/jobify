import { DatabaseZap } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

import AuthButtons from "./auth-buttons";

const Navbar = () => {
  return (
    <header className="bg-background fixed top-0 z-10 w-full backdrop-blur-lg border-b py-4">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-1 text-2xl font-bold">
            <DatabaseZap />
            Jobify.
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AuthButtons />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
