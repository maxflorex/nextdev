import React from 'react';
import Arrow from '../svg/Arrow';

const ArrowBtn = ({ title, direction }) => {



    return (
        <a href='#' className="flex items-center gap-2 before:content-[url(/elipse.svg)] before:-mr-8 hover:bg-white hover:rounded-full pr-8 transition-all duration-700">
            <h1 className="text-xl font-bold ">{title}</h1>
            <Arrow />
        </a>
    );
};

export default ArrowBtn;
