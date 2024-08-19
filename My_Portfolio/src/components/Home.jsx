import React from 'react'

function Home() {
    return (
        <div className='mt-10 w-full h-screen flex items-center justify-center' id='hero'>
            <div className='w-3/4 h-3/4 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-[25px]'>
                <div className='grid pl-60 pt-20'>
                    <p className='text-white font-spartan text-[100px] font-bold'>Syed Monu Abbas</p>
                    <p className='text-white font-spartan text-[100px] font-bold'>is a Frontend</p>
                    <p className='text-white font-spartan text-[100px] font-bold'>Engineer!</p>
                </div>
                <div className='grid justify-end pr-[27.9%]'>
                    <p className='text-white font-spartan text-[20px] font-semibold'>Check out my work and contact me for more</p>
                    <p className='text-white font-spartan text-[20px] font-semibold'>information</p>
                </div>
                <div className=' bg-opacity-40 pt-5 flex items-center justify-center text-white font-spartan font-light text-[26.26px] space-x-32'>
                    <button className='bg-white bg-opacity-50 inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full cursor-pointer border-black'>
                        About
                    </button>
                    <button className='bg-white bg-opacity-50 inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full cursor-pointer border-black'>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home