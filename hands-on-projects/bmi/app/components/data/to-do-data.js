import { PiBowlFood } from "react-icons/pi";
import { MdSportsGymnastics } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";

export const toDoData = [
  {
    title: "Healthy eating",
    body: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    img: <PiBowlFood className="w-[5vw] h-[5vh] text-[#FF1F7D]" />,
    color: "#f7d0e0",
  },
  {
    title: "Regular exercise",
    body: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    img: <MdSportsGymnastics className="w-[5vw] h-[5vh] text-[#F5BF3D]" />,
    color: "#f4ead3",
  },
  {
    title: "Adequate sleep",
    body: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    img: <GiNightSleep className=" w-[5vw] h-[5vh] text-[#54C5EB]" />,
    color: "#d9eff6",
  },
];
