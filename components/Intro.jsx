import Container from './styled/Container';
import Social from './styled/Social';

const Intro = () => {
    return (
        <Container bg='bg-texture'>
            <div className="grid grid-cols-10 gap-6 items-center" id="works">
                <span className="col-span-1 border-t-2 border-mx-500 h-2 -mt-16" />
                <div className="flex flex-col col-span-5">
                    <h1>Recent Projects</h1>
                    <p className="flex items-center gap-1 w-2/3">
                    The past few years have presented me with incredible opportunities to explore and grow through various projects. I'm eager to share some of my most cherished projects with you today.
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2 col-span-4">
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
