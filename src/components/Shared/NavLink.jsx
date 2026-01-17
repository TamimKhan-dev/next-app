"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, type }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={isActive ? type === 'Navlink' ? "border-b-2 text-gray-800" : 'bg-gray-300' : "text-neutral-600"}
    >
      {children}
    </Link>
  );
}
