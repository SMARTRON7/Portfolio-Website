import { Link, useNavigate } from 'react-router-dom'
import { Container, Logo } from '../index'

function Header() {

    const navigate = useNavigate()
    const navItems = [
        {
            name: "Home",
            slug: "/",
        },
        {
            name: "About",
            slug: "/about",
        },
        {
            name: "Work",
            slug: "/work",
        },
        {
            name: "Contact",
            slug: "/contact",
        },
    ]

    return (

        <header className='flex bg-white py-3 w-11/12 shadow rounded-[19px]'>
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
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >{item.name}</button>
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