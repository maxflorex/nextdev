import React from 'react';
import ArrowBtn from './styled/ArrowBtn';
import Container from './styled/Container';

const Hero = () => {
    return (
        <Container bg="min-h-[90vh] flex items-center relative group bg-mx-500 box-border">
            <span className="w-full h-full backdrop-blur-sm absolute top-0 left-0 z-10"></span>
            <span className="w-full h-full bg-texture4 absolute top-0 left-0 z-20"></span>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex flex-col lg:gap-4 gap-2 text-mx-100 z-20">
                    <h1 className="text-xl">
                        <span className="font-thin">Hello world!</span> I'm Max
                    </h1>

                    <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-mx-300 to-mx-400">
                        Fullstack Developer
                    </h1>
                    <h1 className="font-extrabold text-6xl bg-clip-text bg-texture">
                        & UI/UX Designer
                    </h1>

                    <div className="mt-4 lg:mt-0 mr-auto">
                        <ArrowBtn title="See my works" direction="/projects" />
                    </div>

                    <div className="absolute -bottom-6 left-0 w-full flex justify-center animate-bounce">
                        <i className="ri-arrow-down-s-fill px-1 py-2 text-mx-500 bg-mx-300 rounded-full"></i>
                    </div>
                </div>
                <div className="lg:relative absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <img
                        src="/dots3.gif"
                        alt="Hero Dots"
                        className="z-0 w-2/3 group-hover:-rotate-180 transition duration-1000 ease-in-out"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Hero;
