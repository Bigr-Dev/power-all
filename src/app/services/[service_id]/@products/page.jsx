// components
import ProductSection from "@/components/ProductSection";

const page = async ({ params }) => {
  const { service_id } = await params;

  const origin = process.env.API_ASIDE;
  const url = `${origin}${service_id}`;

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
