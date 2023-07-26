import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({ book }) => {
  return (
    <div className="px-10 py-4 ">
      <Link to={`/books/${book.id}`}>
        <figure>
          <img
            className="h-[150px] md:h-[250px] rounded-sm"
            src={book.url}
            alt={book.title}
          />
        </figure>
        <div className="max-w-[150px]">{book.title}</div>
        <Rating book={book} />
        <div>
          <Price book={book} />
        </div>
      </Link>
    </div>
  );
};

export default Book;
