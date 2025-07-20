"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  const user = {
    email: "john@example.com",
    name: "John Doe",
    photo: "https://i.pravatar.cc/100",
  };
  const userinfo = user;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const links = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/allProperties">All Properties</NavLink>
      <NavLink href="/dashboard/myProfile">Dashboard</NavLink>
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "lg:bg-transparent bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-c-heading" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-c-heading">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 space-y-2">{links}</nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co/rbX4J5H/Untitled-design-2.png"
            alt="Echo Estate"
            className="h-10 w-auto"
          />
          <span
            className={`text-xl font-bold ${
              pathname === "/" && !isScrolled
                ? " text-c-heading"
                : "text-c-heading"
            }`}
          >
            House Hive
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 items-center">{links}</div>

        {/* User */}
        <div className="flex items-center">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={userinfo.photo}
                  alt="User"
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full border-2 border-c-primary cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 p-4 space-y-2 border-c-stroke-border-gray"
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <Image
                    src={userinfo.photo}
                    width={100}
                    height={100}
                    alt="User"
                    className="w-12 h-12 rounded-full border border-c-primary"
                  />
                  <p className="text-sm font-semibold text-c-primary">
                    {userinfo.name}
                  </p>
                  <p className="text-sm text-c-muted">{userinfo.email}</p>
                </div>
                <DropdownMenuItem asChild>
                  <Button
                    variant="destructive"
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/signIn">
              <Button className="bg-c-primary hover:bg-c-primary-dark text-white">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
