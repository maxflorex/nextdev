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
import NextProject from '../../../components/NextProject';
import { motion } from 'framer-motion';

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
    const [expandImage, setExpandImage] = useState(false);
    const [index, setIndex] = useState(0);
    const currentIndex = projects.findIndex((obj) => obj.slug == project.slug);
    const router = useRouter();

    const nextProject = (e) => {
        e.preventDefault();
        if (currentIndex + 1 === projects.length) {
            router.push(`/projects/${projects[0].slug}`);
        } else {
            router.push(`/projects/${projects[currentIndex + 1].slug}`);
        }
    };

    const handleModal = (i) => {
        setExpandImage(true);
        document.body.style.overflow = 'hidden';
        setIndex(i);
    };

    const screenshots = [
        ...project.screenMockups,
        ...project.webMockups,
        ...project.mobileMockups
    ];

    return (
        <div className="flex flex-col min-h-screen justify-between box-border">
            <nav className="col-start-2 col-span-10 flex justify-center py-4 items-center">
                <Link href="/">
                    <Logo />
                </Link>
            </nav>

            <main className="h-full mb-auto">
                <section
                    className="relative bg-cover bg-fixed bg-opacity-30 object-cover bg-center"
                    style={{ backgroundImage: `url(${project.banner.url})` }}
                >
                    <Container bg="bg-texture4 backdrop-blur">
                        <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-end items-center relative gap-4">
                            <div className="flex flex-col">
                                <p className="text-mx-100">Projects</p>
                                <h2 className="text-mx-300 drop-shadow-sm">
                                    {project.title}
                                </h2>
                            </div>
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

                <Container py="lg:py-0">
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
                                        <motion.div
                                            initial={{ scale: 1.1, opacity: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.2,
                                                ease: 'easeOut',
                                                delay: 0.8 * i,
                                            }}
                                            className="max-h-64 relative w-auto h-auto flex justify-center"
                                            key={i}
                                        >
                                            <Image
                                                src={image.url}
                                                alt="Project mockups"
                                                className="object-contain h-auto w-auto cursor-pointer"
                                                width={640}
                                                height={480}
                                                blurDataURL={`/_next/image?url=${image.url}&w=16&q=1`}
                                                placeholder="blur"
                                                quality={50}
                                                onClick={() => handleModal(i)}
                                            />
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>

                <NextProject
                    router={router}
                    nextProject={nextProject}
                    projects={projects}
                    currentIndex={currentIndex}
                />

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
