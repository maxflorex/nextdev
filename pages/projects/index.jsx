import Link from 'next/link';
import React from 'react';
import Footer2 from '../../components/Footer2';
import Project from '../../components/Project';
import Logo from '../../components/svg/Logo';
import { hygraph, PROJECTS } from '../api/graphcms';

export const getStaticProps = async () => {
    const projects = await hygraph.request(PROJECTS);

    return {
        props: {
            projects,
        },
    };
};

const page = ({ projects }) => {
    return (
        <div className="flex flex-col min-h-screen justify-between box-border">
            <nav className="col-start-2 col-span-10 flex justify-center py-4 items-center z-10">
                <Link href="/">
                    <Logo />
                </Link>
            </nav>

            <main className="h-full mb-auto">
                <section className="bg-mx-500 relative bg-texture4 h-[40vh] flex items-center">
                    <div className="flex justify-between items-center py-8 relative container mx-auto">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-mx-300 drop-shadow-sm">
                                - My Work
                            </h1>
                            <p className="w-1/3 self-start text-white">
                                I have been lucky enough to work on a variety of
                                different projects over the past few years. I
                                have learned and grown from each one, and today
                                I want to share some of my recent favorite
                                projects with you.
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="flex items-center gap-2 py-1 px-4 bg-white rounded-full next-link"
                        >
                            <i className="ri-home-line"></i>
                            <p>Home</p>
                        </Link>
                    </div>
                </section>

                {projects?.projects.map((project, i) => {
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
            </main>

            <Footer2 />
        </div>
    );
};

export default page;
