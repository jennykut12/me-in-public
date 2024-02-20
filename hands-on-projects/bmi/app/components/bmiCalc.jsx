"use client";
import React, { useState } from "react";
import Image from "next/image";
import circle from "../../public/circle.svg";
import circle1 from "../../public/circle1.svg";
import BmiCalcMetrics from "../components/BmiCalcMetrics";
import BmiCalcImperial from "../components/BmiCalcImperial";

function BmiCalc() {
  const TAB1 = "Metric";
  const TAB2 = "Imperial";

  const data = [{ name: TAB1 }, { name: TAB2 }];
  const [tabs, setTabs] = useState(TAB1);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [weightLbs, setWeightLbs] = useState("");

  const { bmiResultMetrics, headerTextMetrics, healthyWeightRangeMetrics } =
    BmiCalcMetrics({ tabs, height, weight });
  const { bmiResultImperial, headerTextImperial, healthyWeightRangeImperial } =
    BmiCalcImperial({ tabs, heightFt, weightLbs });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "height") setHeight(value);
    if (name === "weight") setWeight(value);
    if (name === "heightFt") setHeightFt(value);
    if (name === "weightLbs") setWeightLbs(value);
  };

  return (
    <div className="mb-40">
      <div className="bmiCal flex justify-center lg:justify-start lg:px-32 pt-20 lg:pt-0 lg:items-center max-w-full h-[80vh] lg:max-w-[70vw] lg:h-[70vh] sm:rounded-b-[40px] lg:rounded-bl-[0] lg:rounded-br-[40px]">
        <div className="w-[80vw] text-center lg:text-left lg:w-[35vw] space-y-6 ">
          <h1 className="text-3xl lg:text-5xl font-semibold bg-transparent">
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
      <div className="w-full flex justify-center">
        <div className="shadow-xl w-[90vw] px-8 py-20 gap-7 flex flex-col lg:ml-[50vw] -mt-36 lg:-mt-96  lg:max-w-[45vw] h-auto bg-white rounded-lg z-10">
          <p>Enter your details below</p>
          <div role="tablist" className="flex flex-row justify-between w-full">
            {data.map((tab, index) => (
              <a
                className="w-96"
                key={index}
                onClick={() => {
                  setTabs(tab.name);
                }}
              >
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image
                    src={tabs === tab.name ? circle : circle1}
                    alt="circle"
                    width={20}
                    height={20}
                  />
                  {tab.name}
                </div>
              </a>
            ))}
          </div>
          <div className="flex flex-col w-full">
            {tabs === TAB1 && (
              <form className="flex flex-col gap-10 justify-center">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-600">Height</label>
                    <div className="Input w-full flex justify-between px-4 items-center border-2 focus-within:border-2 focus-within:border-blue border-gray-400 h-12 rounded-xl">
                      <input
                        type="text"
                        name="height"
                        pattern="[0-9]"
                        inputMode="numeric"
                        value={height}
                        onChange={handleChange}
                        className="Input w-full bg-transparent active:bg-transparent"
                      />
                      <p className="text-blue">cm</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-600">Weight</label>
                    <div className="Input w-full justify-between focus-within:border-2 focus-within:border-blue flex px-4 items-center border-2 border-gray-400 h-12 rounded-xl">
                      <input
                        type="text"
                        pattern="[0-9]"
                        inputMode="numeric"
                        name="weight"
                        value={weight}
                        onChange={handleChange}
                        className="Input w-full bg-transparent"
                      />
                      <p className="text-blue">kg</p>
                    </div>
                  </div>
                </div>
                <div className="buttonDiv flex justify-center gap-10 items-center py-10 px-10 bg-blue w-full h-28">
                  {bmiResultMetrics !== null && (
                    <p className="text-white text-base lg:text-xl font-medium text-start">
                      {bmiResultMetrics}
                    </p>
                  )}
                  <div>
                    <p className="text-white text-sm lg:text-base text-start">
                      {headerTextMetrics} {healthyWeightRangeMetrics}
                    </p>
                  </div>
                </div>
              </form>
            )}
            {tabs === TAB2 && (
              <form className="flex flex-col gap-10 justify-center">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-600">Height</label>
                    <div className="Input w-full flex justify-between px-4 items-center border-2 focus-within:border-2 focus-within:border-blue border-gray-400 h-12 rounded-xl">
                      <input
                        type="text"
                        name="heightFt"
                        pattern="[0-9]"
                        inputMode="numeric"
                        placeholder="0"
                        onChange={handleChange}
                        className="Input w-full bg-transparent"
                      />
                      <p className="text-blue">ft</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-600">Weight</label>
                    <div className="Input w-full justify-between focus-within:border-2 focus-within:border-blue flex px-4 items-center border-2 border-gray-400 h-12 rounded-xl">
                      <input
                        type="text"
                        name="weightLbs"
                        pattern="[0-9]"
                        inputMode="numeric"
                        placeholder="0"
                        onChange={handleChange}
                        className="Input w-full bg-transparent"
                      />
                      <p className="text-blue">lbs</p>
                    </div>
                  </div>
                </div>
                <div className="buttonDiv flex justify-center gap-10 items-center py-10 px-10 bg-blue w-full h-28">
                  {bmiResultImperial !== null && (
                    <p className="text-white text-base lg:text-xl font-medium text-start">
                      {bmiResultImperial}
                    </p>
                  )}
                  <div>
                    <p className="text-white text-sm lg:text-base text-start">
                      {headerTextImperial} {healthyWeightRangeImperial}
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BmiCalc;
