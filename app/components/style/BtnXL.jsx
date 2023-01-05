import React from 'react';

const BtnXL = ({ children }) => {
    return (
        <button className="bg-mx-300 px-4 py-2 text-mx-500 rounded-full hover:scale-105 hover:bg-mx-400 hover:text-mx-500">
            {children}
        </button>
    );
};

export default BtnXL;
