// components
import ProductSection from "@/components/ProductSection";

const page = async ({ params }) => {
  const { products_by, service_id } = await params;

  const origin = process.env.API_ASIDE;
  let url = origin;

  if (products_by[3]) {
    const brand_id = products_by[1];
    const category_id = products_by[3];
    url = `${origin}${service_id}/search/brand/${brand_id}/category/${category_id}`;
  } else if (products_by[0] === "brand") {
    const brand_id = products_by[1];
    url = `${origin}${service_id}/search/brand/${brand_id}`;
  } else if (products_by[0] === "category") {
    const category_id = products_by[1];
    if (service_id !== "all") {
      url = `${origin}${service_id}/search/category/${category_id}`;
    } else {
      url = `${origin}${service_id}/search/category/${category_id}`;
    }
  }

  const res = await fetch(url);
  const { services, products } = await res.json();

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
