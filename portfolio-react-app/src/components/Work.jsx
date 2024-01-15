import React from 'react'
import SkinScoreImage from '../assets/SkinScore.png';
import FilmPulse from '../assets/FilmPulse.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-gray-700 text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300 text-white'>Work</p>
                <p className='py-6'>Check out my Recent projects/work</p>
            </div>

            <div style={{backgroundImage: `url(${SkinScoreImage})`, height: '250px', backgroundSize: 'cover'}} 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-gray-400 group container rounded-md flex justify-Center items-center mx-auto content-div'>
                    

                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'> SkinScore

                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-yellow-200 text-red-400 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-yellow-200 text-red-400 font-bold text-lg'>Code</button>
                        </a>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work