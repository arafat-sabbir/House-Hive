"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
  className?: string;
};

const NavLink = ({
  href,
  children,
  exact = false,
  className = "",
}: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        className,
        "transition-colors duration-200 bg-c-light-primary rounded-full px-4 py-1",
        isActive
          ? "text-white font-semibold bg-primary"
          : "text-gray-500 hover:text-c-heading"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
