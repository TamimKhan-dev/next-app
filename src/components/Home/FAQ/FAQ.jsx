import React from "react";

export default function FAQ() {
  return (
    <div className="mb-22">
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-1">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-500">Get Your Desired Products</p>
      </div>

      <div className="space-y-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            1. Are the products on Comtech original and brand new?
          </div>
          <div className="collapse-content text-sm text-neutral-500">
            Yes. All products sold on Comtech are 100% original, brand new, and sourced from authorized distributors. We do not sell refurbished or used items unless clearly mentioned.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            2. Do you provide warranty for computer components?
          </div>
          <div className="collapse-content text-sm text-neutral-500">
            Absolutely. Most products come with official brand warranty. The warranty period varies by product and brand and is clearly mentioned on each product page.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            3. Can I return or replace a product if there is an issue?
          </div>
          <div className="collapse-content text-sm text-neutral-500">
            Yes. If you receive a defective or wrong product, you can request a replacement within 3 days of delivery, as long as the product is unused and in its original packaging.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            4. Do you offer Cash on Delivery (COD)?
          </div>
          <div className="collapse-content text-sm text-neutral-500">
            Yes. Comtech supports Cash on Delivery in selected locations. Available payment options will be shown during checkout.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            5. How long does delivery take after placing an order?
          </div>
          <div className="collapse-content text-sm text-neutral-500">
            Delivery usually takes 2–5 working days depending on your location. Orders inside major cities are often delivered faster.
          </div>
        </div>
      </div>
    </div>
  );
}
