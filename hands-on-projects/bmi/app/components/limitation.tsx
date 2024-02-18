import React from "react";
import data from "../components/data/limitation-data";
import Card from "./card";
import { BsGenderAmbiguous } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LuBaby } from "react-icons/lu";
import { IoBodyOutline } from "react-icons/io5";
import { GiMuscleUp } from "react-icons/gi";
import { MdPolymer } from "react-icons/md";


type Props = {};

const Limitation = (props: Props) => {
  return (
    // <div className='flex float-left w-full  gap-10'>

    <div className="flex lg:pr-10 lg:pl-20 py-20 ">
      <div className="flex flex-wrap gap-10 px-10">
        <div className=" flex flex-col gap-6 mx-10 pr-10 lg:w-[40vw] float-left">
          <p className=" text-5xl font-semibold">Limitations of BMI</p>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <Card
          title="Gender"
          body='The development and body fat composition of girls and boys vary with age. Consequently, a childs age and gender are considered when evaluating their BMI.'
          img={<BsGenderAmbiguous className="w-[5vw] h-[5vh] text-[#FF1F7D]" />}
        />
        <div className="flex flex-col lg:flex-row lg:pl-40 gap-10">        
        <Card
          title="Age"
          body='In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.'
          img={<LiaBirthdayCakeSolid className="w-[5vw] h-[5vh] text-[#F5BF3D]" />}
        />
        <Card
          title="Muscle"
          body='BMI may misclassify muscular individuals as overweight or obese, as it doesnt differentiate muscle from fat.'
          img={<GiMuscleUp className=" w-[5vw] h-[5vh] text-[#6160DC]"/>}
        />
        </div>
        <div className=" flex flex-col lg:flex-row gap-10">
        <Card
          title="Pregnancy"
          body='Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.'
          img={<LuBaby className=" w-[5vw] h-[5vh] text-[#00AC56]"/>}
        />
        <Card
          title="Race"
          body='Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.'
          img={<IoBodyOutline className=" w-[5vw] h-[5vh] text-[#54C5EB]"/>}
        />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Limitation;
