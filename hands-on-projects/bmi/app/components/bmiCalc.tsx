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
  const [text, setText] = useState('Enter your height and weight and you will see your BMI result here')
  const [headerText, setHeaderText] = useState('Hello, Welcome!')

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
        <div className="  shadow-xl w-[90vw] p-8 gap-7 flex flex-col lg:ml-[50vw] -mt-32 lg:-mt-96 lg:max-w-[45vw] h-auto bg-white rounded-lg absolute z-10">
          <p>Enter your details below</p>
          <div role="tablist" className="flex flex-row justify-between w-full">
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
              <form className="flex flex-col gap-10 justify-center  ">
                <div className=" flex lg:gap-6 gap-10 justify-between">
                <div>
                <label className="text-gray-600">Height</label>
                <div className="Input cursor-pointer flex px-4 items-center border-2 focus-within:border-2 focus-within:border-blue border-gray-400 max-w-[35vw] h-12 rounded-xl  lg:max-w-60">
                  <input type="text" placeholder="0" className="Input bg-transparent max-w-[25vw]"/>
                  <p className=" text-blue">cm</p>
                </div>
                </div>
                <div>
                <label className="text-gray-600">Weight</label>
                <div className="Input focus-within:border-2 focus-within:border-blue flex px-4 items-center border-2 border-gray-400 max-w-[35vw] h-12 rounded-xl  lg:max-w-60">
                  <input type="text" placeholder="0" className=" Input bg-transparent max-w-[25vw]"/>
                  <p className=" text-blue">kg</p>
                </div>
                </div>
                </div>
                <div className="buttonDiv flex px-10 bg-blue w-full h-28 ">
                  <button className="   ">
                    <p className=" text-white text-3xl text-start">{headerText}</p>
                    <p className=" text-white text-start">{text}</p>
                  </button>
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
