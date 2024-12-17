import React from "react";

const layout = ({ children, search, products, ...props }) => {
  // console.log("props", props);
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 ">
      <div className="md:col-span-1  bg-gray-100 p-4  shadow-md">{search}</div>
      <div className="md:col-span-3 xl:col-span-4 overflow-y-auto">
        {products}
      </div>
    </div>
  );
};

export default layout;
