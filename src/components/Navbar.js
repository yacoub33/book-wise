import React, { useState } from "react";
import { GiBookmarklet } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center h-full">
        <Link to="/">
          <h1 className="flex items-center text-3xl font-bold">
            <GiBookmarklet size={35} className="mr-2" /> Book
            <span className="text-purple-600">Wise</span>
          </h1>
        </Link>
        <ul className="hidden md:flex items-center">
          <Link to="/">
            <li className="mr-4 font-semibold hover:text-purple-600 hover:cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/books">
            <li className="mr-4 font-semibold hover:text-purple-600 hover:cursor-pointer">
              Books
            </li>
          </Link>
          <Link to="/cart">
            <BsFillCartFill
              size={20}
              className="mr-4  hover:text-purple-600 hover:cursor-pointer"
            />
          </Link>
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
        <Link to="/">
          <li
            onClick={handleClose}
            className="w-full mb-8 text-3xl uppercase font-bold "
          >
            Home
          </li>
        </Link>
        <Link to="/books">
          <li
            onClick={handleClose}
            className="w-full mb-8 text-3xl uppercase font-bold "
          >
            Books
          </li>
        </Link>
        <Link to="/cart">
          <li
            onClick={handleClose}
            className="w-full mb-8 text-3xl uppercase font-bold "
          >
            Cart
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
