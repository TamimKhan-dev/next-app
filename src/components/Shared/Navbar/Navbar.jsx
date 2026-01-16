import React from "react";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="py-3">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/motherboard.png" alt="logo" width="40" height="40" />
              <div>
                <h5 className="font-bold text-2xl">
                  ComTech
                </h5>
              </div>
            </Link>
            {/* Menu items */}
            <ul className=" gap-2 hidden md:flex">
              <li>
                <Link
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-scholarships"
                >
                  All ScholarShips
                </Link>
              </li>
            </ul>

            <div>
              <button className="btn">Button</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
