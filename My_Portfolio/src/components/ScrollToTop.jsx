import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {showScrollTopButton && (
                <FaAngleDoubleUp
                    className="fixed right-5 bottom-[15px]  h-10 w-10  text-[#3b5291] cursor-pointer rounded-[50%] border-2 border-solid border-[#3b5291] hover:animate-none hover:text-[#b2b2fd] hover:border-2 hover:border-solid hover:border-[#b2b2fd]"
                    onClick={scrollTop}
                />
            )}
        </div>
    );
};

export default ScrollToTop;