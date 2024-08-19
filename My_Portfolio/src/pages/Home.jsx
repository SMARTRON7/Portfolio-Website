import React from 'react'

function Home() {
    return (
        <div>
            <div className='mt-10 w-full h-screen flex items-center justify-center' id='home'>
                <div className='w-3/4 h-3/4 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-[25px]'>
                    <div className='grid items-center justify-center pr-[5%] pt-20'>
                        <p className='text-white font-spartan text-6xl md:text-8xl font-bold'>Syed Monu Abbas</p>
                        <p className='text-white font-spartan text-6xl md:text-8xl font-bold'>is a Frontend</p>
                        <p className='text-white font-spartan text-6xl text-8xl font-bold'>Engineer!</p>
                    </div>
                    <div className='grid justify-end pr-[27.9%]'>
                        <p className='text-white font-spartan text-[20px] font-semibold'>Check out my work and contact me for more</p>
                        <p className='text-white font-spartan text-[20px] font-semibold'>information</p>
                    </div>
                    <div className=' bg-opacity-40 pt-5 flex items-center justify-center text-white font-spartan font-light text-[20px] md:text-[26.26px] space-x-[20%] md:space-x-32'>
                        <button className='bg-white bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black'>
                            About
                        </button>
                        <button className='bg-white bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black'>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen flex items-center justify-center' id='about'>
                <div className='w-3/4 h-3/4 flex bg-midblue rounded-[25px]'>
                    <div className='w-full flex items-center space-x-0 md:space-x-60'>
                        <div className=' flex justify-center items-center p-2 md:p-8'>
                            <img className='rounded-[25px]' src="../../../Image/IMG_20240529_220241_203.jpg" alt="" />
                        </div>
                        <div className='w-full flex items-center'>
                            <div className='flex flex-col w-1/2 text-white font-spartan'>
                                <p className='  font-bold text-xl md:text-5xl'>
                                    About
                                </p>
                                <p className=' text-xl font-light'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen flex items-center justify-center' id='work'>
                <div className='w-3/4 h-3/4 flex bg-midblue rounded-[25px]'></div>
            </div>
        </div >
    )
}

export default Home