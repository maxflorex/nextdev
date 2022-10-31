import React from 'react'
import { Btn, Container } from '.'

const Bar = () => {
    return (
        <div className="bg-mx-500 h-28 flex items-center">
            <Container>
                <nav className="flex gap-8 text-mx-100">
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
                </nav>
                <Btn title='Hire me' />
            </Container>
        </div>
    )
}

export default Bar
