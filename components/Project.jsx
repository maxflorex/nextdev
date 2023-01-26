import ArrowBtn from './style/ArrowBtn';

const Project = ({ setShowImg, showImg }) => {
    return (
        <div
            className="col-start-2 col-span-10 py-48 z-20"
            onMouseEnter={() => setShowImg(true)}
            onMouseLeave={() => setShowImg(false)}
        >
            <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex gap-4 items-center">
                    <p className="text-mx-300">01</p>
                    <div className={`${showImg ? 'after:text-mx-100 after:text-opacity-100' : 'after:text-transparent after:text-opacity-0'} after:content-["01"] after:text-8xl  flex items-center after:-ml-8 after:font-black after:transition-all after:duration-500`}>
                        <h2 className='z-10'>Project</h2>
                    </div>
                </div>
                <ArrowBtn title="View project" />
            </div>
        </div>
    );
};

export default Project;
