import React from 'react';
import Container from './style/Container';

const Footer = () => {
    return (
        <footer>
            <Container bg="bg-mx-500">
                <div className="flex justify-between items-center text-mx-100">
                    <p>Have an exciting project where you need help?</p>
                    <h2 className='text-mx-300 hover:text-mx-100 no-underline hover:underline decoration-wavy underline-offset-8 transition duration-700'>Get in touch!</h2>
                </div>
            </Container>
            <div className="bg-mx-500 flex justify-center gap-4 p-4 text-mx-200">
                <p className='text-xs'>Copyright Max Flores</p>
            </div>
        </footer>
    );
};

export default Footer;
