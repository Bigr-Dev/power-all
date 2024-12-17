import React from "react";

import {
  GET_BRANDS,
  GET_BRANDS_BY_SERVICE_ID,
  GET_CATEGORIES,
  GET_CATEGORIES_BY_SERVICE_ID,
} from "@/lib/client.queries";
import Aside from "@/components/Aside";

const useAside = async () => {
  const [brands_all] = await GET_BRANDS();
  const [brands_1] = await GET_BRANDS_BY_SERVICE_ID(1);
  const [brands_2] = await GET_BRANDS_BY_SERVICE_ID(2);
  const [brands_3] = await GET_BRANDS_BY_SERVICE_ID(3);
  const [categories_all] = await GET_CATEGORIES();
  const [categories_1] = await GET_CATEGORIES_BY_SERVICE_ID(1);
  const [categories_2] = await GET_CATEGORIES_BY_SERVICE_ID(2);
  const [categories_3] = await GET_CATEGORIES_BY_SERVICE_ID(3);
  return {
    brands_all: brands_all,
    brands_1: brands_1,
    brands_2: brands_2,
    brands_3: brands_3,
    categories_all: categories_all,
    categories_1: categories_1,
    categories_2: categories_2,
    categories_3: categories_3,
  };
};

const page = async ({ params }) => {
  const context = await useAside();

  const { service_id } = await params;

  return <Aside service_id={service_id} context={context} />;
};

export default page;
