import React from 'react';
import Arrow from './svg/Arrow';

const Project = () => {
    return (
        <div className="flex justify-between items-center">
            <h3>Project</h3>
            <div className="flex items-center gap-2 before:content-[url(/elipse.svg)] before:-mr-8">
                <h1 className="text-xl font-bold ">View project</h1>
                <Arrow />
            </div>
        </div>
    );
};

export default Project;
