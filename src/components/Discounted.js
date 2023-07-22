import React from "react";
import { books } from "../data";
import Book from "./Book";

const Discounted = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto justify-center items-center mt-5">
        <h2 className="text-center font-bold text-xl py-10">
          Discounted <span className="text-purple-600">Books</span>
        </h2>
        <div className="flex justify-center">
          <div className=" grid grid-cols-2 md:grid-cols-4">
            {books
              .filter((book) => book.salePrice > 0)
              .slice(0, 8)
              .map((book) => (
                <div>
                  <Book book={book} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounted;
