import React from "react";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { AiFillTags } from "react-icons/ai";
import HighlightsBox from "./HighlightsBox";

const Highlights = () => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto justify-center items-center mt-10">
      <h2 className="text-center font-bold text-xl mb-10">
        Why choose Book<span className="text-purple-600">Wise</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <HighlightsBox
          description={"Get access to the book you purchased online instantly."}
          title={"Easy and Quick"}
          icon={
            <MdOutlineElectricBolt size={40} className="m-5 text-purple-600" />
          }
        />

        <HighlightsBox
          description={"BookWise has books in all your favorite categories."}
          title={"10,000+ Books"}
          icon={<GiBookshelf size={40} className="m-5 text-purple-600" />}
        />

        <HighlightsBox
          description={"Get your hands on popular books for as little as £10."}
          title={"Affordable"}
          icon={<AiFillTags size={40} className="m-5 text-purple-600" />}
        />
      </div>
    </div>
  );
};

export default Highlights;
