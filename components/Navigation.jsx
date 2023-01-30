import React, { useEffect } from 'react';
import Link from 'next/link';
import Logo from './svg/Logo';

const Navigation = ({ show }) => {
    const handleShow = (e) => {
        e.preventDefault();
        show(true);
        document.body.style.overflow = 'hidden';
    };

    return (
        <header className="grid grid-cols-12 -mb-24 z-20">
            <nav className="col-start-2 col-span-10 flex justify-between py-4 items-center z-10 text-mx-100">
               <img src="/mx-logo-blue.svg" alt="logo" className='w-12' />
                <div className="flex gap-6">
                    <a href="#" className="link relative">
                        Home
                    </a>
                    <a href="#about" className="link">
                        About
                    </a>
                    <Link href="/projects" className="link">
                        Works
                    </Link>
                    <span onClick={handleShow} className="link">
                        Contact
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
