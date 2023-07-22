import React from "react";
import { GiBookmarklet } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="w-full bg-[#2F2F2F] p-10">
      <div className="flex justify-center">
        <h1 className="flex items-center text-3xl font-bold text-white">
          <GiBookmarklet size={35} className="mr-2" /> BookWise
        </h1>
      </div>
      <div className="flex text-white p-10 justify-center">
        <a className="mr-5">Home</a>
        <a className="mr-5">About</a>
        <a className="mr-5">Books</a>
        <a className="">Cart</a>
      </div>
      <div className="flex justify-center pb-2">
        <p className="text-sm text-white/50">Copyright &copy; 2023 BookWise</p>
      </div>
    </div>
  );
};

export default Footer;
