import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link"; // ✅ Import Next.js Link
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between p-5 bg-white shadow-sm">
      <Link href="/" passHref>
        <span className="text-2xl text-indigo-500 font-bold">Inksight</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade" passHref>
              <span>Pricing</span>
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard" passHref>
              <span>My Document</span>
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard/upload" passHref>
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
