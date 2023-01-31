'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Footer2 from '../../../components/Footer2';
import Logo from '../../../components/svg/Logo';
import { hygraph, PROJECT, PROJECTS } from '../../api/graphcms';

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

    return {
        props: {
            project,
        },
    };
};

const page = ({ project }) => {
    return (
        <div className="flex flex-col min-h-screen justify-between box-border">
            <nav className="col-start-2 col-span-10 flex justify-center py-4 items-center z-10">
                <Link href="/">
                    <Logo />
                </Link>
            </nav>

            <main className="h-full mb-auto">
                <section className="bg-mx-300 relative">
                    <img
                        src={project.banner.url}
                        alt=""
                        className="absolute w-full h-full object-cover top-0"
                    />
                    <div className="flex-jb py-8 items-end h-64 relative container mx-auto">
                        <h2 className="text-mx-300 drop-shadow-sm">
                            - {project.title} -
                        </h2>
                        <Link
                            href="/"
                            className="flex items-center gap-2 py-1 px-4 bg-white rounded-full next-link"
                        >
                            <i className="ri-arrow-left-line"></i>
                            <p>Go Back</p>
                        </Link>
                    </div>
                </section>

                <section className="flex gap-2 container mx-auto mt-8">
                    <span className="px-4 py-1 rounded-full bg-mx-500 text-mx-100 flex items-center bg-texture2">
                        <h4>Role</h4>
                    </span>
                    <ul className="px-4 py-2 flex gap-4 p-2 bg-texture rounded-full items-center">
                        <li>UX/UI</li>
                        <li>.</li>
                        <li>Front-end</li>
                        <li>.</li>
                        <li>Backend</li>
                    </ul>
                </section>

                {/* STICKY COLUMN */}
                <section className="grid grid-cols-10 gap-2 container mx-auto my-12 h-full w-full">
                    <div className="xl:col-span-3 col-span-5 relative">
                        <div className="sticky top-8">
                            <div className="flex gap-4 items-center mb-8">
                                <h3 className="font-bold text-xl">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2 items-center -mb-[6px] text-mx-400">
                                    <a
                                        href={project.url}
                                        className="hover:text-black"
                                        target={'_blank'}
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

                            <p className="pr-8">{project.description}</p>

                            <div className="flex flex-col items-start mt-16 gap-4">
                                <p className="font-medium flex items-center gap-2 text-sm">
                                    Tech Stack{' '}
                                    <i className="ri-arrow-down-s-line"></i>
                                </p>
                                <div className="flex gap-4 bg-texture px-6 py-2 rounded-full">
                                    {project.technologies.map((tech, i) => (
                                        <img
                                            src={tech.logo.url}
                                            alt="Tech stack"
                                            key={i}
                                            className="w-4 h-4"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-7 col-span-5 flex flex-col gap-8">
                        {project.webMockups.map((image, i) => (
                            <div className="w-full h-72 relative">
                                <Image
                                    src={image.url}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                        {project.mobileMockups.map((image, i) => (
                            <div className="w-full h-72 relative">
                                <Image
                                    src={image.url}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-texture py-32">
                    <div className="container mx-auto grid grid-cols-10 items-center gap-6">
                        <span className="col-span-1 border-t-2 border-mx-500 h-2" />
                        <div className="col-span-4">
                            <h3 className="text-2xl font-black">
                                Next project
                            </h3>
                        </div>

                        <div className="col-span-5 w-full">
                            <div className="flex gap-2 justify-end items-center">
                                <button className="bg-mx-300 rounded-full py-1 px-4 hover:bg-mx-500 active:scale-95 hover:text-white">
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
        </div>
    );
};

export default page;
