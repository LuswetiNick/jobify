import { SignInButton, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <SignInButton />
      <UserButton />
      <ThemeToggle />
    </div>
  );
}
