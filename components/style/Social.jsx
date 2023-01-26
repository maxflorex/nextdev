import React from 'react';

const Social = ({ name, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            className="group flex items-center hover:bg-mx-300 rounded-full transition-all bg-mx-500"
        >
            <div className="flex items-center gap-2 px-3 py-2 bg-texture rounded-full">
                <p className='group-hover:block hidden'>{name}</p>
                <i className={`ri-${name.toLowerCase()}-line text-white`}></i>
            </div>
        </a>
    );
};

export default Social;
