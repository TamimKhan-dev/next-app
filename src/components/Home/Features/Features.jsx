import Container from "@/components/Shared/Container";
import React from "react";
import { RiShipLine, RiDiscountPercentLine } from "react-icons/ri";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { BsPeople } from "react-icons/bs";


export default function features() {
  return (
    <Container>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 xl:flex xl:justify-between mb-18">
        <div className="bg-neutral-100 py-3 w-full shadow flex gap-2 justify-center px-2 items-center">
          <RiShipLine size={35}/>
          <div>
            <h4 className="font-semibold">Free Delivery</h4>
            <p className="text-sm text-neutral-500">Free shipping on all order</p>
          </div>
        </div>
        <div className="bg-neutral-100 py-3 w-full shadow flex gap-2 justify-center px-2 items-center">
          <BsPeople size={35}/>
          <div>
            <h4 className="font-semibold">Online Support 24/7</h4>
            <p className="text-sm text-neutral-500">Support online 24 hours a day</p>
          </div>
        </div>
        <div className="bg-neutral-100 py-3 w-full shadow flex gap-2 justify-center px-2 items-center">
          <RiDiscountPercentLine size={35}/>
          <div>
            <h4 className="font-semibold">Member Discount</h4>
            <p className="text-sm text-neutral-500">Onevery order over $120.00</p>
          </div>
        </div>
        <div className="bg-neutral-100 py-3 w-full shadow flex gap-2 justify-center px-2 items-center">
          <LiaPiggyBankSolid size={35}/>
          <div>
            <h4 className="font-semibold">Money Return</h4>
            <p className="text-sm text-neutral-500">Back guarantee under 7 days</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
