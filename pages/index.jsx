'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';
import { hygraph, PROJECTS } from './api/graphcms';
import About from '../components/About';
import Footer from '../components/Footer';
import ContactModal from '../components/styled/ContactModal';
import MyProvider from '../components/context/Provider';
import Hero from '../components/Hero';
import { AnimatePresence } from 'framer-motion';

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
            <Hero />
            <Intro />
            <ProjectList />
            <About />
            <AnimatePresence>
                {showContact && <ContactModal setShow={setShowContact} />}
            </AnimatePresence>
            <Footer setShow={setShowContact} />
        </MyProvider>
    );
};

export default page;
