import React from 'react'

function Card(props) {
    const data = props.data
   
    return (
        <div className='w-[270px] h-[361px] '>
            <div className='bg-[#9da0ab] p-8'>
                <img src={data.image} alt="" />
            </div>


            <div className='flex flex-col items-center gap-2 mt-5'>
                <p className='font-bold text-[#FB2E86]'>{data.title}</p>
                <p>{data.code}</p>
                <p>{data.price}</p>
            </div>
        </div>
    )
}

export default Card