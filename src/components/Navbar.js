import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    const NavLinks = () => {
        return (
            <>
                <NavLink to="/" className="font-bold text-2xl sm:text-xl">Home</NavLink>
                <NavLink to="/schedule" className={'font-bold text-2xl sm:text-xl'}>Schedules</NavLink>
                <NavLink to="/about" className={'font-bold text-2xl sm:text-xl'}>About</NavLink>
                <NavLink to="/contact" className={'font-bold text-2xl sm:text-xl'}>Contact</NavLink>
            </>
        )
    }

    return (

    <header className='bg-dark-background sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-gray-500 p-8'>
        <div className=''>
            <h1 className='font-bold text-2xl'>OTDX</h1>
        </div>
        <nav className='flex w-1/3 justify-end'>
            <div className='hidden w-full md:flex justify-between'>
                <NavLinks/>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleNavbar}>{isOpen ? <X color='red'/> : <Menu/>}</button>
            </div>
        </nav>
        {isOpen && (
            <div className='flex flex-col items-center basis-full'>
                <NavLinks/>
            </div>
        )}
    </header>
    )
}

export default Navbar