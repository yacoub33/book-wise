import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const BookInfo = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  return (
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
              className="w-[300px] md:w-[350px]"
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
          <div className="py-2">£{book.originalPrice}</div>
          <div className="max-w-[350px] py-4">
            <h2 className=" text-xl font-semibold">Summary</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum malesuada laoreet purus ac elementum. Nullam eleifend
              urna sed quam eleifend, at consectetur turpis feugiat. Cras eu leo
              eget lacus tempus tincidunt. Praesent venenatis consectetur
              libero, ac eleifend purus iaculis non. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer sit amet est vitae quam sagittis varius a ac quam. Ut
              aliquet aliquam
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl px-2">Recommended Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4"></div>
      </div>
    </div>
  );
};

export default BookInfo;
