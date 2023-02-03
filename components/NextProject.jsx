import React from 'react';
import Container from './styled/Container';

const NextProject = ({router, nextProject, projects, currentIndex}) => {
    return (
        <Container bg2="grid lg:grid-cols-2 grid-cols-1 gap-4" bg="bg-mx-100">
            <div className="flex gap-4 items-center lg:justify-start justify-center">
                <span className="border-t-2 border-mx-500 h-2 w-1/5 lg:block hidden" />
                <h3 className="lg:text-2xl text-xl font-black lg:pb-0 pb-2">
                    Next project
                </h3>
            </div>

            <div className="flex gap-2 lg:justify-end justify-center items-center">
                <button
                    onClick={() => router.back()}
                    className="bg-mx-300 rounded-full py-1 px-4 hover:bg-mx-500 active:scale-95 hover:text-white flex items-center gap-1"
                >
                    <i className="ri-arrow-left-s-fill"></i>
                    Back
                </button>
                <button
                    className="bg-mx-300 rounded-full py-1 px-4 hover:bg-mx-500 active:scale-95 hover:text-white flex items-center gap-1"
                    onClick={nextProject}
                >
                    {currentIndex + 1 === projects.length
                        ? `${projects[0].title}`
                        : `${projects[currentIndex + 1].title}`}
                    <i className="ri-arrow-right-s-fill"></i>
                </button>
            </div>
        </Container>
    );
};

export default NextProject;
