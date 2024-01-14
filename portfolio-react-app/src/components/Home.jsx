import React from 'react'



const Home = () => {
  return (
    <div name='home' className='w=full h-screen bg-gray-700'>

    {/*Container*/}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-200'>Hey There, i'm</p>
        <h1 className='text-6xl sm:text-7xl text-white'>Uriel Carrillo</h1>
        <h2 className='text-4xl sm:text-5xl text-red-400'>I'm a Full Stack Developer.</h2>
        <p className='text-gray-500 py-4 max-w-[600px] '>yababababadababba doooooo
        yababababadababba doooooo yababababadababba doooooo
        yababababadababba doooooo yababababadababba doooooo yababababadababba doooooo
        </p>
        <div>
            <button className='text-white border-2 px-6 py-3 m-2 flex items-center hover:bg-yellow-200 hover:text-black'>View Work</button>
        </div>
    </div>

    </div>
  )
}

export default Home