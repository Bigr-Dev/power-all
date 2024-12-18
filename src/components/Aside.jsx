"use client";
// react
import { useEffect, useState } from "react";

// next
import { useRouter } from "next/navigation";

const Aside = ({ brands, categories, service_id }) => {
  const router = useRouter();

  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (selectedBrand !== "All" && selectedCategory !== "All") {
      router.push(
        `/services/${service_id}/search/brand/${selectedBrand}/category/${selectedCategory}`
      );
    } else if (selectedBrand !== "All" && selectedCategory === "All") {
      router.push(`/services/${service_id}/search/brand/${selectedBrand}`);
    } else if (selectedBrand === "All" && selectedCategory !== "All") {
      router.push(
        `/services/${service_id}/search/category/${selectedCategory}`
      );
    } else if (selectedBrand === "All") {
      router.push(`/services/${service_id}`);
    }
  }, [selectedBrand, selectedCategory, router]);

  return (
    <div>
      <div className="sticky top-0 min-h-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center ">Filter</h1>
        {/* <div className="w-full mt-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="search"
          >
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by model, capacity, output, or range"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div> */}

        {brands[0] && (
          <div className="w-full">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="make-filter"
            >
              Filter by Brand
            </label>
            <div className="relative inline-block w-full">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option id="all" value="All">
                  All
                </option>
                {brands.map((brand, index) => (
                  <option
                    key={index}
                    id={brand.brand_id}
                    value={brand.brand_id}
                  >
                    {brand.brand_name}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {categories[0] && (
          <div className="w-full">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="make-filter"
            >
              Filter by Category
            </label>
            <div className="relative inline-block w-full">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                {brands[1] && <option value="All">All</option>}
                {categories.map((category, index) => (
                  <option key={index} value={category.category_id}>
                    {category.category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* {selectedBrand !== "All" || selectedCategory !== "All" ? (
          <Link
            href={href()}
            className={`${
              selectedBrand !== "All" || selectedCategory !== "All"
                ? `bg-yellow-500 hover:bg-yellow-600 text-black`
                : `bg-gray-300 text-white`
            } px-8 py-3 rounded-md font-semibold transition text-center`}
          >
            Search
          </Link>
        ) : (
          <button
            className={`${
              selectedBrand !== "All" || selectedCategory !== "All"
                ? `bg-yellow-500 hover:bg-yellow-600 text-black`
                : `bg-gray-300 text-white`
            } px-8 py-3 rounded-md font-semibold transition text-center`}
          >
            Search
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Aside;
