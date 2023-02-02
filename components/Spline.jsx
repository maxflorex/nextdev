import Spline from '@splinetool/react-spline';
import Container from '../components/styled/Container';

export default function App() {
    return (
        <div className="w-full max-h-screen bg-mx-500 h-[60vh] relative">
            <div className="absolute w-full h-full backdrop-blur-sm">
                <Container bg="">
                    <h1 className="text-white">UI Designer & Developer</h1>
                </Container>
            </div>
            <Spline scene="https://prod.spline.design/g1zGGvIRWFDTj-mI/scene.splinecode" />
            <div className="absolute -bottom-6 left-0 w-full flex justify-center animate-bounce">
                <i className="ri-arrow-down-s-fill px-1 py-2 text-mx-500 bg-mx-300 rounded-full"></i>
            </div>
        </div>
    );
}
