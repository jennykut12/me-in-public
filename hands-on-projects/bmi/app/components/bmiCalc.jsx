"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import circle from "../../public/circle.svg";
import circle1 from "../../public/circle1.svg";
import BmiCalcMetrics from '../components/BmiCalcMetrics'; 
import BmiCalcImperial from '../components/BmiCalcImperial'; 


// const TAB1 = "Metric";
// const TAB2 = "Imperial";

function BmiCalc() {
  const TAB1 = "Metric";
  const TAB2 = "Imperial";

  const data = [{ name: TAB1 }, { name: TAB2 }];
  const [tabs, setTabs] = useState(TAB1);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  // const [bmiResult, setBmiResult] = useState(null);
  // const [headerText, setHeaderText] = useState("Hello, Welcome!");
  // const [healthyWeightRange, setHealthyWeightRange] = useState(null);

     const { bmiResultMetrics, headerTextMetrics, healthyWeightRangeMetrics } = BmiCalcMetrics({ tabs, height, weight });
     const { bmiResultImperial, headerTextImperial, healthyWeightRangeImperial } = BmiCalcImperial({ tabs, heightFt, weightLbs });


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "height") setHeight(value);
    if (name === "weight") setWeight(value);
    if (name === "heightFt") setHeightFt(value);
    if (name === "weightLbs") setWeightLbs(value);
  };

  // const data = [{ name: TAB1 }, { name: TAB2 }];
  // const [tabs, setTabs] = useState(TAB1);
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");

  // const { bmiResult, headerText, healthyWeightRange } = BmiCalcMetrics({ tabs, height, weight });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "height") setHeight(value);
  //   if (name === "weight") setWeight(value);
  // };

  // const data = [{ name: "Metric" }, { name: "Imperial" }];
  // const [tabs, setTabs] = useState(TAB1);
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [bmiResult, setBmiResult] = useState(null);
  // const [headerText, setHeaderText] = useState(null);
  // const [healthyWeightRange, setHealthyWeightRange] = useState(null);

  // const validateNumber = (value) => {
  //   value = value.trim();
  //   const regex = /^\d+\.?\d*$/u;
  //   if (regex.test(value)) return parseFloat(value);
  //   return "";
  // };

  // const calculateBMI = () => {
  //   const validatedHeight = validateNumber(height);
  //   const validatedWeight = validateNumber(weight);

  //   if (!validatedHeight || !validatedWeight) {
  //     setBmiResult("Hello, Welcome!");
  //     setHeaderText(
  //       "Enter your height and weight and you will see your BMI result here"
  //     );
  //     setHealthyWeightRange(null);
  //     return;
  //   }

  //   const heightInMeters =
  //     tabs === TAB1 ? validatedHeight / 100 : validatedHeight * 0.0254;
  //   const weightInKg =
  //     tabs === TAB1 ? validatedWeight : validatedWeight * 0.453592;


  //   const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
  //   setBmiResult(`Your BMI is... (${bmi})`);

  //   const weightStatus = () => {
  //     if (bmi < 18.5) return "Underweight";
  //     else if (bmi < 25) return "Healthy Weight";
  //     else if (bmi < 30) return "Overweight";
  //     else return "Obesity";
  //   };
  //   setHeaderText(`Your BMI suggests you are ${weightStatus()}.`);

  //   const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  //   const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
  //   setHealthyWeightRange(`Your ideal weight is between ${ minWeight} - ${maxWeight} kg.`);
  // };

  // useEffect(() => {
  //   calculateBMI();
  // }, [height, weight]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "height") setHeight(value);
  //   if (name === "weight") setWeight(value);
  // };

  return (

    <div className="mb-40">
      <div className="bmiCal flex justify-center lg:justify-start lg:px-32 pt-20 lg:pt-0 lg:items-center max-w-full h-[80vh] lg:max-w-[70vw] lg:h-[70vh] sm:rounded-b-[40px] lg:rounded-bl-[0] lg:rounded-br-[40px]">
        <div className="w-[80vw] text-center lg:text-left lg:w-[35vw] space-y-6 ">
          <h1 className="text-5xl font-semibold bg-transparent">
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
        <div className="shadow-xl w-[90vw] p-8 gap-7 flex flex-col lg:ml-[50vw] -mt-32 lg:-mt-96 lg:max-w-[45vw] h-auto bg-white rounded-lg z-10">
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
                <div className="flex items-center gap-4">
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
                        className="Input w-full bg-transparent"
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
                <div className="buttonDiv flex justify-center gap-10 items-center px-10 bg-blue w-full h-28">
                  {bmiResultMetrics !== null && (
                    <p className="text-white text-xl font-medium text-start">
                      {bmiResultMetrics}
                    </p>
                  )}
                  <div>
                    <p className="text-white text-start">
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
                <div className="buttonDiv flex justify-center gap-10 items-center px-10 bg-blue w-full h-28">
                  {bmiResultImperial !== null && (
                    <p className="text-white text-xl font-medium text-start">
                      {bmiResultImperial}
                    </p>
                  )}
                  <div>
                    <p className="text-white text-start">
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

    // <div className=" mb-40">
    //   <div className="bmiCal flex justify-center lg:justify-start lg:px-32 pt-20 lg:pt-0 lg:items-center max-w-full h-[80vh] lg:max-w-[70vw] lg:h-[70vh] sm:rounded-b-[40px] lg:rounded-bl-[0] lg:rounded-br-[40px]">
    //     <div className=" w-[80vw] text-center lg:text-left lg:w-[35vw] space-y-6 ">
    //       <h1 className=" text-5xl font-semibold bg-transparent">
    //         Body Mass
    //         <br /> Index Calculator
    //       </h1>
    //       <p className="bg-transparent">
    //         Better understand your weight in relation to your height using our
    //         body mass index calculator. While BMI is not the sole determinant of
    //         a healthy weight, it offers a valuable starting point to evaluate
    //         your overall health and well-being{" "}
    //       </p>
    //     </div>
    //   </div>
    //   <div className=" w-full flex justify-center ">
    //     <div className="  shadow-xl w-[90vw] p-8 gap-7 flex flex-col lg:ml-[50vw] -mt-32 lg:-mt-96 lg:max-w-[45vw] h-auto bg-white rounded-lg  z-10">
    //       <p>Enter your details below</p>
    //       <div role="tablist" className="flex flex-row justify-between w-full">
    //         {data.map((tab, index) => (
    //           <a
    //             className=" w-96"
    //             key={index}
    //             onClick={() => {
    //               setTabs(tab.name);
    //             }}
    //           >
    //             {tabs == tab.name ? (
    //               <div className=" flex items-center gap-4">
    //                 <Image src={circle} alt="circle" width={20} height={20} />
    //                 {tab.name}
    //               </div>
    //             ) : (
    //               <div className=" flex items-center gap-4">
    //                 <Image src={circle1} alt="circle" width={20} height={20} />
    //                 {tab.name}
    //               </div>
    //             )}
    //           </a>
    //         ))}
    //       </div>
    //       <div className="flex flex-col w-full">
    //         {tabs === TAB1 && (
    //           <form className="flex flex-col gap-10 justify-center  ">
    //             <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between w-full">
    //               <div className="flex flex-col gap-2">
    //                 <label className="text-gray-600">Height</label>
    //                 <div className="Input  w-full flex justify-between px-4 items-center border-2 focus-within:border-2 focus-within:border-blue border-gray-400  h-12 rounded-xl ">
    //                   <input
    //                     type="text"
    //                     name="height"
    //                     pattern="[0-9]"
    //                     inputMode="numeric"
    //                     value={height}
    //                     onChange={handleChange}
    //                     className="Input w-full bg-transparent "
    //                   />
    //                   <p className=" text-blue">cm</p>
    //                 </div>
    //               </div>
    //               <div className="flex flex-col gap-2">
    //                 <label className="text-gray-600">Weight</label>
    //                 <div className="Input w-full justify-between focus-within:border-2 focus-within:border-blue flex px-4 items-center border-2 border-gray-400  h-12 rounded-xl  ">
    //                   <input
    //                     type="text"
    //                     pattern="[0-9]"
    //                     inputMode="numeric"
    //                     name="weight"
    //                     value={weight}
    //                     onChange={handleChange}
    //                     className="Input w-full bg-transparent"
    //                   />

    //                   <p className=" text-blue">kg</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="buttonDiv flex justify-center gap-10 items-center px-10 bg-blue w-full h-28 ">
    //               {bmiResult !== null && (
    //                 <p className=" text-white text-xl font-medium text-start">
    //                    {bmiResult}
    //                 </p>
    //               )}
    //               <div>
    //               <p className=" text-white text-start">{headerText} {healthyWeightRange} </p>
    //               </div>
    //             </div>
    //           </form>
    //         )}
    //         {tabs === TAB2 && (
    //           <form className="flex flex-col gap-10 justify-center  ">
    //             <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between w-full">
    //               <div className="flex flex-col gap-2">
    //                 <label className="text-gray-600">Height</label>
    //                 <div className="Input  w-full flex justify-between px-4 items-center border-2 focus-within:border-2 focus-within:border-blue border-gray-400  h-12 rounded-xl ">
    //                   <input
    //                     type="text"
    //                     pattern="[0-9]"
    //                     inputMode="numeric"
    //                     placeholder="0"
    //                     className="Input w-full bg-transparent "
    //                   />
    //                   <p className=" text-blue">cm</p>
    //                 </div>
    //               </div>
    //               <div className="flex flex-col gap-2">
    //                 <label className="text-gray-600">Weight</label>
    //                 <div className="Input w-full justify-between focus-within:border-2 focus-within:border-blue flex px-4 items-center border-2 border-gray-400  h-12 rounded-xl  ">
    //                   <input
    //                     type="text"
    //                     pattern="[0-9]"
    //                     inputMode="numeric"
    //                     placeholder="0"
    //                     className=" Input w-full bg-transparent "
    //                   />
    //                   <p className=" text-blue">lbs</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="buttonDiv flex flex-col justify-center px-10 bg-blue w-full h-28 ">
    //               {bmiResult !== null && (
    //                 <p className=" text-white text-start">
    //                   Your BMI: {bmiResult}
    //                 </p>
    //               )}
    //               <p className=" text-white text-start">Status: {headerText}</p>
    //             </div>
    //           </form>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="mb-40">
    //   <div className="flex flex-col w-full">
    //     {tabs === TAB1 && (
    // <form className="flex flex-col gap-10 justify-center">
    //   <div className="flex flex-col gap-2">
    //     <label className="text-gray-600">Height (cm)</label>
    //     <input
    //       type="number"
    //       name="height"
    //       value={height}
    //       onChange={handleChange}
    //       className="Input w-full bg-transparent border-2 focus-within:border-2 focus-within:border-blue border-gray-400 h-12 rounded-xl px-4"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <label className="text-gray-600">Weight (kg)</label>
    //     <input
    //       type="number"
    //       name="weight"
    //       value={weight}
    //       onChange={handleChange}
    //       className="Input w-full bg-transparent border-2 focus-within:border-2 focus-within:border-blue border-gray-400 h-12 rounded-xl px-4"
    //     />
    //   </div>
    // </form>
    // )}
    // {tabs === TAB2 && (
    // <form className="flex flex-col gap-10 justify-center">
    //   <div className="flex flex-col gap-2">
    //     <label className="text-gray-600">Height (inches)</label>
    //     <input
    //       type="number"
    //       name="height"
    //       value={height}
    //       onChange={handleChange}
    //       className="Input w-full bg-transparent border-2 focus-within:border-2 focus-within:border-blue border-gray-400 h-12 rounded-xl px-4"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <label className="text-gray-600">Weight (lbs)</label>
    //     <input
    //       type="number"
    //       name="weight"
    //       value={weight}
    //       onChange={handleChange}
    //       className="Input w-full bg-transparent border-2 focus-within:border-2 focus-within:border-blue border-gray-400 h-12 rounded-xl px-4"
    //     />
    //   </div>
    // </form>
    // )}
    // </div>
    // <div className="flex flex-col items-center mt-6">
    // {/* {bmiResult !== null && (
    //   <p className="text-lg font-semibold mb-2">Your BMI: {bmiResult}</p>
    // )}
    // <p className="text-lg font-semibold">Status: {headerText}</p> */}
    // {/* </div> */}
    // </div>
  );
}

export default BmiCalc;
