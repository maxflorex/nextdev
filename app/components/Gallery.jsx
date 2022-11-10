import Image from 'next/image';
import React from 'react';

const Gallery = ({ item }) => {

    return (
            <Image
                // loader={myLoader}
                src={item.banner.url}
                alt="Banner"
                width={200}
                height={100}
                className='w-auto h-auto'
            />
    );
};

export default Gallery;
