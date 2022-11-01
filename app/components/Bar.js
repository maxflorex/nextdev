import React from 'react'
import { Btn, Container } from '.'

const Bar = () => {
    return (
        <div className="bg-mx-500 flex items-center sticky bottom-0 w-full">
            <Container>
                <nav className="flex gap-8 text-mx-100">
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
                </nav>
                <button className='bg-mx-100 p-4 -mt-8 -mb-8'>Hire me</button>
            </Container>
        </div>
    )
}

export default Bar
