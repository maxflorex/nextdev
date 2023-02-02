'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer2 from '../../../components/Footer2';
import ImageModal from '../../../components/ImageModal';
import Logo from '../../../components/svg/Logo';
import { hygraph, PROJECT, PROJECTS } from '../../api/graphcms';
import Container from '../../../components/styled/Container';

export const getStaticPaths = async () => {
    const { projects } = await hygraph.request(PROJECTS);

    const paths = projects.map((item) => {
        return {
            params: {
                slug: item.slug.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;

    const variables = {
        slug,
    };

    const { project } = await hygraph.request(PROJECT, variables);
    const { projects } = await hygraph.request(PROJECTS);

    return {
        props: {
            project,
            projects,
        },
    };
};

const page = ({ project, projects }) => {
    // const nextProject = projects.filter((element) => {
    //     if (element.slug === project.slug) {
    //         return true;
    //     }

    //     return false;
    // });

    // console.log(nextProject);

    const [expandImage, setExpandImage] = useState(false);
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const screenshots = project.webMockups.concat(project.mobileMockups);

    const handleModal = (i) => {
        setExpandImage(true);
        document.body.style.overflow = 'hidden';
        setIndex(i);
    };

    return (
        <div className="flex flex-col min-h-screen justify-between box-border">
            <nav className="col-start-2 col-span-10 flex justify-center py-4 items-center z-10">
                <Link href="/">
                    <Logo />
                </Link>
            </nav>

            <main className="h-full mb-auto">
                <section
                    className="relative bg-cover bg-fixed bg-opacity-30 object-cover"
                    style={{ backgroundImage: `url(${project.banner.url})` }}
                >
                    <Container bg="bg-mx-500/80 bg-texture4 ">
                        <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-end items-center relative gap-4">
                            <h2 className="text-mx-300 drop-shadow-sm">
                                - {project.title} -
                            </h2>
                            <button
                                onClick={() => router.back()}
                                className="flex items-center gap-2 py-1 px-4 bg-white hover:bg-mx-300 rounded-full next-link"
                            >
                                <i className="ri-arrow-left-line"></i>
                                <p>Go Back</p>
                            </button>
                        </div>
                    </Container>
                </section>

                <Container py='lg:py-0'>
                    <section className="flex flex-wrap lg:justify-start justify-center gap-2 my-8">
                        <span className="px-4 py-1 rounded-full bg-mx-500 text-mx-100 flex items-center bg-texture2 lg:text-sm text-xs">
                            <h4>Role</h4>
                        </span>
                        <ul className="px-4 py-2 flex gap-4 p-2 bg-texture rounded-full items-center lg:text-sm text-xs">
                            <li>UX/UI</li>
                            <li>.</li>
                            <li>Front-end</li>
                            <li>.</li>
                            <li>Backend</li>
                        </ul>
                    </section>
                </Container>

                {/* STICKY COLUMN */}
                <section className="grid grid-cols-12">
                    <div className="col-span-10 col-start-2">
                        <div className="grid grid-cols-10 gap-8">
                            <div className="lg:col-span-5 col-span-10 relative">
                                <div className="sticky top-8">
                                    <div className="flex gap-4 items-center mb-8">
                                        <h3 className="font-bold text-xl">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2 items-center -mb-[6px] text-mx-400">
                                            <a
                                                href={`https://${project.url}`}
                                                className="hover:text-black"
                                                target="_blank"
                                            >
                                                <i className="ri-link-m"></i>
                                            </a>
                                            <a
                                                href={project.github}
                                                className="hover:text-black"
                                                target={'_blank'}
                                            >
                                                <i className="ri-github-fill"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <p className="lg:pr-8 pr-0">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-col lg:items-start items-center lg:mt-16 mt-8 mb-8 lg:mb-0 gap-4">
                                        <p className="font-medium flex items-center gap-2 text-sm lg:pl-4 pl-0">
                                            Tech Stack{' '}
                                            <i className="ri-arrow-down-s-line"></i>
                                        </p>
                                        <div className="flex gap-4 bg-mx-100 px-6 py-2 rounded-full">
                                            {project.technologies.map(
                                                (tech, i) => (
                                                    <div
                                                        className="group/tt relative w-full"
                                                        key={i}
                                                    >
                                                        <span className="absolute hidden group-hover/tt:flex -ml-4 -top-5 -translate-y-full w-auto px-2 py-1 bg-mx-500 rounded-lg text-center text-mx-100 text-xs after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-mx-500">
                                                            {tech.title}
                                                        </span>
                                                        <img
                                                            className="lg:w-5 w-4 lg:h-5 h-4"
                                                            src={tech.logo.url}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 col-span-10 flex flex-col gap-8 mb-8">
                                {screenshots &&
                                    screenshots.map((image, i) => (
                                        <div
                                            className="max-h-64 relative w-auto h-auto flex justify-center"
                                            key={i}
                                        >
                                            <Image
                                                src={image.url}
                                                alt="Project mockups"
                                                className="object-contain h-auto w-auto"
                                                width={640}
                                                height={480}
                                                onClick={() => handleModal(i)}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-12 bg-texture lg:py-32 py-16">
                    <div className="col-start-2 col-span-10">
                        {/* <span className="col-span-1 border-t-2 border-mx-500 h-2 lg:block hidden" /> */}
                        <div className="lg:col-span-4 col-span-10">
                            <h3 className="text-2xl font-black lg:pb-0 pb-2">
                                Next project
                            </h3>
                        </div>

                        <div className="lg:col-span-5 col-span-10 w-full">
                            <div className="flex gap-2 lg:justify-end justify-start items-center">
                                <button
                                    onClick={() => router.back()}
                                    className="bg-mx-300 rounded-full py-1 px-4 hover:bg-mx-500 active:scale-95 hover:text-white"
                                >
                                    Prev
                                </button>
                                <button className="bg-mx-300 rounded-full py-1 px-4 hover:bg-mx-500 active:scale-95 hover:text-white">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer2 />
            </main>

            {expandImage && (
                <ImageModal
                    setExpandImage={setExpandImage}
                    index={index}
                    setIndex={setIndex}
                    screenshots={screenshots}
                />
            )}
        </div>
    );
};

export default page;
