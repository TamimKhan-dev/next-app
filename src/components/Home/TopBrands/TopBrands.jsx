import React from "react";

export default function TopBrands() {
  return (
    <div className="mb-18">
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-1">
          Top Brands
        </h2>
        <p className="text-neutral-500">Explore & Get Your Desired Products</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">Asus</h2>
        </div>
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">Dell</h2>
        </div>
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">Acer</h2>
        </div>
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">AMD</h2>
        </div>
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">HP</h2>
        </div>
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">Nvidia</h2>
        </div>
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">Intel</h2>
        </div>
        <div className="bg-neutral-100 shadow px-18 py-3 w-fit min-w-54 rounded-sm">
            <h2 className="text-xl lg:text-3xl font-bold">MSI</h2>
        </div>
      </div>
    </div>
  );
}
