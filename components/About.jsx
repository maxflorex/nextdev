import React from 'react';
import BtnXL from './style/BtnXL';
import Container from './style/Container';
import Arrow from './svg/Arrow';
import Line from './svg/Line';

const About = () => {
    return (
        <Container bg='bg-mx-400'>
            <div
                className="grid grid-cols-10 gap-6 items-center my-24"
                id="about"
            >
                <span className="col-span-1 border-t-2 border-mx-500 h-2 -mt-5" />
                <div className="col-span-3">
                    <h1>Who am I?</h1>
                    <BtnXL>My Journey</BtnXL>
                </div>

                <div className="col-span-5">
                    <p className="text-justify indent-4">
                        I am a web developer with an extensive background in
                        graphic arts. While finishing my studies as a designer,
                        I was introduced to UX/UI terms and I immediately feel
                        in love with the magnitude of this new context. This
                        made me explore different routes in my design career. I
                        started putting websites together and working as
                        freelance web designer in online platforms like ELance
                        (Now known as Upwork), Guru, Fiverr, among others. Web
                        development / coding / programming has become a
                        lifestyle for me...
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
