import { Link, useNavigate } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import { Container, Logo } from '../index'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'


function Header() {

    const navigate = useNavigate()
    const navItems = {
        name: "Home",
        slug: "home",
    }
    const navItem = {
        name: "Contact",
        slug: "/contact",
    }
    const scrollItems = [
        {
            name: "About",
            slug: "about"
        },
        {
            name: "Work",
            slug: "work"
        }

    ]
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const classes = `fixed header-section d-none flex bg-white py-3 w-11/12 shadow rounded-[19px]`

    const [isOpen, setIsOpen] = useState(false)
    const toggleNavBar = () => {
        setIsOpen(!isOpen)
    }

    return (

        <header className={classes}>
            <Container>
                <nav className='flex justify-between'>
                    < div className=' flex mr-4 items-center' >
                        <Link to="home">
                            <Logo />
                        </Link>
                    </div >
                    <ul className='hidden md:flex ml-auto items-center text-black font-spartan font-light text-[26.26px]'>
                        <li>
                            <Scroll
                                to={navItems.slug}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            ><button className='inline-block duration-200 hover:bg-blue-100 rounded-full cursor-pointer px-6 py-2'
                                onClick={() => navigate(navItems.slug)}
                            >{navItems.name}
                                    {console.log(navItems.name)}
                                </button></Scroll>
                        </li>

                        {scrollItems.map((item) =>
                            <li key={item.name} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer'>
                                {console.log(item.name)}
                                <Scroll
                                    to={item.slug}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >{item.name}</Scroll>
                            </li>
                        )}
                        <li>
                            <button
                                onClick={() => navigate(navItem.slug)}
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                            >{navItem.name}
                            </button>
                        </li>
                    </ul>
                    <div className='flex items-center justify-center md:hidden hover:bg-black hover:bg-opacity-50 hover:rounded-full'>
                        <button className='' onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
                    </div>
                </nav >
                {isOpen && (
                    <div className='flex flex-wrap basis-full flex-col items-center '>
                        <ul className='md:hidden flex flex-col ml-auto items-center text-black font-spartan font-light text-xl  '>
                            <li>
                                <Scroll
                                    to={navItems.slug}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                ><button className='inline-block duration-200 hover:bg-blue-100 rounded-full cursor-pointer px-6 py-2'
                                    onClick={() => navigate(navItems.slug)}
                                >{navItems.name}
                                        {console.log(navItems.name)}
                                    </button></Scroll>
                            </li>

                            {scrollItems.map((item) =>
                                <li key={item.name} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer'>
                                    {console.log(item.name)}
                                    <Scroll
                                        to={item.slug}
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                    >{item.name}</Scroll>
                                </li>
                            )}
                            <li>
                                <button
                                    onClick={() => navigate(navItem.slug)}
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >{navItem.name}
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </Container >
        </header >

    )
}

export default Header