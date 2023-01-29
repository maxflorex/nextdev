import React, { useState } from 'react';
import Project from './Project';
import Container from './style/Container';

const ProjectList = ({ data }) => {
    const [showImg, setShowImg] = useState(false);
    const url =
        'https://images.unsplash.com/photo-1672841828271-54340a6fbcd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80';

    return (
        <div className="group bg-mx-100 hover:transition-all hover:duration-1000 duration-1000 hover:bg-white hover:bg-transparent grid grid-cols-12 w-full items-center gap-8 relative overflow-hidden border-2 border-mx-100 transition-all">
            <span className="col-span-1 border-t-2 border-white" />
            <Project setShowImg={setShowImg} showImg={showImg} />
            <img
                src={url}
                alt=""
                className="group-hover:translate-x-1/2 translate-x-full absolute right-0 z-10 w-full transition-all duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 mx-auto flex items-center justify-center w-full group-hover:-translate-y-4 translate-y-16 transition-all group-hover:delay-500 z-20 ease-in-out duration-200">
                <div className="px-3 py-1 rounded-full bg-none group-hover:bg-mx-100">
                    <h2>Icons</h2>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
