import Link from 'next/link';
import React from 'react';
import Arrow from '../svg/Arrow';

const ArrowBtn = ({ title, id }) => {
    return (
        <Link
            href={`/projects/${id}`}
            className="group/btn2 flex items-center gap-2 rounded-full transition-all duration-100 hover:drop-shadow drop-shadow-none px-4 py-2 active:scale-95"
        >
            <h1 className="text-xl font-bold text-mx-500 z-40">{title}</h1>
            <i className="ri-arrow-right-line text-mx-500 z-40"></i>
            <span className="bg-mx-300 h-full w-11 z-20 absolute left-0 rounded-full group-hover:w-full file:delay-200 -mr-2 border-transparent border-2 group-hover/btn2:border-mx-500" />
        </Link>
    );
};

export default ArrowBtn;
