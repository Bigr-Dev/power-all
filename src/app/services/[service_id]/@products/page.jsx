import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_SERVICE_ID,
  GET_SERVICES,
} from "@/lib/client.queries";
import ProductSection from "@/components/ProductSection";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 0;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

const page = async ({ params }) => {
  const { service_id } = await params;

  let products = [];
  const [services] = await GET_SERVICES();
  if (service_id === "all") {
    const [result] = await GET_PRODUCTS();
    products = result;
  } else {
    const [result] = await GET_PRODUCTS_BY_SERVICE_ID(service_id);
    products = result;
  }

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
