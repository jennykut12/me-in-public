import { BsGenderAmbiguous } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LuBaby } from "react-icons/lu";
import { IoBodyOutline } from "react-icons/io5";
import { GiMuscleUp } from "react-icons/gi";

const limitaionData = [
  {
    title: "Gender",
    body: "The development and body fat composition of girls and boys vary with age. Consequently, a childs age and gender are considered when evaluating their BMI.",
    img: <BsGenderAmbiguous className="w-[5vw] h-[5vh] text-[#FF1F7D]" />,
    color: "#FF1F7D",
  },

  {
    title: "Age",
    body: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    img: <LiaBirthdayCakeSolid className="w-[5vw] h-[5vh] text-[#F5BF3D]" />,
    color: "#F5BF3D",
  },
  {
    title: "Muscle",
    body: "BMI may misclassify muscular individuals as overweight or obese, as it doesnt differentiate muscle from fat.",
    img: <GiMuscleUp className=" w-[5vw] h-[5vh] text-[#6160DC]" />,
    color: "#6160DC",
  },
  {
    title: "Pregnancy",
    body: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.",
    img: <LuBaby className=" w-[5vw] h-[5vh] text-[#00AC56]" />,
    color: "#00AC56",
  },
  {
    title: "Race",
    body: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    img: <IoBodyOutline className=" w-[5vw] h-[5vh] text-[#54C5EB]" />,
    color: "#d9eff6",
  },
];
export default limitaionData;
