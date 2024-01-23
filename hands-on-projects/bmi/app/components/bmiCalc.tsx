'use client'
import React, { useState } from 'react'

const TAB1 = 'tab1';
const TAB2 = 'tab2';

function BmiCalc() {
  const data = [{name: 'tab1'}, {name: 'tab2'}]
  const [tabs, setTabs] = useState(TAB1)
  const [checked, setChecked] = useState(false)
  return (
    <div className=' mb-40'>
      <div className='bmiCal flex justify-center lg:justify-start lg:px-32 pt-20 lg:pt-0 lg:items-center max-w-full h-[80vh] lg:max-w-[70vw] lg:h-[70vh] sm:rounded-b-[40px] lg:rounded-bl-[0] lg:rounded-br-[40px]'>
        <div className=' w-[80vw] text-center lg:text-left lg:w-[35vw] space-y-6 '>
          <h1 className=' text-5xl font-semibold bg-transparent'>Body Mass<br/> Index Calculator</h1>
          <p className='bg-transparent'>Better understand your weight in relation to your height using our body mass index calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being  </p>
        </div>
      </div>
      <div className=' w-full flex justify-center '>
      <div  className='  shadow-xl w-[90vw] p-8 gap-7 flex flex-col lg:ml-[50vw] -mt-32 lg:-mt-96 lg:w-[40vw] h-64 bg-white rounded-lg absolute z-10'>
        <p>Enter your details below</p>
        <div role="tablist" className='flex flex-row space-x-12'>
          {data.map((tab, index) => (
            <a key={index} onClick={() => {setTabs(tab.name), setChecked(true)}}>
              <div className=' flex items-center gap-4'>
              <input type="radio" name="radio-2" className="radio radio-primary" onClick={()=>setChecked(true)}/>
              {tab.name }
              </div>
            </a>
          ))}
        </div>
        <div className='flex flex-col'>
          {tabs === TAB1 && (<div>Hello Jenny</div>)}
          {tabs === TAB2 && (<div>Hi</div>)}
          </div>
      </div>
      </div>
    </div>
  )
}

export default BmiCalc;