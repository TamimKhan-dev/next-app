import React from "react";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import NavLink from "../NavLink";
import { FiMenu } from "react-icons/fi";

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
                <h5 className="font-bold text-2xl">ComTech</h5>
              </div>
            </Link>
            {/* Menu items */}
            <ul className="font-semibold gap-2 hidden md:flex">
              <li>
                <NavLink href="/" type="Navlink">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/allComponents" type="Navlink">
                  All Components
                </NavLink>
              </li>
            </ul>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn rounded-full">
                <FiMenu size={18}/>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li className="md:hidden">
                  <NavLink href="/">Home</NavLink>
                </li>
                <li className="md:hidden">
                  <NavLink href="/allComponents">All Components</NavLink>
                </li>
                <li>
                  <Link href='/login'>Login</Link>
                </li>
                <li>
                  <Link href='signUp'>Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
