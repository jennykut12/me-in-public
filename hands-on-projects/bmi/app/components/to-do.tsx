import React from 'react'
import { toDoData } from './data/to-do-data'

type Props = {}

const Todo = (props: Props) => {
  return (
    <div className='tddobg lg:w-[90vw] lg:rounded-xl flex items-center flex-col lg:flex-row gap-16 my-10 p-10'>
        {
            toDoData.map((item, i)=>(
                <div key={i} className='w-full flex lg:flex-col px-6 gap-6 items-start'>
                    <div className=' w-20 h-20 p-4 rounded-full flex items-center' style={{backgroundColor:item.color}}>
                        {item.img}
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className=' text-3xl font-semibold'>{item.title}</p>
                        <p>{item.body}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Todo