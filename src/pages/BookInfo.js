import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import Book from "../components/Book";

const BookInfo = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto pt-[100px]">
        <Link to="/books">
          <div className="flex px-2 items-center">
            <BiArrowBack size={35} className="mr-2" />
            <h2 className="font-bold text-xl">Books</h2>
          </div>
        </Link>
        <div className="flex flex-wrap my-8 justify-evenly">
          <div>
            <figure>
              <img
                className="w-[300px] md:w-[350px] rounded-sm"
                src={book.url}
                alt={book.title}
              />
            </figure>
          </div>
          <div>
            <h2 className="text-2xl font-bold py-4">{book.title}</h2>
            <div className="flex text-yellow-400 mt-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="py-2">
              {" "}
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
            <div className="max-w-[350px] py-4">
              <h2 className=" text-xl font-semibold">Summary</h2>
              <p>{book.summary}</p>
            </div>
            <div>
              <button className="px-4 py-2 text-white bg-purple-600 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100 p-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-bold text-2xl px-2">Recommended Books</h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {books
              .filter((book) => book.rating === 5 && +book.id !== +id)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
