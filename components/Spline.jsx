import Spline from '@splinetool/react-spline';
import Container from '../components/styled/Container';
import ArrowBtn from './styled/ArrowBtn';

export default function App() {
    return (
        <div className="w-full max-h-screen bg-mx-500 h-[60vh] relative">
            <div className="absolute w-full h-full backdrop-blur-sm my-auto">
                <Container bg='h-full' bg2='flex items-center justify-start'>
                    <div className="flex flex-col gap-4 text-mx-100 justify-center">
                        <div className="flex gap-1">
                            <h3 className="line-through">Hello World </h3>
                            <h3>I'm Max Flores</h3>
                        </div>
                        <h1 className="lg:text-6xl text-4xl font-bold text-mx-300">
                            UX/UI Designer &
                        </h1>
                        <h1 className="lg:text-6xl text-4xl font-bold">
                            Frontend Engineer
                        </h1>
                        <div className="mr-auto">
                            {/* <Link href="/projects"> */}
                            <ArrowBtn title="See my works" />
                            {/* </Link> */}
                        </div>
                        <div className="absolute -bottom-6 left-0 w-full flex justify-center animate-bounce">
                            <i className="ri-arrow-down-s-fill px-1 py-2 text-mx-500 bg-mx-300 rounded-full"></i>
                        </div>
                    </div>
                </Container>
            </div>
            <Spline scene="https://prod.spline.design/g1zGGvIRWFDTj-mI/scene.splinecode" />
            <div className="absolute -bottom-6 left-0 w-full flex justify-center animate-bounce">
                <i className="ri-arrow-down-s-fill px-1 py-2 text-mx-500 bg-mx-300 rounded-full"></i>
            </div>
        </div>
    );
}
