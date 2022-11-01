import React from 'react'
import Container from './Container'

const Designer = () => {
    return (
        <Container>
            <div className="grid content-center items-center w-full text-mx-500 text-center py-24">
                <h1 className='text-4xl'>
                    I'm also a <span className='font-black'>Designer.</span> :)
                </h1>
                <p>Check out my <span className='font-black underline'>Portfolio</span></p>
            </div>
        </Container>
    )
}

export default Designer
