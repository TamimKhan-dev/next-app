import React from "react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#121212] text-white p-10">
        <Link href='/'>
          <div className="flex gap-3 items-center cursor-pointer">
            <Image src="/motherboard.png" alt="logo" width={40} height={40} />
            <h2 className="lg:text-2xl font-bold">
              Com<span className="text-lime-200">Tech</span>
            </h2>
          </div>
        </Link>
        <nav className="grid grid-flow-col gap-4 lg:text-[18px]">
          <Link href='/' className="link link-hover">Home</Link>
          <Link href='allComponents' className="link link-hover">All Components</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href='https://web.facebook.com/md.tamim.khan.829836' className="p-3 text-lime-200 rounded-full border">
              <FaFacebookF size={25} />
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/tamimkhan-dev' className="p-3 text-lime-200 rounded-full border">
              <FaLinkedinIn size={25} />
            </a>
            <a target="_blank" href='https://x.com/Tamimkhan4627' className="p-3 text-lime-200 rounded-full border">
              <FaXTwitter size={25} />
            </a>
          </div>
        </nav>
      </footer>
      <p className="bg-neutral-900 text-white text-center py-1 lg:text-lg">
        Copyright © {new Date().getFullYear()} - Tamim Khan
      </p>
    </div>
  );
}
