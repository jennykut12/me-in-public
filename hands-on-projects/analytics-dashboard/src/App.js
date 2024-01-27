import './index.css'
import Sidebar from "./components/Sidebar";
import SalesTrends from "./components/SalesTrends";
import LastOrders from "./components/LastOrders";
import { TotalGraphData } from "./data/TotalGraphData";
import TotalGraph from "./components/TotalGraph";
import TopPlatform from "./components/TopPlatform";

function App() { 
  return (
    <div className="App">
      <Sidebar
        children={
          <>
            <div className=" flex flex-col w-[80vw] lg:h-[60vh] lg:justify-center lg:flex-row gap-5 m-5">
              <SalesTrends />
              <div className=" flex flex-col lg:w-auto lg:flex-row lg:flex-wrap gap-4">
                {TotalGraphData.map((item, index) => (
                  <TotalGraph
                    key={index}
                    logo={<img src={item.logo} alt="logo" />}
                    graph={<img src={item.graph} alt="graph" />}
                    text={item.text}
                    num={item.num}
                    arrow={<img src={item.arrow} alt="arrow" />}
                    decimal={item.decimal}
                    vc={item.vc}
                    color={item.color}
                    background={item.background}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:h-[60vh] lg:justify-center lg:flex-row gap-5 m-5">
              <LastOrders />
              <div>
                <TopPlatform/>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default App;
