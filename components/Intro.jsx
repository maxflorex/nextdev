import Container from './styled/Container';
import Social from './styled/Social';

const Intro = () => {
    return (
        <Container bg='bg-texture'>
            <div className="grid grid-cols-10 gap-6 items-center" id="works">
                <span className="col-span-1 border-t-2 border-mx-500 h-2 -mt-16 lg:block hidden" />
                <div className="flex flex-col lg:col-span-5 col-span-10">
                    <h1>Recent Projects</h1>
                    <p className="flex items-center gap-1 lg:w-2/3 w-full">
                    The past few years have presented me with incredible opportunities to explore and grow through various projects. I'm eager to share some of my most cherished projects with you today.
                    </p>
                    <h1 className='lg:hidden block text-mx-400'><i className="ri-arrow-down-s-line animate-pulse"></i></h1>
                </div>

                <div className="lg:flex-col items-end gap-2 lg:col-span-4 col-span-10 justify-cente lg:flex hidden">
                    <Social
                        name="LinkedIn"
                        link="https://www.linkedin.com/in/maxfloresdev"
                    />
                    <Social
                        name="Github"
                        link="https://www.github.com/maxflorex"
                    />
                    <Social
                        name="Twitter"
                        link="https://twitter.com/max01011001"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Intro;
