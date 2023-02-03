import React, { useState } from 'react';
import AboutMore from './AboutMore';
import BtnXL from './styled/BtnXL';
import Container from './styled/Container';
import Arrow from './svg/Arrow';
import Line from './svg/Line';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <Container bg="bg-mx-300 bg-texture">
                <div
                    className="grid grid-cols-10 gap-6 items-center lg:my-8 my-0"
                    id="about"
                >
                    <span className="col-span-1 border-t-2 border-mx-500 h-2 lg:block hidden" />
                    <div className="lg:col-span-4 col-span-10 flex justify-center lg:justify-start">
                        <h1 className="mb-2">Who am I?</h1>
                        {/* <div onClick={() => setShowMore(true)}>
                            <BtnXL>Know More</BtnXL>
                        </div> */}
                    </div>

                    <div className="lg:col-span-5 col-span-10">
                        <p className="text-justify indent-4">
                            I am a self-taught front-end web developer with
                            experience building full-stack applications. My
                            journey in tech began while I was studying graphic
                            design, where I created user interfaces for web and
                            mobile applications that quickly grew into my
                            passion. In recent years, I have been focusing on
                            coding and programming which has become a true love
                            of mine. Originally from Honduras, Central America,
                            I currently live with my wife, daughter, and our
                            four dogs. I strive to stay current with the latest
                            trends and technologies in the tech industry,
                            allowing me to create the most innovative and
                            efficient solutions for any given project.
                        </p>
                    </div>
                </div>
            </Container>
            {/* {showMore && <AboutMore setShowMore={setShowMore} />} */}
        </div>
    );
};

export default About;
