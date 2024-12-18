const loading = () => {
  return (
    <div>
      <div className="sticky top-0 min-h-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center ">Filter</h1>
        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-500 mb-1"
            htmlFor="make-filter"
          >
            ... Fetching Brand
          </label>
          <div className="relative inline-block w-full">
            <select className="block appearance-none w-full border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-200 animate-pulse"></select>

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
        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-500 mb-1"
            htmlFor="make-filter"
          >
            ... Fetching Categories
          </label>
          <div className="relative inline-block w-full">
            <select className="block appearance-none w-full border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-200 animate-pulse"></select>

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
      </div>
    </div>
  );
};

export default loading;
