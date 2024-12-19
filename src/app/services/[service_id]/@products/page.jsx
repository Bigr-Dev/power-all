// components
import ProductSection from "@/components/ProductSection";

// export async function generateStaticParams() {
//   const origin = process.env.API_SERVICES;
//   const res = await fetch(origin);
//   const services = await res.json();

//   return services.map((service) => ({
//     service_id: service.id.toString(),
//   }));
// }

export async function generateStaticParams() {
  const origin = process.env.API_ASIDE;
  const res = await fetch(`${origin}all`);
  const { services } = await res.json();

  return [
    { service_id: "all" },
    ...services.map((service) => ({
      service_id: service.id.toString(),
    })),
  ];
}

export const metadata = {
  title: "products",
};

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
