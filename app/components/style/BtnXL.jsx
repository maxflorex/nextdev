import React from 'react';

const BtnXL = (props) => {
    return (
        <button className="bg-mx-300 p-4 mr-auto mt-4 hover:bg-mx-400 hover:text-mx-100">
            {props.title}
        </button>
    );
};

export default BtnXL;
