import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div
            onClick={scrollTop}
            className='text-skintone dark:text-black font-spartan text-xl md:text-[26.26px] font-bold'>SYED MONU ABBAS</div>
    )
}

export default Logo