import React from "react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      
      <footer className="footer footer-horizontal footer-center bg-[#121212] text-white p-10">
        <div className="flex gap-3 items-center">
        <Image src='/motherboard.png' alt="logo" width={40} height={40}/>
        <h2 className="lg:text-2xl font-bold">Com<span className="text-lime-200">Tech</span></h2>
      </div>
        <nav className="grid grid-flow-col gap-4 lg:text-[18px]">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Components</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="p-3 text-lime-200 rounded-full border">
              <FaFacebookF size={25}/>
            </a>
            <a className="p-3 text-lime-200 rounded-full border">
              <FaLinkedinIn size={25}/>
            </a>
            <a className="p-3 text-lime-200 rounded-full border">
              <FaXTwitter size={25}/>
            </a>
          </div>
        </nav>
      </footer>
      <p className="bg-neutral-900 text-white text-center py-1 lg:text-lg">Copyright © {new Date().getFullYear()} - Tamim Khan</p>
    </div>
  );
}
