import React from 'react';

const AboutMore = ({ setShowMore }) => {
    return (
        <div className="h-screen w-screen fixed top-0 z-30 overflow-hidden box-content m-auto flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <div className="flex flex-col justify-center items-center bg-mx-500 w-5/6 h-5/6 relative rounded">
                <h1>HELLO!</h1>

                {/* SOCIAL MEDIA */}
                <div className="mt-16 text-mx-100 flex flex-col items-center">
                    <p>
                        I began my venture into the technology world while in
                        high school. I took part in a three-year Information
                        Technology program which provided me with instruction in
                        computer and network fundamentals. However, the most
                        exciting part was when I first had the opportunity to
                        code with software such as Visual Basic and Front Page.
                        Today, I work as both a web developer and graphic
                        artist.
                    </p>
                    <p> - Or follow me - </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="https://www.linkedin.com/in/maxfloresdev"
                            target="_blank"
                        >
                            <i className="ri-linkedin-line hover:text-mx-300" />
                        </a>
                        <a
                            href="https://www.github.com/maxflorex"
                            target="_blank"
                        >
                            <i className="ri-github-line hover:text-mx-300" />
                        </a>
                        <a
                            href="https://twitter.com/max01011001"
                            target="_blank"
                        >
                            <i className="ri-twitter-line hover:text-mx-300" />
                        </a>
                    </div>
                </div>

                {/* CLOSE */}
                <div
                    className="absolute top-4 right-4 hover:scale-110 cursor-pointer"
                    onClick={() => setShowMore(false)}
                >
                    <i className="ri-close-fill p-2 bg-mx-300 rounded hover:bg-mx-400 close" />
                </div>
            </div>
        </div>
    );
};

export default AboutMore;
