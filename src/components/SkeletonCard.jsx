const SkeletonCard = () => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105  animate-pulse">
      <h2 className="text-yellow-600 text-2xl font-bold text-center mb-2 pt-2">
        ...
      </h2>
      <div className="bg-white w-full h-48 object-cover" />
      <h3 className="text-gray-700 text-1xl font-bold text-center mb-1 pt-1">
        ...
      </h3>
      <div className="p-2 ">
        <div className="overflow-x-auto">
          <p className="text-center">...</p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
