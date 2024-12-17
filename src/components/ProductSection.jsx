"use client";
import placeholder from "@/assets/small_business2.jpg";

import { useState } from "react";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import Image from "next/image";

const ProductSection = ({ products }) => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // State for modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 9;

  // Calculate products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6 mt-6">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => openModal(product)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(products.length / productsPerPage)
          }
          className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <Modal isOpen={!!selectedProduct} onClose={closeModal}>
        {selectedProduct && (
          <div className="text-center">
            <h2 className="text-yellow-600 text-3xl font-bold mb-4">
              {selectedProduct.brand_name}
            </h2>
            <Image
              src={selectedProduct.image || placeholder}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-gray-800 text-2xl font-semibold mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            {/* Add more product details here as needed */}
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProductSection;
