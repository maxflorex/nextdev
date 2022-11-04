import React, { useCallback, useEffect, useState } from 'react'
import BtnXL from './BtnXL'
import NavBar from './NavBar'

const title = ['Mobile Developer', 'UX/UI Designer', 'Graphic Artist']

const Hero = () => {
    // const [newTitle, setNewTitle] = useState('')

    // const shuffle = useCallback(() => {
    //     const i = Math.floor(Math.random() * title.length);
    //     setNewTitle(title[i])
    // }, [])

    // useEffect(() => {
    //     const intervalId = setInterval(shuffle, 3000);
    //     return () => clearInterval(intervalId)
    // }, [shuffle])

    return (
        <div className="flex justify-center items-center h-screen relative">
            <NavBar />
            <div className='container mx-auto grid grid-cols-2 content-center items-center'>
                <div className="flex flex-col text-mx-500 pr-8">
                    <h1 className="xl:text-7xl text-5xl">
                        I am Max.
                    </h1>
                    <h1 className='xl:text-7xl text-5xl'>An <span className='font-bold'>UI Engineer.</span></h1>
                    <p className='leading-8 pt-4'>I make fullstack Web and Cross-Platform apps <br />with Node, React & React Native</p>
                    <BtnXL title='Know more' />
                </div>
                <img src="/coder.svg" alt="" className='w-full place-self-center xl:p-16' />
            </div>
        </div>
    )
}

export default Hero
