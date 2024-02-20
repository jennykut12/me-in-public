import React from "react";

const Card = ({ img, title, body }) => {
  return (
    <div className=" flex flex-col py-8 px-8 gap-4 w-full rounded-xl lg:w-[25vw] bg-white shadow-xl">
      <div className=" flex items-center gap-4">
        <div className="">{img}</div>
        <div className="">
          <p className=" text-xl font-semibold">{title}</p>
        </div>
      </div>
      <div className="">
        <p className="">{body}</p>
      </div>
    </div>
  );
};

export default Card;
