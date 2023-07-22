import React, { useState } from "react";
import { GiBookmarklet } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center h-full">
        <h1 className="flex items-center text-3xl font-bold">
          <GiBookmarklet size={35} className="mr-2" /> Book
          <span className="text-purple-600">Wise</span>
        </h1>

        <ul className="hidden md:flex items-center">
          <li className="mr-4 font-semibold hover:text-purple-600 hover:cursor-pointer">
            Home
          </li>
          <li className="mr-4 font-semibold hover:text-purple-600 hover:cursor-pointer">
            Books
          </li>
          <BsFillCartFill
            size={20}
            className="mr-4  hover:text-purple-600 hover:cursor-pointer"
          />
        </ul>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5" size={30} />
          ) : (
            <AiOutlineClose className="w-5" size={30} />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-gradient-to-t from-purple-100 to-gray-200 w-full border-t-2 h-screen px-8 py-8 text-center"
        }
      >
        <li className="w-full mb-8 text-3xl uppercase font-bold ">Home</li>
        <li className="w-full mb-8 text-3xl uppercase font-bold ">Books</li>
        <li className="w-full mb-8 text-3xl uppercase font-bold ">Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
