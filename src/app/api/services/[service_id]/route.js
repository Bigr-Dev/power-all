import {
  GET_BRANDS,
  GET_BRANDS_BY_SERVICE_ID,
  GET_CATEGORIES,
  GET_CATEGORIES_BY_SERVICE_ID,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_SERVICE_ID,
  GET_SERVICES,
} from "@/lib/client.queries";

export async function GET(req, { params }) {
  const { service_id } = await params;

  const promises =
    service_id === "all"
      ? [GET_SERVICES(), GET_BRANDS(), GET_CATEGORIES(), GET_PRODUCTS()]
      : [
          GET_SERVICES(),
          GET_BRANDS_BY_SERVICE_ID(service_id),
          GET_CATEGORIES_BY_SERVICE_ID(service_id),
          GET_PRODUCTS_BY_SERVICE_ID(service_id),
        ];

  const results = await Promise.allSettled(promises);

  const [servicesResult, brandsResult, categoriesResult, productsResults] =
    results;

  let response = {
    services: [],
    brands: [],
    categories: [],
    products: [],
    errors: [],
  };
  let errors = [];

  if (servicesResult.status === "fulfilled") {
    response.services = servicesResult.value[0];
  } else {
    errors.push("Failed to fetch brands");
  }

  if (brandsResult.status === "fulfilled") {
    response.brands = brandsResult.value[0];
  } else {
    errors.push("Failed to fetch brands");
  }

  if (categoriesResult.status === "fulfilled") {
    response.categories = categoriesResult.value[0];
  } else {
    errors.push("Failed to fetch categories");
  }

  if (productsResults.status === "fulfilled") {
    response.products = productsResults.value[0];
  } else {
    errors.push("Failed to fetch categories");
  }

  if (errors.length > 0) {
    response.errors = errors;
  }

  return Response.json(response);

  // if (service_id === "all") {
  //   Promise.allSettled
  //   const [brands] = await GET_BRANDS();
  //   const [categories] = await GET_CATEGORIES();
  //   return Response.json({
  //     brands,
  //     categories,
  //   });
  // } else {
  //   const [brands] = await GET_BRANDS_BY_SERVICE_ID(service_id);
  //   const [categories] = await GET_CATEGORIES_BY_SERVICE_ID(service_id);
  //   return Response.json({
  //     brands,
  //     categories,
  //   });
  // }
}
