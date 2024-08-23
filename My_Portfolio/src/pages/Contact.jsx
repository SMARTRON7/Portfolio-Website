import React, { useId, useState, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import appwriteService from '../appwrite/config'
import { useNavigate } from 'react-router-dom'


function Contact({ post }) {
    const [showPopup, setShowPopup] = useState(false)
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            Name: post?.name || '',
            slug: post?.slug || '',
            Email: post?.email || '',
            Phone: post?.phone || '',
            Feedback: post?.feedback || '',
        },
    });

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "Name") {
                setValue("slug", slugTransform(value.Name), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    const uid = useId()
    const navigate = useNavigate()
    const submit = async (data) => {
        const feedback = await appwriteService.createPost({ ...data })
        if (feedback) {
            setShowPopup(true)
            setTimeout(() => {
                setShowPopup(false);
                navigate('/home'); // Navigate to home after the popup is hidden
            }, 2000);
        }
    }





    return (
        <div className='w-full h-full bg-skintone dark:bg-darkblue'>
            <div className='w-full h-screen flex items-center justify-center'>
                <form className='w-11/12 h-3/4 flex flex-col mt-10 bg-darkskin dark:bg-midblue rounded-[25px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]' onSubmit={handleSubmit(submit)}>
                    <div className=' '>
                        <div>
                            <h1 className='flex ml-3 font-bold font-spartan text-2xl md:text-5xl text-black  dark:text-white mt-4'>Contact</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' flex flex-col items-center md:justify-center'>
                                <div className='flex md:items-center flex-col justify-center'>
                                    <ul className='font-bold font-spartan text-2xl md:text-5xl text-black  dark:text-white mt-4'>
                                        <li>Hey there!</li>
                                        <li>Let's get Started!</li>
                                    </ul>
                                </div>
                                <div className='h-full flex flex-wrap items-center md:pl-5 md:justify-center font-semibold font-spartan text-xs md:text-sm text-black  dark:text-white mt-4'>
                                    <ul>
                                        <li>This form will only take a minute to complete and will help me</li>
                                        <li>understand the requirements, queries and feedback!</li>
                                    </ul>
                                </div>
                            </div>

                            <div className=' w-full flex flex-col items-center mt-10 text-black  dark:text-white '>
                                <div className='flex flex-col items-start space-y-10'>
                                    <div className='flex flex-row items-start justify-start space-x-4'>
                                        <label htmlFor="first_name" className="h-fit text-xl font-medium text-black  dark:text-white font-spartan mr-4">Name:</label>
                                        <input type="text" id="first_name" className="h-fit pl-2 mt-1 text-black  dark:text-white rounded-lg" placeholder="John" required {...register("Name", { required: true })} />
                                    </div>
                                    <div className='flex flex-row items-start justify-start space-x-4'>
                                        <label htmlFor="first_name" className="h-fit text-xl font-medium text-black  dark:text-white font-spartan mr-4">Email:</label>
                                        <input type="text" id="first_name" className="h-fit pl-2 mt-1 text-black  dark:text-white rounded-lg" placeholder="John@gmail.com" required {...register("Email", { required: true })} />
                                    </div>
                                    <div className='flex flex-row items-start justify-start space-x-4'>
                                        <label htmlFor="first_name" className="h-fit text-xl font-medium text-black  dark:text-white font-spartan">Contact:</label>
                                        <input type="text" id="first_name" className="h-fit pl-2 mt-1 text-black  dark:text-white rounded-lg" placeholder="999999999" {...register("Phone", { required: false })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full mt-28'>
                            <div className="relative max-w-lg w-full">
                                <div className='flex flex-col items-center'>
                                    <textarea
                                        placeholder="Your feedback..."
                                        className="text-black w-[80%] p-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-blue-500 resize-none"
                                        {...register("Feedback", { required: true })}
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="font-spartan mt-5 text-black  dark:text-white bg-babypink dark:bg-white dark:bg-opacity-50 bg-opacity-50 inline-block px-3 py-1 md:px-6 md:py-2 duration-200 hover:bg-pink-200 dark:hover:bg-blue-100 dark:hover:text-black rounded-full cursor-pointer shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] border-black"

                                    >
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-midblue p-4 rounded shadow-lg text-center">
                        <p className="text-white font-bold">Thanks for the feedback!</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact