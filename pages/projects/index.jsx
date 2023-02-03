import Link from 'next/link';
import React, { useEffect, useMemo } from 'react';
import Footer2 from '../../components/Footer2';
import Project from '../../components/Project';
import Logo from '../../components/svg/Logo';
import Container from '../../components/styled/Container';
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
    const random = useMemo(() => Math.floor(Math.random() * 6), []);

    return (
        <div className="flex flex-col min-h-screen justify-between box-border">
            <nav className="col-start-2 col-span-10 flex justify-center py-4 items-center z-10">
                <Link href="/">
                    <Logo />
                </Link>
            </nav>

            <main className="h-full mb-auto">
                <div
                    className="bg-center bg-cover bg-fixed"
                    style={{
                        backgroundImage: `url(${projects.projects[random]?.banner.url})`,
                    }}
                >
                    <Container
                        bg="bg-black/80 bg-texture4 backdrop-blur-sm"
                        py="lg:py-32 py-24"
                    >
                        <div className="flex lg:flex-row flex-col items-center lg:justify-between gap-2">
                            <div className="flex flex-col lg:items-start items-center">
                                <h1 className="text-mx-300 drop-shadow-sm">
                                    - My Work -
                                </h1>
                                <p className="lg:w-1/3 w-full self-start text-mx-100">
                                    The past few years have presented me with
                                    incredible opportunities to explore and grow
                                    through various projects. {''}
                                    <span className="font-bold">
                                        I'm eager to share some of my most
                                        cherished projects with you today.
                                    </span>
                                </p>
                            </div>
                            <Link
                                href="/"
                                className="flex items-center gap-2 py-1 px-4 bg-white hover:bg-mx-300 rounded-full next-link lg:mr-0 mt-4 lg:mt-0"
                            >
                                <i className="ri-home-line"></i>
                                <p>Home</p>
                            </Link>
                        </div>
                    </Container>
                </div>

                {projects?.projects.map((project, i) => {
                    return (
                        <div
                            className="group group/btn bg-mx-100 hover:transition-all hover:duration-700 duration-1000 hover:bg-white hover:bg-transparent grid grid-cols-12 w-full items-center gap-8 relative overflow-hidden transition-all"
                            key={i}
                        >
                            <span className="col-span-1 border-t-2 border-mx-300 group-hover:border-mx-100 group-hover:-translate-x-1/2" />
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
                                            <div
                                                className="group/tt relative w-full"
                                                key={i}
                                            >
                                                <span className="absolute hidden group-hover/tt:flex -ml-4 -top-5 -translate-y-full w-auto px-2 py-1 bg-mx-500 rounded-lg text-center text-mx-100 text-xs after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-mx-500">
                                                    {tech.title}
                                                </span>
                                                <img
                                                    className="w-5 h-5"
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
            </main>

            <Footer2 />
        </div>
    );
};

export default page;
