"use client";
import React, { useState } from "react";
import Image from "next/image";
import circle from "../../public/circle.svg";
import circle1 from "../../public/circle1.svg";

const TAB1 = "Metric";
const TAB2 = "Imperial";

function BmiCalc() {
  const data = [{ name: "Metric" }, { name: "Imperial" }];
  const [tabs, setTabs] = useState(TAB1);
  const [selected, setSelected] = useState(false);
  return (
    <div className=" mb-40">
      <div className="bmiCal flex justify-center lg:justify-start lg:px-32 pt-20 lg:pt-0 lg:items-center max-w-full h-[80vh] lg:max-w-[70vw] lg:h-[70vh] sm:rounded-b-[40px] lg:rounded-bl-[0] lg:rounded-br-[40px]">
        <div className=" w-[80vw] text-center lg:text-left lg:w-[35vw] space-y-6 ">
          <h1 className=" text-5xl font-semibold bg-transparent">
            Body Mass
            <br /> Index Calculator
          </h1>
          <p className="bg-transparent">
            Better understand your weight in relation to your height using our
            body mass index calculator. While BMI is not the sole determinant of
            a healthy weight, it offers a valuable starting point to evaluate
            your overall health and well-being{" "}
          </p>
        </div>
      </div>
      <div className=" w-full flex justify-center ">
        <div className="  shadow-xl w-[90vw] p-8 gap-7 flex flex-col lg:ml-[50vw] -mt-32 lg:-mt-96 lg:w-[40vw] h-64 bg-white rounded-lg absolute z-10">
          <p>Enter your details below</p>
          <div role="tablist" className="flex flex-row space-x-12 w-full">
            {data.map((tab, index) => (
              <a
                className=" w-96"
                key={index}
                onClick={() => {
                  setTabs(tab.name);
                }}
              >
                {tabs == tab.name ? (
                  <div className=" flex items-center gap-4">
                    <Image src={circle} alt="circle" width={20} height={20} />
                    {tab.name}
                  </div>
                ) : (
                  <div className=" flex items-center gap-4">
                    <Image src={circle1} alt="circle" width={20} height={20} />
                    {tab.name}
                  </div>
                )}
              </a>
            ))}
          </div>
          <div className="flex flex-col w-full">
            {tabs === TAB1 && (
              <form className=" flex items-center justify-between">
                <div>
                <label className="text-gray-600">Height</label>
                <div className=" flex items-center border-2 border-gray-400 w-[35vw] h-12 rounded-xl  lg:w-auto">
                  <input className=" max-w-40"/>
                  <p>cm</p>
                </div>
                </div>
                <div>
                <label className="text-gray-600">Weight</label>
                <div className=" flex items-center border-2 border-gray-400 w-[35vw] h-12 rounded-xl  lg:w-auto">
                  <input className="max-w-40"/>
                  <p>kg</p>
                </div>
                </div>
              </form>
            )}
            {tabs === TAB2 && <div>
              <div>
                <label className="text-gray-600">Height</label>
                <div className=" flex items-center border-2 border-gray-400 w-[35vw] h-12 rounded-xl  lg:w-auto">
                  <input className=""/>
                  <p>cm</p>
                </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BmiCalc;
