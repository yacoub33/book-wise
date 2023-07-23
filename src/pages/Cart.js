import React from "react";

const Cart = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto h-screen">
        <div className="pt-[100px] px-4">
          <h2 className="font-bold text-xl">Cart</h2>
        </div>
        <div className="p-2">
          <div className="grid grid-cols-3 bg-purple-600 rounded-sm p-2">
            <h2 className="text-white font-bold">Book</h2>
            <h2 className="text-white font-bold">Quantity</h2>
            <h2 className="text-white font-bold">Price</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
