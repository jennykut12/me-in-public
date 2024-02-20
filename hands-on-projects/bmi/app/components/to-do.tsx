import React from "react";
import { toDoData } from "./data/to-do-data";

type Props = {};

const Todo = (props: Props) => {
  return (
    <div className="tddobg lg:w-[90vw] lg:rounded-xl flex items-center  flex-col lg:flex-row gap-16 mt-20 mb-10 py-10 lg:p-10">
      {toDoData.map((item, i) => (
        <div key={i} className="w-full flex lg:flex-col px-6 gap-6 items-start">
          <div
            className=" w-14 h-14 lg:w-20 lg:h-20 p-4 rounded-full flex items-center"
            style={{ backgroundColor: item.color }}
          >
            {item.img}
          </div>
          <div className="flex flex-col gap-3 lg:gap-6">
            <p className=" text-xl lg:text-3xl font-semibold">{item.title}</p>
            <p className="">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
