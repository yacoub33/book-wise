import React, { useState } from "react";
import Book from "../components/Book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }

    if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }

    if (filter === "RATING") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div className=" bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center pt-[100px] px-4">
          <h2 className="font-bold text-xl">All Books</h2>
          <select
            id="filter"
            defaultValue="DEFAULT"
            onChange={(event) => filterBooks(event.target.value)}
          >
            <option value="DEFAULT" selected disabled>
              Sort
            </option>
            <option value="LOW_TO_HIGH" selected>
              Price, Low to High
            </option>
            <option value="HIGH_TO_LOW" selected>
              Price, High to Low
            </option>
            <option value="RATING" selected>
              Rating
            </option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
