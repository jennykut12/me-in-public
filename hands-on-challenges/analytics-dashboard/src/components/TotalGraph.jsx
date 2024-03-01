import React from 'react'

function TotalGraph({logo, graph, text, num, arrow, decimal, vc, background, color }) {
  return (
    <div className=' flex flex-col justify-center items-between gap-2 p-5 bg-white rounded-lg lg:w-[20vw]  '>
      <div className=' flex items-center justify-between'>
        <div className=' w-[40px] h-[40px] rounded-full border border-sidebar-border flex justify-center items-center'>{logo}</div>
        <div>{graph}</div>
      </div>
      <div className=' flex justify-start items-start flex-col'>
        <p className=' text-xl font-medium text-grey'>{text}</p>
        <p className=' text-3xl font-semibold'>{num}</p>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center gap-2 w-24 h-10 rounded-3xl ' style={{backgroundColor:(background)}}>
          {arrow}
          <p style={{color:(color)}} className=' text-sm font-medium'>{decimal}</p>
        </div>
        <p className=' text-base font-normal text-grey'>{vc}</p>
      </div>
    </div>
  )
}

export default TotalGraph