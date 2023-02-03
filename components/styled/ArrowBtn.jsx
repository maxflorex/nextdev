import Link from 'next/link';
import React from 'react';
import Arrow from '../svg/Arrow';

const ArrowBtn = ({ title, direction }) => {
    return (
        <Link
            href={direction}
            className="group/btn flex items-center gap-2 rounded-full transition-all duration-100 hover:drop-shadow drop-shadow-none px-4 py-2 active:scale-95 relative"
        >
            <h1 className="lg:text-xl lg:font-bold text-sm font-normal text-mx-100 z-40 group-hover/btn:text-mx-500">
                {title}
            </h1>
            <i className="ri-arrow-right-line text-mx-100 z-40 group-hover/btn:text-mx-500"></i>
            <span className="bg-mx-400 h-full w-11 z-20 absolute left-0 rounded-full group-hover:w-full file:delay-200 -mr-2 group-hover/btn:bg-mx-300" />
        </Link>
    );
};

export default ArrowBtn;
