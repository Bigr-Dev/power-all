import {
  GET_PRODUCT_BY_BRAND,
  GET_PRODUCTS_BY_BRAND_AND_CATEGORY,
  GET_PRODUCTS_BY_CATEGORY_ID,
  GET_PRODUCTS_BY_SERVICE_CATEGORY,
  GET_SERVICES,
} from "@/lib/client.queries";
import React from "react";

import ProductSection from "@/components/ProductSection";

const page = async ({ params }) => {
  const { products_by, service_id } = await params;
  const origin = process.env.__NEXT_PRIVATE_ORIGIN;
  const url = `${origin}/api`;
  const res = await fetch(url);
  const services = await res.json();

  // const [services] = await GET_SERVICES();
  let products = [];

  if (products_by[3]) {
    const brand_id = products_by[1];
    const category_id = products_by[3];
    const [result] = await GET_PRODUCTS_BY_BRAND_AND_CATEGORY(
      brand_id,
      category_id
    );
    products = result;
  } else if (products_by[0] === "brand") {
    const [result] = await GET_PRODUCT_BY_BRAND(products_by[1]);
    products = result;
  } else if (products_by[0] === "category") {
    const category_id = products_by[1];
    if (service_id !== "all") {
      const [result] = await GET_PRODUCTS_BY_SERVICE_CATEGORY(
        service_id,
        category_id
      );
      products = result;
    } else {
      const [result] = await GET_PRODUCTS_BY_CATEGORY_ID(category_id);

      products = result;
    }
  }

  // if (products_by[3]) {
  //   const brand_id = products_by[1];
  //   const category_id = products_by[3];
  //   const [result] = await GET_PRODUCTS_BY_BRAND_AND_CATEGORY(
  //     brand_id,
  //     category_id
  //   );
  //   products = result;
  // } else if (products_by[0] === "brand") {
  //   const [result] = await GET_PRODUCT_BY_BRAND(products_by[1]);
  //   products = result;
  // } else if (products_by[0] === "category") {
  //   const category_id = products_by[1];
  //   if (service_id !== "all") {
  //     const [result] = await GET_PRODUCTS_BY_SERVICE_CATEGORY(
  //       service_id,
  //       category_id
  //     );
  //     products = result;
  //   } else {
  //     const [result] = await GET_PRODUCTS_BY_CATEGORY_ID(category_id);

  //     products = result;
  //   }
  // }

  // console.log("/search/", products);
  return (
    <div className=" md:col-span-3 h-full overflow-y-auto  p-4">
      <h1 className="text-3xl font-bold text-center ">
        {service_id == "all"
          ? "All Products"
          : services[service_id - 1].service_name}
      </h1>
      <ProductSection products={products} />
    </div>
  );
};

export default page;
