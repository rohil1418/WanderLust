import Link from "next/link";
import { Compass } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/listings" className="flex items-center gap-2 text-xl font-bold text-rose-500">
            <Compass className="h-6 w-6" />
            WanderLust
          </Link>
          <Link href="/listings" className="text-sm text-gray-700 hover:text-black">
            Explore
          </Link>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/listings/new" className="text-gray-700 hover:text-black">
            Add new Listing
          </Link>
          <Link href="/signup" className="font-semibold text-gray-700 hover:text-black">
            Sign up
          </Link>
          <Link href="/login" className="rounded-full bg-rose-500 px-4 py-2 font-semibold text-white hover:bg-rose-600">
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
}