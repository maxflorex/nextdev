'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
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
    console.log(project);

    return (
        <div className="flex flex-col min-h-screen justify-between box-border">
            <nav className="col-start-2 col-span-10 flex justify-center py-4 items-center z-10">
                <Link href="/">
                    <Logo />
                </Link>
            </nav>

            <main className="h-full mb-auto">
                <article className="bg-mx-300 h-80">
                    <section className="flex justify-between py-8 items-end h-full container mx-auto">
                        <h1>Project name</h1>
                        <Link
                            href="/"
                            className="flex items-center gap-2 py-1 px-4 bg-white rounded-full next-link"
                        >
                            <i className="ri-arrow-left-line"></i>
                            <p>Go Back</p>
                        </Link>
                    </section>

                    <section className="flex gap-2 container mx-auto mt-8 mb-4">
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

                    <section className="grid grid-cols-10 gap-12 container mx-auto my-12">
                        <div className="col-span-5">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Debitis a saepe voluptas
                                explicabo omnis cupiditate pariatur quis ea
                                adipisci rem, perferendis dolorem ipsa deleniti
                                aut amet possimus ducimus neque ad quidem odit
                                officiis aspernatur corporis, beatae in? Dolorem
                                nobis illum, molestiae quis adipisci sequi amet,
                                eum est voluptatibus nemo deleniti eius et
                                rerum! Tenetur, iste? Exercitationem?
                            </p>
                        </div>
                        <div className="col-span-5 flex flex-col gap-8">
                            <h1 className="pb-8 bg-mx-300 h-48">Hello</h1>
                            <h1 className="bg-mx-400 h-64">Wallakia</h1>
                        </div>
                    </section>

                    <section className="bg-texture py-32">
                        <div className="container mx-auto grid grid-cols-10 items-center gap-6">
                            <span className="col-span-1 border-t-2 border-mx-500 h-2" />
                            <div className="col-span-4">
                                <h3 className="text-2xl">Next project</h3>
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

                    <footer className="bg-mx-500 bg-texture flex justify-center py-4 text-white">
                        <div className="flex items-center gap-1">
                            <i className="ri-copyright-fill text-mx-300" />
                            <p className="text-xs pr-4">Copyright Max Flores</p>
                        </div>
                        <div className="flex gap-1 border-l border-mx-100 pl-4">
                            <a
                                href="https://www.linkedin.com/in/maxfloresdev"
                                target="_blank"
                            >
                                <i className="ri-linkedin-line hover:text-mx-300" />
                            </a>
                            <a
                                href="https://www.github.com/maxflorex"
                                target="_blank"
                            >
                                <i className="ri-github-line hover:text-mx-300" />
                            </a>
                            <a
                                href="https://twitter.com/max01011001"
                                target="_blank"
                            >
                                <i className="ri-twitter-line hover:text-mx-300" />
                            </a>
                        </div>
                    </footer>
                </article>
            </main>
            {/* <Footer setShow={setShowContact} /> */}
        </div>
    );
};

export default page;
