import React from 'react';
import Btn from './Btn';
import Container from './Container';
import Gallery from './Gallery';

const Card = ({ item }) => {
    return (
        <Container>
            <div className="bg-mx-100 w-full p-16 mt-16 grid grid-cols-3">
                <div className="col-span-2">
                    <Gallery item={item} />
                </div>
                <div className="flex flex-col justify-end items-stretch h-full">
                    <div className="">
                        <h1>{item.title}</h1>
                        <p>Web App</p>
                    </div>
                    <Btn title="View Project" />
                </div>
            </div>
        </Container>
    );
};

export default Card;
