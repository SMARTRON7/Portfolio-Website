import React from 'react'

function Contact() {
    return (
        <div className='w-full h-full bg-darkblue'>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className=' w-11/12 h-3/4 flex flex-col mt-10 bg-midblue rounded-[25px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                    <div>
                        <h1 className='flex ml-3 font-bold font-spartan text-2xl md:text-5xl text-white mt-4'>Contact</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className=' flex flex-col items-center md:justify-center'>
                            <div className='flex md:items-center flex-col justify-center'>
                                <ul className='font-bold font-spartan text-2xl md:text-5xl text-white mt-4'>
                                    <li>Hey there!</li>
                                    <li>Let's get Started!</li>
                                </ul>
                            </div>
                            <div className='h-full flex flex-wrap items-center pl-14 md:pl-5 justify-center font-semibold font-spartan text-xs md:text-sm text-white mt-4'>
                                <ul>
                                    <li>This form will only take a minute to complete and will help me</li>
                                    <li>understand the requirements, queries and feedback!</li>
                                </ul>
                            </div>
                        </div>

                        <div className=' w-full flex flex-col items-center space-y-5 mt-10 text-white '>
                            <div className='flex flex-col items-start'>
                                <div className='flex flex-row items-start justify-start space-x-4'>
                                    <label htmlFor="first_name" className="h-fit text-xl font-medium text-white font-spartan">Name:</label>
                                    <input type="text" id="first_name" className="h-fit bg-transparent underline !outline-none text-white rounded-lg" placeholder="John" required />
                                </div>
                                <div className='flex flex-row items-start justify-start space-x-4'>
                                    <label htmlFor="first_name" className="h-fit text-xl font-medium text-white font-spartan">Email:</label>
                                    <input type="text" id="first_name" className="h-fit bg-transparent underline !outline-none text-white rounded-lg" placeholder="John@gmail.com" required />
                                </div>
                                <div className='flex flex-row items-start justify-start space-x-4'>
                                    <label htmlFor="first_name" className="h-fit text-xl font-medium text-white font-spartan">Contact:</label>
                                    <input type="text" id="first_name" className="h-fit bg-transparent underline !outline-none text-white rounded-lg" placeholder="999999999" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full mt-28'>
                        <div className="relative max-w-lg w-full">
                            <div className='flex flex-col items-center'>
                                <textarea
                                    placeholder="Your feedback..."
                                    className="text-black w-[80%] p-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="font-spartan mt-5 text-white bg-white bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black"
                                >
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact