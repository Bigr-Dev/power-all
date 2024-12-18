import SkeletonCard from "@/components/SkeletonCard";

const loading = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className=" md:col-span-3 h-full overflow-y-auto  p-4">
      <h1 className="text-3xl font-bold text-center ">... loading</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6 mt-6">
        {skeletons.map((product, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50">
          Previous
        </button>
        <button className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default loading;
