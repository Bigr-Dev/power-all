const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-gray-50 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <h2 className="text-yellow-600 text-2xl font-bold text-center mb-2 pt-2">
        {product.brand_name}
      </h2>
      <img
        //    src={gen.image}
        //    alt={gen.category}
        className="bg-white w-full h-48 object-cover"
      />
      <h3 className="text-gray-700 text-1xl font-bold text-center mb-1 pt-1">
        {product.name}
      </h3>
      <div className="p-2 ">
        <div className="overflow-x-auto">
          <p className="text-center">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
