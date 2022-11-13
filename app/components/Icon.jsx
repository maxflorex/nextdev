import React from 'react';

const Icon = (props) => {
    return (
        <a href={props.url}>
            <i className={`ri-${props.icon}-line p-2 hover:text-mx-400 text-mx-500 cursor-pointer`} />
        </a>
    );
};

export default Icon;
