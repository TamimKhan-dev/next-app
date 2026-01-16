import Image from "next/image";
import React from "react";

export default function FeaturedProducts() {
  const productDetails = [
    {
      id: 1,
      title: "Sony PlayStation 5 Slim Gaming Console",
      image: "/playstation-5-pro-500x500.webp",
      price: "68,900 ৳",
    },
    {
      id: 2,
      title: "NVIDIA GeForce RTX 4060 Gaming OC 8GB Graphics Card",
      image: "/geforce-rtx-4060-gaming-oc-8g-01-500x500.webp",
      price: "42,000 ৳",
    },
    {
      id: 3,
      title: "DJI Mini 4K Fly More Combo Drone",
      image: "/mini-4k-fly-more-combo-01-500x500.webp",
      price: "78,000 ৳",
    },
    {
      id: 4,
      title: "Gigabyte G34WQC Ultrawide Gaming Monitor",
      image: "/G34WQC-Gaming-Monitor.jpg",
      price: "52,000 ৳",
    },
    {
      id: 5,
      title: "Corsair Vengeance DDR5 32GB 3200MHz RAM",
      image: "/ddr5 vengence 3200mhz 32gb ram.webp",
      price: '52,000 ৳',
    },
  ];

  return (
    <div className="mb-22">
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-1">
          Featured Products
        </h2>
        <p className="text-neutral-500">Get Your Desired Products</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 xl:justify-between">
        {productDetails.map((product) => (
          <div key={product.id} className="bg-neutral-50 shadow rounded-sm">
            <Image
              src={product.image}
              alt="product image"
              width={250}
              height={250}
              className="border-b-3 border-neutral-400"
            />
            <div className="mt-2 h-23 px-2 pb-2 flex flex-col justify-between">
                <h4 className="max-w-52 font-semibold text-sm text-neutral-800">{product.title}</h4>
                <p className="font-semibold text-neutral-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
