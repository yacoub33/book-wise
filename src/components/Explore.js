import React from "react";

const Explore = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100">
      <div className="max-w-[1200px] mx-auto justify-center items-center mt-10">
        <h2 className="text-center font-bold text-xl pt-10 pb-5">
          Explore more <span className="text-purple-600">Books</span>
        </h2>
        <div className="flex justify-center pb-10">
          <button className="px-4 py-2 text-white bg-purple-600 rounded-md">
            Explore Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
