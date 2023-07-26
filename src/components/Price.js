import React from "react";

const Price = ({ book }) => {
  return (
    <div>
      {book.salePrice ? (
        <>
          <span className="mr-2">£{book.salePrice.toFixed(2)}</span>
          <span className="text-gray-400 line-through text-sm">
            £{book.originalPrice.toFixed(2)}
          </span>
        </>
      ) : (
        <span className="">£{book.originalPrice.toFixed(2)}</span>
      )}
    </div>
  );
};

export default Price;
