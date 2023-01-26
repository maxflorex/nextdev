import React, { useState } from 'react';
import Project from './Project';
import Container from './style/Container';

const ProjectList = ({ data }) => {

    const [showImg, setShowImg] = useState(false);
    const url =
        'https://images.unsplash.com/photo-1672841828271-54340a6fbcd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80';

    const imgStyle = `${
        showImg ? 'translate-x-1/2' : 'translate-x-full'
    } absolute right-0 z-10 w-full transition-all duration-700 ease-in-out`;

    return (
        <div className="bg-texture bg-mx-100 hover:transition-all hover:duration-1000 duration-1000 hover:bg-white hover:bg-transparent grid grid-cols-12 w-full items-center gap-8 relative overflow-hidden border-2 border-mx-100 transition-all ">
            <span className="col-span-1 border-t-2 border-white" />
            <Project setShowImg={setShowImg} showImg={showImg} />
            <img src={url} alt="" className={imgStyle} />

        </div>
    );
};

export default ProjectList;
