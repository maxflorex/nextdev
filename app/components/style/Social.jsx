import React from 'react';

const Social = ({ name, link }) => {
    return (
        <a href={link} target='_blank' className="after:content-[url(/elipse2.svg)] after:-ml-8 after:z-10 flex items-center hover:bg-mx-100 rounded-full pl-8 hover:text-mx-400">
            <p className="z-20">{name}</p>
        </a>
    );
};

export default Social;
