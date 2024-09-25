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
                    <div className='flex items-center justify-center pt-5 md:pt-10'>
                        <Link to="https://github.com/SMARTRON7"
                            className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 bg-babypink dark:bg-darkblue border text-gray-50 text-base font-bold rounded-lg overflow-hidden p-2 after:flex hover:after:animate-pulse"
                        >
                            <svg
                                className="w-6 h-6 fill-neutral-50"
                                height="100"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 100 100"
                                width="100"
                                x="0"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0"
                            >
                                <path
                                    className="svg-fill-primary"
                                    d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                                ></path>
                            </svg>
                            Github
                        </Link>
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
                                        <li className='list-disc'>HTML, CSS, Tailwind CSS, Javascript, Node, React, AWS, Figma, Git and Github</li>
                                        <li className='list-disc'>Great at communication and problem solving!</li>
                                    </ul>
                                </div>
                                <div>
                                    <button className='bg-babypink dark:bg-white bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 dark:bg-opacity-50 hover:bg-pink-200 dark:hover:bg-blue-100 hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black'
                                    >
                                        <a
                                            href="/Syed Monu Abbas Resume.pdf"
                                            download="Syed Monu Abbas Resume.pdf"
                                        >
                                            Download Resume!
                                        </a>
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
                                <div key={item.name} className=' bg-babypink dark:bg-white dark:bg-opacity-50 bg-opacity-30 md:w-1/4 w-1/2 h-1/2 m-2 p-3 rounded-[25px] flex items-center justify-center text-black dark:text-white font-spartan
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