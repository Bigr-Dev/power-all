"use client";

import { useEffect } from "react";

const error = ({ error }) => {
  useEffect(() => {
    console.log("error", error.Error);
  }, []);
  return (
    <div className=" md:col-span-3 h-full overflow-y-auto  p-4">
      <h1 className="text-3xl font-bold text-center ">
        ...This page cant be accessed like this
      </h1>
    </div>
  );
};

export default error;
