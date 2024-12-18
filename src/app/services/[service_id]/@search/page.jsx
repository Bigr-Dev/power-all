import Aside from "@/components/Aside";

const page = async ({ params }) => {
  const { service_id } = await params;
  const origin = process.env.__NEXT_PRIVATE_ORIGIN;
  const url = `${origin}/api/services/${service_id}`;
  const res = await fetch(url);
  const { brands, categories } = await res.json();

  return (
    <Aside brands={brands} categories={categories} service_id={service_id} />
  );
};

export default page;
