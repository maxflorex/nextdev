import React from 'react';

const Social = ({ name }) => {
    return (
        <div className="after:content-[url(/elipse2.svg)] after:-ml-8 after:z-10 flex items-center">
            <p className="z-20">{name}</p>
        </div>
    );
};

export default Social;
