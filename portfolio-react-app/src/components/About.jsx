import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-700 text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
             <div className='sm:text-right text-4xl font-bold'>
                <p>Hey There. I'm Uriel, Nice to meet you, Feel free to look around</p>
            </div>        
            <div>
                <p>I'm on a journey to explore and create in the realm of web development. Currently, I'm pursuing my studies in FrontEnd Web Development at the University of Oregon. My curiosity knows no bounds, and I'm excited to expand my horizons to the world of backend development in the near future.</p>
             
            </div>
            </div>
        </div>
    </div>
  )
}

export default about

