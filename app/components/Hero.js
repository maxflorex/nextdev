import React from 'react'
import Container from './Container'

const Hero = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-7rem)]">
            <div className='container mx-auto grid grid-cols-2 content-center items-center'>
                <div className="flex flex-col text-mx-500 pr-8">
                    <h1 className="xl:text-7xl text-5xl">
                        I am Max.
                    </h1>
                    <h1 className='xl:text-7xl text-5xl'>A <span className='font-bold'>Developer.</span></h1>
                    <p className='leading-8 pt-4'>I make fullstack web and crossplatform apps <br />with React & React Native (Most of times)</p>
                </div>
                <img src="/coder.svg" alt="" className='w-full place-self-center xl:p-16' />
            </div>
        </div>
    )
}

export default Hero
