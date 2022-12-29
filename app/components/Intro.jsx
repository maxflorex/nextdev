import React from 'react';
import Container from './style/Container';
import Social from './style/Social';

const Intro = () => {
    return (
        <Container>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1>Recent Projects</h1>
                    <p>Crafted with love</p>
                </div>

                <div className="flex flex-col items-end gap-4">
                    <Social name='LinkedIn' />
                    <Social name='Github' />
                    <Social name='Twitter' />
                </div>
            </div>
        </Container>
    );
};

export default Intro;
