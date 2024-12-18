import {
  GET_PRODUCT_BY_BRAND,
  GET_PRODUCTS_BY_BRAND_AND_CATEGORY,
  GET_SERVICES,
} from "@/lib/client.queries";

export async function GET(req, { params }) {
  const { service_id, products_by } = await params;

  const promises = [GET_SERVICES()];

  if (products_by[3]) {
    const brand_id = products_by[1];
    const category_id = products_by[3];
    promises.push(GET_PRODUCTS_BY_BRAND_AND_CATEGORY(brand_id, category_id));
  } else if (products_by[0] === "brand") {
    promises.push(GET_PRODUCT_BY_BRAND(products_by[1]));
  } else if (products_by[0] === "category") {
    const category_id = products_by[1];
    if (service_id !== "all") {
      promises.push(GET_PRODUCTS_BY_SERVICE_CATEGORY(service_id, category_id));
    } else {
      promises.push(GET_PRODUCTS_BY_CATEGORY_ID(category_id));
    }
  }

  const results = await Promise.allSettled(promises);

  const response = { services: [], products: [], errors: [] };
  const errors = [];

  const [servicesResult, ...otherResults] = results;

  if (servicesResult.status === "fulfilled") {
    response.services = servicesResult.value[0];
  } else {
    errors.push("Failed to fetch services");
  }

  if (otherResults.length > 0) {
    const productsResult = otherResults[0];
    if (productsResult.status === "fulfilled") {
      response.products = productsResult.value[0];
    } else {
      errors.push("Failed to fetch products");
    }
  } else {
    response.products = [];
  }

  if (errors.length > 0) {
    response.errors = errors;
  }

  return Response.json(response);
}
