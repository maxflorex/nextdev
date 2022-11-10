import Image from 'next/image'
import React from 'react'
import Container from './Container'

const NavBar = () => {
    return (
        <div className='absolute w-full top-0'>
            <Container>
                <Image
                    // loader={myLoader}
                    src="/icon-light.svg"
                    alt="Logo"
                    width={48}
                    height={48}
                    className='w-8 h-8'
                />
                <div className="flex gap-4 text-2xl text-mx-400">
                    <i className="ri-github-line hover:text-3xl" />
                    <i className="ri-suitcase-line hover:text-3xl" />
                </div>
            </Container>
        </div>
    )
}

export default NavBar
