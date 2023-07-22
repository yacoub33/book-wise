import React from "react";
import heroimg from "../assets/Undraw_Books.svg";
import wave from "../assets/wave.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
  return (
    <div
      id="highlights"
      className="w-full h-[100vh] bg-gradient-to-r from-purple-100 via-gray-200 to-purple-200 flex justify-center items-center"
    >
      <div className="max-w-[1200px]">
        <h1 className="font-bold text-3xl text-center mb-5 mt-20">
          UK's most awarded online library platform
        </h1>
        <p className="font-bold text-2xl text-center mb-5">
          Find your dream book with Book
          <span className="text-purple-600">Wise</span>
        </p>
        <div className="flex justify-center">
          <Link to="/books">
            <button className="px-4 py-2 text-white bg-purple-600 rounded-md">
              Browse Books
            </button>
          </Link>
        </div>
        <img src={heroimg} className="mx-auto h-[250px] m-10" alt="/" />
      </div>
    </div>
  );
};

export default Hero;
