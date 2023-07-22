import React from "react";
import Book from "./Book";
import { books } from "../data";

const Featured = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100 pb-5">
      <div className="max-w-[1200px] mx-auto justify-center items-center mt-10">
        <h2 className="text-center font-bold text-xl py-10">
          Featured <span className="text-purple-600">Books</span>
        </h2>
        <div className="flex flex-wrap justify-center">
          {books
            .filter((book) => book.rating === 5)
            .slice(0, 4)
            .map((book) => (
              <div>
                <Book book={book} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
