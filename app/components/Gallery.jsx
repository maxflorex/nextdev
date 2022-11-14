import Image from 'next/image';
import React, { useState } from 'react';

const Gallery = ({ item }) => {
    const [newI, setNewI] = useState(0);

    return (
        <div className="flex gap-4 justify-between items-start relative w-full">
            <Image
                // loader={myLoader}
                src={item.screenMockups[newI].url}
                alt="Banner"
                width={200}
                height={100}
                className="w-auto h-auto"
            />
            {/* <div className="absolute xl:top-0 -right-8 bottom-0"> */}
                <div className="grid gap-4">
                    {item.screenMockups.map((url, i) => (
                        <Image
                            src={url.url}
                            width={48}
                            height={48}
                            alt="Mockups"
                            className={`w-auto object-cover cursor-pointer border-mx-100 ${
                                i === newI ? 'border-2' : 'opacity-40'
                            }`}
                            onClick={() => setNewI(i)}
                            key={i}
                        />
                    ))}
                </div>
            {/* </div> */}
        </div>
    );
};

export default Gallery;

// {item.screenMockups.map((pic) => (
