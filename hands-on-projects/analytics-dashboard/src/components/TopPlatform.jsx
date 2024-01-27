import '../index.css'
import React from 'react'
import { TopPlatformData } from '../data/TopPlatformData'

function TopPlatform() {

  const onChangeFunction = (e) => {
    const el = e.target;
    el.style.setProperty("--value", el.value);
    el.style.setProperty("--min", el.min === "" ? "0" : el.min);
    el.style.setProperty("--max", el.max === "" ? "100" : el.max);
    el.style.setProperty("--value", el.value);
  };
  
  return (
    <div className="bg-white w-[85vw] lg:w-auto px-10 rounded-xl m-5 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium">Top Platform</p>
        <p className=" text-green text-xl font-medium">See All</p>
      </div>
      <div>
        {TopPlatformData.map((item, index)=>(
          <div key={index}>
            <p>{item.name}</p>
              <input className='input' type='range' value={item.value} min={1} max={100} style={{

              }}/>
              <div className=' flex justify-between items-center'>
        <p>{item.amount}</p>
        <p>{item.percent}</p>
      </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default TopPlatform