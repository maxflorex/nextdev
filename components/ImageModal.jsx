import React, { useEffect } from 'react';
import useKeyPress from './hooks/useKeyPress';

const ImageModal = ({ setExpandImage, index, setIndex, screenshots }) => {
    const exitModal = (e) => {
        e.preventDefault();

        if (e.target.classList.contains('close')) {
            setExpandImage(false);
            document.body.style.overflow = 'visible';
        }
    };

    const length = screenshots.length;

    const nextImage = (e) => {
        e.preventDefault();

        if (index + 1 < length) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    const prevImage = (e) => {
        e.preventDefault();

        if (index === 0) {
            setIndex(length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const escape = useKeyPress('Escape');

    useEffect(() => {
        if (escape) {
            setExpandImage(false);
            document.body.style.overflow = 'visible';
        }
    }, [escape]);

    return (
        <div className="fixed top-0 left-0 bg-mx-500/70 w-full h-full backdrop-blur-sm box-border">
            <button
                className="px-2 py-2 bg-mx-400 hover:bg-mx-300 rounded-xl absolute lg:top-6 lg:right-6 top-4 right-4 z-[800] flex items-center close"
                onClick={exitModal}
            >
                <i className="ri-close-fill close leading-none"></i>
            </button>
            <div
                className="flex items-center justify-center h-full close text-mx-100"
                onClick={exitModal}
            >
                <img
                    src={screenshots[index].url}
                    alt="Large image"
                    className="lg:w-3/4 lg:h-3/4 w-full h-full object-contain px-4 py-8"
                />
                <button
                    className="absolute hover:text-mx-300 left-4"
                    onClick={prevImage}
                >
                    <i className="ri-arrow-left-s-line lg:text-6xl text-4xl"></i>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute hover:text-mx-300 right-4"
                >
                    <i className="ri-arrow-right-s-line lg:text-6xl text-4xl"></i>
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
