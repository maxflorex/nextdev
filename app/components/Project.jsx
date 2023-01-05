import React, { useState } from 'react';
import ArrowBtn from './style/ArrowBtn';

const Project = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="col-start-2 col-span-10 py-48">
            <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex gap-4 items-center">
                    <p className="text-mx-300">01</p>
                    <h2>Project</h2>
                </div>
                <ArrowBtn title="View project" />
            </div>
        </div>
    );
};

export default Project;
