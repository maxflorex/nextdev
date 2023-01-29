'use client';

import React, { useContext, useEffect, useState } from 'react';
import Container from '../components/style/Container';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';
import { hygraph, PROJECTS } from '../components/api/graphcms';
import About from '../components/About';
import Footer from '../components/Footer';
import ArrowBtn from '../components/style/ArrowBtn';
import ContactModal from '../components/style/ContactModal';
import MyProvider from '../components/context/Provider';

export const getStaticProps = async () => {
    const data = await hygraph.request(PROJECTS);

    return {
        props: {
            data,
        },
    };
};

const page = ({ data }) => {
    const [showContact, setShowContact] = useState(false);

    return (
        <MyProvider value={data}>
            <Navigation show={setShowContact} />
            <Container bg="min-h-[90vh] flex items-center relative group bg-mx-500 box-border bg-texture4">
                <div className="flex flex-col gap-4 text-mx-100">
                    <div className="flex gap-1">
                        <h3 className="line-through">Hello World </h3>
                        <h3>I'm Max Flores</h3>
                    </div>
                    <h1 className="text-6xl font-bold text-mx-300">
                        UX/UI Designer &
                    </h1>
                    <h1 className="text-6xl font-bold">Full-stack Engineer</h1>
                    <div className="mr-auto">
                        <ArrowBtn title="See my works" />
                    </div>
                    <div className="absolute -bottom-6 left-0 w-full flex justify-center animate-bounce">
                        <i className="ri-arrow-down-s-fill px-1 py-2 text-mx-500 bg-mx-300 rounded-full"></i>
                    </div>
                </div>
            </Container>
            <Intro />
            <ProjectList />
            <About />
            {showContact && <ContactModal setShow={setShowContact} />}
            <Footer setShow={setShowContact} />
        </MyProvider>
    );
};

export default page;
