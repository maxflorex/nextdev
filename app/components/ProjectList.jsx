import React from 'react';
import Project from './Project';
import Container from './style/Container';

const ProjectList = () => {
    return (
        <div className="bg-mx-100 grid grid-cols-12 w-full items-center gap-8">
            <span className="col-span-1 border-t-2 border-white" />
            <Project />
        </div>
    );
};

export default ProjectList;
