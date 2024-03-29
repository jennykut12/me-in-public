import React from "react";
import { progressData } from "../data/progressData";
import Chart from "react-google-charts";

function SalesTrends() {
  return (
    <div className=" bg-white w-[85vw] lg:w-[48vw] px-10 rounded-xl  ">
      <div className="flex items-center justify-between">
        <h2>Sales Trends</h2>
        <div className="flex items-center gap-4">
          <p>Short by : </p>
          <div className="dropdown dropdown-bottom py-5">
            <div tabIndex={0} role="button" className="btn  flex rounded-3xl border border-sidebar-border">
              
              <p className=" text-sm font-regular">Weekly</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z"
                fill="black"
              />
            </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
              <Chart
                data={progressData}
                chartType="Bar"
                width='100%'
                height='300px'
                rows={1}
                className={` bg-${progressData.map((item, index) => item.color)}`}
                options={
                  {
                    backgroundColor:'rgba(52, 202, 165, 0.10)'
                    
                  }
                }
              />
      </div>
    </div>
  );
}

export default SalesTrends;
