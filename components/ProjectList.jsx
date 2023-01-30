import React, { useContext, useState } from 'react';
import Project from './Project';
import { MyContext } from './context/Context';

const ProjectList = () => {
    const { projects } = useContext(MyContext);

    return (
        <>
            {projects &&
                projects.slice(3, 6).map((project, i) => {
                    return (
                        <div
                            className="group group/btn bg-mx-100 hover:transition-all hover:duration-700 duration-1000 hover:bg-white hover:bg-transparent grid grid-cols-12 w-full items-center gap-8 relative overflow-hidden transition-all"
                            key={i}
                        >
                            <span className="col-span-1 border-t-2 border-mx-300" />
                            <Project project={project} i={i} />
                            <img
                                src={project.banner.url}
                                alt=""
                                className="group-hover:translate-x-0 translate-x-full w-1/2  absolute right-0 z-10 transition-all duration-500 ease-in-out h-full object-cover"
                            />
                            <div className="absolute bottom-0 mx-auto flex items-center justify-center w-full group-hover:-translate-y-4 translate-y-16 transition-all group-hover:delay-500 z-20 ease-in-out duration-200">
                                <div className="px-4 py-2 rounded-full bg-texture bg-white">
                                    <div className="flex items-center gap-4">
                                        {project.technologies.map((tech, i) => (
                                            <img
                                                className="w-5 h-5"
                                                key={i}
                                                src={tech.logo.url}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            {/* <div className="w-full flex justify-center">
                <button className="btn">+ Projects </button>
            </div> */}
        </>
    );
};

export default ProjectList;
