import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_SERVICE_ID,
  GET_SERVICES,
} from "@/lib/client.queries";
import React from "react";

import ProductSection from "@/components/ProductSection";

const page = async ({ params }) => {
  const { service_id } = await params;

  const origin = process.env.ORIGIN || "power-all.vercel.app";
  const url = `${origin}/api/services/${service_id}`;

  const res = await fetch(url);

  const { services, products } = await res.json();

  return (
    <div className=" md:col-span-3 h-full overflow-y-auto  p-4">
      <h1 className="text-3xl font-bold text-center ">
        {service_id == "all"
          ? "All Products"
          : services?.[service_id - 1].service_name}
      </h1>

      <ProductSection products={products} />
    </div>
  );
};

export default page;
