"use client";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AllComponents() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <div className="mb-18">
        <div className="mt-8 text-center space-y-2 mb-8">
          <h3 className="text-2xl lg:text-3xl font-semibold">All Components</h3>
          <p className="text-neutral-400">Get Your Desired Products!</p>
        </div>

        {!products ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : (
          <div className="grid grid-cols-2 md:gird-cols-3 xl:grid-cols-5 gap-3">
            {products.map((product) => (
              <Link key={product.id} href={`allComponents/${product.id}`} >
                <div className="bg-gray-50 shadow w-fit pb-3 cursor-pointer">
                <Image
                  src={product.image}
                  alt="product's image"
                  width={290}
                  height={280}
                  className="w-full mb-3 border-b-2 border-gray-300"
                />
                <div className="px-2 flex flex-col justify-between gap-2 min-h-32">
                  <h5 className="font-semibold text-neutral-700 line-clamp-2">
                    {product.title}
                  </h5>
                  <p className="text-sm w-full line-clamp-2 font-semibold text-neutral-600">
                    {product.description}
                  </p>
                  <div className="flex justify-between">
                    <span className="font-bold text-sm md:text-base">
                      {product.price}
                    </span>
                    <span className="flex text-xs md:text-base gap-1 items-center font-semibold">
                      Details <FaArrowRightLong />
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
