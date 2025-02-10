import React from "react";

const Contributors = ({ imgurl, name, position }) => {
  return (
    <div className="justify-center text-center">
        <img
            src={imgurl}
            alt={name}
            className="w-[5vw] h-[5vw] rounded-full mx-auto"/>
      <p className="text-[1vw] font-semibold">{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default Contributors;
