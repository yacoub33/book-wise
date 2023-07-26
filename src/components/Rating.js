import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Rating = ({ book }) => {
  return (
    <div className="flex text-yellow-500">
      {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
        <AiFillStar key={index} />
      ))}
      {!Number.isInteger(book.rating) && <BsStarHalf size={15} />}
    </div>
  );
};

export default Rating;
