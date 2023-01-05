import React from 'react';
import Container from './style/Container';

const Footer = () => {
    return (
        <footer>
            <Container bg="bg-mx-500">
                <div className="flex justify-between items-center text-mx-100">
                    <p>Have an exciting project where you need help?</p>
                    <h2 className="text-mx-300 hover:text-mx-100 no-underline hover:underline decoration-wavy underline-offset-8 transition duration-700">
                        Get in touch!
                    </h2>
                </div>
            </Container>
            <div className="bg-mx-500 flex justify-center gap-4 p-4 text-mx-200 items-center">
                <p className="text-xs">Copyright Max Flores</p>
                <div className="flex gap-1 border-l border-mx-100 pl-4">
                    <a
                        href="https://www.linkedin.com/in/maxfloresdev"
                        target="_blank"
                    >
                        <i className="ri-linkedin-line" />
                    </a>
                    <a
                        href="https://www.github.com/maxflorex"
                        target="_blank"
                    >
                        <i className="ri-github-line" />
                    </a>
                    <a
                        href="https://twitter.com/max01011001"
                        target="_blank"
                    >
                        <i className="ri-twitter-line" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
