import Image from "next/image";
import React from "react";

type Props = {};

const ResultMeans = (props: Props) => {
  return (
    <div className="w-full mb-10 items-center gap-8 flex flex-col lg:flex-row ">
      <div className=" bmiCal flex justify-center items-center lg:rounded-r-xl w-full  h-auto lg:h-[70vh] ">
        <div className=" max-w-[50%] lg:max-w-[68%] h-auto">
          <Image
            src={require("../../public/Learning-rafiki.png")}
            alt="img"
            width={80}
        height={80}
            layout="responsive"
            className=" "
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 w-[84vw] lg:pr-10">
      <p className=" text-3xl lg:text-5xl font-semibold">What your BMI result means</p>
      <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
      </div>
    </div>
  );
};

export default ResultMeans;
