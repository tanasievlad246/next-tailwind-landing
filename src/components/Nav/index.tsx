import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import hamburger from '../../assets/icons/hamburger.svg';
import { headerLogo } from '../../assets/images';
import { navLinks } from '@/constants';

const Nav = () => {
    return (
        <header className="
            absolute padding-x py-8 z-10 w-full
        ">
            <nav className="
                flex justify-between items-center max-container
            ">
                <Link href="/">
                    <Image src={headerLogo} alt='Nike logo' width={130} height={29} />
                </Link>
                <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="max-lg:block hidden cursor-pointer">
                    <Image src={hamburger} alt='Hamburger menu' width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav;