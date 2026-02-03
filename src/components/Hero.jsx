import React from 'react'

function Hero(props) {

    return (
        <div className='h-[70vh]  flex justify-between'>

            <div className='mx-40 mt-40 flex flex-col gap-5'>
                <div>
                    <span className='text-[#FB2E86]'>{props.data}.</span>
                    <p className='font-bold  text-5xl'>New Furniture Collection
                        Trends in 2020</p>
                </div>
                <button className='bg-[#FB2E86] w-40     px-10 py-4 text-white'>Shop Now</button>
            </div>
            <div>
                < img src={'/images/hero.png'} className='h-[400px]  aspect-square' />
            </div>
        </div>
    )
}

export default Hero