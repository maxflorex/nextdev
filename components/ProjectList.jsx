import React, { useContext } from 'react';
import Project from './Project';
import { MyContext } from './context/Context';
import Image from 'next/image';

const ProjectList = () => {
    const { projects } = useContext(MyContext);

    return (
        <>
            {projects &&
                projects.slice(0, 3).map((project, i) => {
                    return (
                        <div
                            className="group group/btn bg-mx-100 hover:transition-all hover:duration-700 duration-1000 hover:bg-white hover:bg-transparent grid grid-cols-12 w-full items-center gap-8 relative overflow-hidden transition-all"
                            key={i}
                        >
                            {/* BAR */}
                            <span className="col-span-1 border-t-2 border-mx-300 group-hover:border-mx-100 group-hover:-translate-x-1/2" />

                            {/* PROJECT */}
                            <Project project={project} i={i} />

                            {/* BANNER */}
                            <div className="group-hover:translate-x-0 translate-x-full w-1/2  absolute right-0 z-10 transition-all duration-500 ease-in-out h-full object-cover hidden lg:block">
                                <Image
                                    src={project.banner.url}
                                    alt="Project banner"
                                    fill
                                    blurDataURL={`/_next/image?url=${project.banner.url}&w=16&q=1`}
                                    placeholder="blur"
                                    quality={50}
                                    className="object-cover"
                                    sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                                />
                            </div>

                            {/* BANNER MOBILE */}
                            <div className="group-hover:-translate-y-0 translate-y-[200%] w-full absolute right-0 bottom-0 z-10 transition-all duration-500 ease-in-out h-1/3 object-cover lg:hidden block">
                                <Image
                                    src={project.banner.url}
                                    alt="Project banner"
                                    fill
                                    blurDataURL={`/_next/image?url=${project.banner.url}&w=16&q=1`}
                                    placeholder="blur"
                                    quality={50}
                                    className="object-cover"
                                    sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                                />
                            </div>

                            {/* TECH */}
                            <div className="absolute bottom-0 mx-auto flex items-center justify-center w-full group-hover:-translate-y-4 translate-y-16 transition-all group-hover:delay-500 z-20 ease-in-out duration-200">
                                <div className="px-4 py-2 rounded-full bg-white drop-shadow-sm">
                                    <div className="flex items-center gap-4">
                                        {project.technologies.map((tech, i) => (
                                            <div
                                                className="group/tt relative w-full"
                                                key={i}
                                            >
                                                <span className="absolute hidden group-hover/tt:flex -ml-4 -top-5 -translate-y-full w-auto px-2 py-1 bg-mx-500 rounded-lg text-center text-mx-100 text-xs after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-mx-500">
                                                    {tech.title}
                                                </span>
                                                <img
                                                    className="w-4 h-4"
                                                    src={tech.logo.url}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default ProjectList;
