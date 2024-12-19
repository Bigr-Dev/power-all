// // components
// import ProductSection from "@/components/ProductSection";

// export async function generateStaticParams() {
//   const origin = process.env.API_ASIDE;

//   // Fetch all services
//   const servicesRes = await fetch(`${origin}all`);
//   const { services } = await servicesRes.json();

//   // Fetch all brands and categories
//   const brandsRes = await fetch(`${origin}brands`);
//   const { brands } = await brandsRes.json();

//   const categoriesRes = await fetch(`${origin}categories`);
//   const { categories } = await categoriesRes.json();

//   const params = [];

//   // Generate params for all combinations
//   for (const service of [...services, { id: "all" }]) {
//     // Service only
//     params.push({ service_id: service.id.toString(), products_by: [""] });

//     // Service + Brand
//     for (const brand of brands) {
//       params.push({
//         service_id: service.id.toString(),
//         products_by: ["brand", brand.id.toString()],
//       });
//     }

//     // Service + Category
//     for (const category of categories) {
//       params.push({
//         service_id: service.id.toString(),
//         products_by: ["category", category.id.toString()],
//       });
//     }

//     // Service + Brand + Category
//     for (const brand of brands) {
//       for (const category of categories) {
//         params.push({
//           service_id: service.id.toString(),
//           products_by: [
//             "brand",
//             brand.id.toString(),
//             "category",
//             category.id.toString(),
//           ],
//         });
//       }
//     }
//   }

//   return params;
// }

// const page = async ({ params }) => {
//   const { products_by, service_id } = await params;

//   const origin = process.env.API_ASIDE;
//   let url = origin;

//   if (products_by[3]) {
//     const brand_id = products_by[1];
//     const category_id = products_by[3];
//     url = `${origin}${service_id}/search/brand/${brand_id}/category/${category_id}`;
//   } else if (products_by[0] === "brand") {
//     const brand_id = products_by[1];
//     url = `${origin}${service_id}/search/brand/${brand_id}`;
//   } else if (products_by[0] === "category") {
//     const category_id = products_by[1];
//     if (service_id !== "all") {
//       url = `${origin}${service_id}/search/category/${category_id}`;
//     } else {
//       url = `${origin}${service_id}/search/category/${category_id}`;
//     }
//   }

//   const res = await fetch(url);
//   const { services, products } = await res.json();

//   return (
//     <div className=" md:col-span-3 h-full overflow-y-auto  p-4">
//       <h1 className="text-3xl font-bold text-center ">
//         {service_id == "all"
//           ? "All Products"
//           : services[service_id - 1].service_name}
//       </h1>
//       <ProductSection products={products} />
//     </div>
//   );
// };

// export default page;

import ProductSection from "@/components/ProductSection";

export async function generateStaticParams() {
  const origin = process.env.API_ASIDE;

  // Fetch all services
  const servicesRes = await fetch(`${origin}all`);
  const { services } = await servicesRes.json();

  // Fetch all brands and categories
  const brandsRes = await fetch(`${origin}brands`);
  const { brands } = await brandsRes.json();

  const categoriesRes = await fetch(`${origin}categories`);
  const { categories } = await categoriesRes.json();

  const params = [];

  for (const service of [...services, { id: "all" }]) {
    // Service + Brand
    for (const brand of brands) {
      params.push({
        service_id: service.id.toString(),
        products_by: ["brand", brand.id.toString()],
      });
    }

    // Service + Category
    for (const category of categories) {
      params.push({
        service_id: service.id.toString(),
        products_by: ["category", category.id.toString()],
      });
    }

    // Service + Brand + Category
    for (const brand of brands) {
      for (const category of categories) {
        params.push({
          service_id: service.id.toString(),
          products_by: [
            "brand",
            brand.id.toString(),
            "category",
            category.id.toString(),
          ],
        });
      }
    }
  }

  return params;
}

export const metadata = {
  title: "filtered products",
};

async function getProductData(service_id, products_by) {
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
    url = `${origin}${service_id}/search/category/${category_id}`;
  }

  const res = await fetch(url, { next: { revalidate: 3600 } });
  return res.json();
}

export default async function Page({ params }) {
  const { products_by, service_id } = await params;
  const { services, products } = await getProductData(service_id, products_by);

  return (
    <div className="md:col-span-3 h-full overflow-y-auto p-4">
      <h1 className="text-3xl font-bold text-center">
        {service_id === "all"
          ? "All Products"
          : services[parseInt(service_id) - 1]?.service_name}
      </h1>
      <ProductSection products={products} />
    </div>
  );
}
