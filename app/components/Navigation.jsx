import React from 'react';
import Link from 'next/link';
import Logo from './svg/Logo';

const Navigation = () => {
    return (
        <header className="grid grid-cols-12 -mb-24 z-20">
            <nav className="col-start-2 col-span-10 flex justify-between py-4 items-center z-10">
                <Logo />
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Works</Link>
                    <Link href="/">Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
