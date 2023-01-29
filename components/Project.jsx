import ArrowBtn from './style/ArrowBtn2';

const Project = ({ project, i }) => {
    return (
        <div className="col-start-2 col-span-10 py-48 z-20">
            <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex gap-4 items-center">
                    <p className="text-mx-300">{i + 1}</p>
                    <div className="flex items-center relative">
                        <h2 className="z-10">{project.title}</h2>
                        <p className='text-mx-100 text-8xl font-bold absolute -right-10 bg-clip-text bg-texture group-hover:text-transparent'>0{i + 1}</p>
                    </div>
                </div>
                <ArrowBtn title="View Project" />
            </div>
        </div>
    );
};

export default Project;
