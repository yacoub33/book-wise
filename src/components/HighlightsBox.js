import React from "react";

const HighlightsBox = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto text-center">
      <div className="border-2 border-purple-500 rounded-md">{icon}</div>
      <h2 className=" font-bold text-lg m-2">{title}</h2>
      <p className="max-w-[200px]">{description}</p>
    </div>
  );
};

export default HighlightsBox;
