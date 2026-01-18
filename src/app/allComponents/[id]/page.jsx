"use client";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Details() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  
  const singleProduct = products.find((product) => product.id === Number(id));


  return (
    <Container>
      <div className="min-h-[70vh] flex justify-center items-center">
        <div className="bg-gray-50 shadow p-3 max-w-90">
          <Image src={singleProduct?.image} alt="product image" width={350} height={350} className="mb-3"/>
          <div>
            <h3 className="text-xl font-semibold w-full mb-3">{singleProduct?.title}</h3>
            <p className="font-semibold text-neutral-600 mb-3">{singleProduct?.description}</p>
            <div className="flex justify-between items-center">
                <span className="font-semibold">{singleProduct?.price}</span>
                <button className="btn bg-lime-200 text white rounded-full">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
