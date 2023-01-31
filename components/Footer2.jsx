import React from 'react';

const Footer2 = () => {
    return (
        <footer className="bg-mx-500 bg-texture flex justify-center py-4 text-white">
            <div className="flex items-center gap-1">
                <i className="ri-copyright-fill text-mx-300" />
                <p className="text-xs pr-4">Copyright Max Flores</p>
            </div>
            <div className="flex gap-1 border-l border-mx-100 pl-4">
                <a
                    href="https://www.linkedin.com/in/maxfloresdev"
                    target="_blank"
                >
                    <i className="ri-linkedin-line hover:text-mx-300" />
                </a>
                <a href="https://www.github.com/maxflorex" target="_blank">
                    <i className="ri-github-line hover:text-mx-300" />
                </a>
                <a href="https://twitter.com/max01011001" target="_blank">
                    <i className="ri-twitter-line hover:text-mx-300" />
                </a>
            </div>
        </footer>
    );
};

export default Footer2;
