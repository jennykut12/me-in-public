import Image from "next/image";
import BmiCalc from "./components/bmiCalc";
import ResultMeans from "./components/resultMeans";
import Todo from "./components/to-do";
import Limitation from "./components/limitation";

export default function Home() {
  return (
    <main className=" bg-gray-100">
      <div className="">
        <BmiCalc />
      </div>
      <div className="">
        <ResultMeans />
      </div>
      <div className="flex lg:justify-center">
        <Todo />
      </div>
      <div>
        <Limitation />
      </div>
    </main>
  );
}
