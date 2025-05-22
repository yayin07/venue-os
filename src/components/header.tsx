"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-primary">
            VenueOS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/venues"
              className="text-sm font-medium hover:text-primary"
            >
              Browse Venues
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              List Your Venue
            </Link>
          </nav>

          {/* Desktop List Venue Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button size="sm">List Your Venue</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/venues"
                  className="text-sm font-medium hover:text-primary"
                >
                  Browse Venues
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                >
                  How It Works
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary"
                >
                  List Your Venue
                </Link>
                <div className="pt-4 border-t mt-2 flex flex-col space-y-4">
                  <div className="flex justify-start">
                    <ThemeToggle />
                  </div>
                  <Button size="sm" className="w-full justify-center">
                    List Your Venue
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
