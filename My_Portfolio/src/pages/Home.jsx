import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import Profile from '../Image/Profile.webp'
import { useEffect, useState } from 'react'

function Home() {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the fade-in effect when the component is mounted
        setFadeIn(true);
    }, []);

    const navigate = useNavigate()
    const repos = [
        {
            name: "Todo List",
            url: "https://github.com/SMARTRON7/React_Learning/tree/main/reduxToolkitTodo"
        },
        {
            name: "Blog App",
            url: "https://github.com/SMARTRON7/Blog-React-Project"
        },
        {
            name: "Haikyuu Fan Page",
            url: "https://github.com/SMARTRON7/Haikyuu-Tailwind-Test"
        },
    ]


    return (
        <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            <div className='mt-10 w-full h-screen flex items-center justify-center' id='home'>
                <div className='w-3/4 h-3/4 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-[25px] md:space-y-0 space-y-10 md:p-0 p-2'>
                    <div className=' text-black dark:text-white grid items-center justify-start md:justify-center pr-[5%] pt-20 shrink-0'>
                        <p className=' font-spartan text-3xl md:text-7xl font-bold typing-effect paragraph-1'>Syed Monu Abbas</p>
                        <p className='font-spartan text-3xl md:text-7xl font-bold typing-effect paragraph-2'>is a Frontend</p>
                        <p className='font-spartan text-3xl md:text-7xl font-bold typing-effect paragraph-3'>Engineer!</p>
                    </div>
                    <div className='text-black dark:text-white grid justify-start md:justify-end pr-[27.9%]'>
                        <p className='font-spartan text-[15px] md:text-[20px] font-semibold'>Check out my work and contact me for more</p>
                        <p className='font-spartan text-[15px] md:text-[20px] font-semibold'>information</p>
                    </div>
                    <div className=' bg-opacity-40 pt-5 flex items-center justify-center text-black dark:text-white font-spartan font-light text-[20px] md:text-[26.26px] space-x-[20%] md:space-x-32'>
                        <Scroll
                            to={'about'}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            <button
                                className='bg-babypink dark:bg-white dark:bg-opacity-50 bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 hover:bg-pink-200 dark:hover:bg-blue-100 hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black'
                            >
                                About
                            </button>
                        </Scroll>
                        <button
                            className='bg-babypink dark:bg-white bg-opacity-50 dark:bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 hover:bg-pink-200 dark:hover:bg-blue-100 hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black'
                            onClick={() => navigate("/contact")}>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen flex items-center justify-center' id='about'>
                <div className='md:w-3/4 md:h-3/4 w-11/12 h-11/12 flex items-center bg-darkskin dark:bg-midblue rounded-[25px]'>
                    <div className=' w-full h-fit  flex items-center md:flex-row flex-col'>
                        <div className=' w-3/4 flex justify-center items-center p-2 md:p-8'>
                            <img className='rounded-[25px]' src={Profile} alt="Profile Picture" />
                        </div>
                        <div className=' w-full h-full flex items-center'>
                            <div className='flex flex-col space-y-10 w-full text-black dark:text-white font-spartan md:m-0 m-4'>
                                <p className='font-bold text-xl md:text-5xl'>
                                    About
                                </p>
                                <div className='md:m-0 m-2 text-s md:text-xl font-light font-spartan'>
                                    <p className=' text-xl font-light'>
                                        My name is Syed Monu Abbas and I am a Frontend Developer!
                                        I have also served as a Senior Software Engineer in
                                        Capgemini India. Feel free to reach out to me for any
                                        queries or feeback!

                                        Here are some of my professional skills!
                                    </p>
                                    <ul className='pt-8 pl-5'>
                                        <li className='list-disc'>HTML, CSS, Tailwind CSS, Javascript, Node, React, Git and Github</li>
                                        <li className='list-disc'>Great at communication and problem solving!</li>
                                    </ul>
                                </div>
                                <div>
                                    <button className='bg-babypink dark:bg-white bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 dark:bg-opacity-50 hover:bg-pink-200 dark:hover:bg-blue-100 hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black'
                                    >
                                        Resume!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen flex items-center justify-center' id='work'>
                <div className='w-3/4 h-3/4 flex bg-darkskin dark:bg-midblue rounded-[25px]'>
                    <div className='w-full h-full flex flex-col items-center justify-center'>
                        <div className=' h-fit flex flex-wrap justify-center text-black dark:text-white font-spartan font-bold text-2xl md:text-5xl'>Work</div>
                        <div className=' w-3/4 h-3/4 flex md:flex-row flex-col items-center justify-between overflow-auto'>
                            {repos.map((item) =>
                                <div key={item.name} className=' bg-babypink dark:bg-white dark:bg-opacity-50 bg-opacity-30 md:w-1/4 w-1/2 h-1/2 m-2 rounded-[25px] flex items-center justify-center text-black dark:text-white font-spartan
                                                                    md:text-2xl text-lg transition-transform transform hover:scale-105 hover:shadow-lg'>
                                    <Link to={item.url}>
                                        {item.name}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home