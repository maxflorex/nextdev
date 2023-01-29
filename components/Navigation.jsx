import React, { useEffect } from 'react';
import Link from 'next/link';
import Logo from './svg/Logo';

const Navigation = ({ show }) => {
    return (
        <header className="grid grid-cols-12 -mb-24 z-20">
            <nav className="col-start-2 col-span-10 flex justify-between py-4 items-center z-10">
                <Logo />
                <div className="flex gap-6">
                    <a href="#" className="link">
                        Home
                    </a>
                    <a href="#about" className="link">
                        About
                    </a>
                    <Link href="/projects" className='link'>Works</Link>
                    <span onClick={() => show(true)} className="link">
                        Contact
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
