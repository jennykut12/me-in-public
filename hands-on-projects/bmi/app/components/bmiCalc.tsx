import React from 'react'

function BmiCalc() {
  return (
    <div className=''>
      <div className='bmiCal flex justify-center lg:px-32 items-center max-w-full h-[60vh] lg:max-w-[70vw] lg:h-[60vh] sm:rounded-b-[40px] lg:rounded-bl-[0] lg:rounded-br-[40px]'>
        <div className=' w-[80vw] text-center lg:text-left lg:w-[35vw] space-y-6 '>
          <h1 className=' text-5xl font-semibold bg-transparent'>Body Mass<br/> Index Calculator</h1>
          <p className='bg-transparent'>Better understand your weight in relation to your height using our body mass index calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being  </p>
        </div>
      </div>
      <div className=' shadow-xl w-[80vw] flex lg:ml-3.5 lg:-mt-96 place-content-center lg:w-[40vw] h-64 bg-white rounded-lg absolute z-10'>
        <p>Enter your details below</p>
      </div>
    </div>
  )
}

export default BmiCalc;