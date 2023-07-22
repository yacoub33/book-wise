import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
        <div className="flex text-yellow-500">
          {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
            <AiFillStar key={index} />
          ))}
          {!Number.isInteger(book.rating) && <BsStarHalf />}
        </div>
        <div>
          {book.salePrice ? (
            <>
              <span className="mr-2">£{book.salePrice.toFixed(2)}</span>
              <span className="text-gray-400 line-through text-sm">
                £{book.originalPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="">£{book.originalPrice}.00</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Book;
