import { Link, useNavigate } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import { Container, Logo } from '../index'
import { useRef } from 'react'
import React, { useEffect, useState } from "react";





function Header() {


    const navigate = useNavigate()
    const navItems = [
        {
            name: "Home",
            slug: "hero",
        },
        {
            name: "About",
            slug: "about",
        },
        {
            name: "Work",
            slug: "work",
        },
        {
            name: "Contact",
            slug: "/contact",
        },
    ]
    const classes = `fixed header-section d-none flex bg-white py-3 w-11/12 shadow rounded-[19px]`

    return (

        <header className={classes} id='home' >
            <Container>
                <nav className='flex'>
                    < div className=' flex mr-4 items-center' >
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div >
                    <ul className='flex ml-auto items-center text-black font-spartan font-light text-[26.26px]'>
                        {navItems.map((item) =>
                        (
                            <li key={item.name} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer'>
                                <Scroll
                                    to={item.slug}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >{item.name}</Scroll>
                            </li>
                        )
                        )}
                    </ul>
                </nav >
            </Container >

        </header >

    )
}

export default Header