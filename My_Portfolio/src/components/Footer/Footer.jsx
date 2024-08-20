import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <footer className="w-11/12 h-full py-10 bg-midpurple bg-opacity-30 rounded-[25px]">
            <div className="  z-10 mx-auto w-11/12 px-4">
                <div className=" md:m-6 m-2 grid grid-flow-col space-x-5">
                    <div className=" w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="inline-flex mb-4 items-center text-white font-bold text-[80px] md:text-[100px] font-spartan ">
                                <div className='flex gap-y-0'>
                                    <ul>
                                        <li className='-m-10'>Syed</li>
                                        <li className='-m-10'>Monu</li>
                                        <li className='-m-10'>Abbas</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="-m-10 mt-10 text-sm text-white">
                                    &copy; Syed Monu Abbas, 2024. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:grid md:grid-flow-col font-spartan'>
                        <div className=" w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full ">
                                <h3 className="tracking-px mb-3 text-[32px] font-semibold  text-white">
                                    Socials
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-white text-[20px] "
                                            to="/"
                                        >
                                            Github
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-white text-[20px] "
                                            to="/"
                                        >
                                            Linkedin
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-white text-[20px] "
                                            to="/"
                                        >
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className=" text-base font-medium text-white text-[20px] "
                                            to="/"
                                        >
                                            Instagram
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-3 text-[32px] font-semibold  text-white">
                                    Links
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-white text-[20px] "
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-white text-[20px]  "
                                            to="/"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-white text-[20px]  "
                                            to="/"
                                        >
                                            Work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className=" text-base font-medium text-white text-[20px]  "
                                            to="/"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer