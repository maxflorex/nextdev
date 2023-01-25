import ArrowBtn from './style/ArrowBtn';

const Project = ({ setShowImg }) => {
    return (
        <div
            className="col-start-2 col-span-10 py-48 z-20"
            onMouseEnter={() => setShowImg(true)}
            onMouseLeave={() => setShowImg(false)}
        >
            <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex gap-4 items-center">
                    <p className="text-mx-300">01</p>
                    <div className='after:content-["01"] after:text-8xl after:text-mx-100 flex items-center after:-ml-8 after:font-black'>
                        <h2 className='z-10'>Project</h2>
                    </div>
                </div>
                <ArrowBtn title="View project" />
            </div>
        </div>
    );
};

export default Project;
