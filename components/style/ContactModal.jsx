import React from 'react';

const ContactModal = ({ setShow }) => {
    // EXIT MODAL
    const exitModal = (e) => {
        if (e.target.classList.contains('close')) {
            setShow(false);
        }
    };

    return (
        <div className="h-screen w-screen fixed top-0 z-30 overflow-hidden box-content m-auto flex items-center justify-center">
            <div className="flex flex-col justify-center items-center bg-mx-500 w-5/6 h-5/6 relative rounded">
                {/* FORM */}
                <form
                    action=""
                    className="text-white flex w-auto justify-center flex-col gap-4"
                >
                    <h1>Get in touch!</h1>
                    <input type="text" placeholder="Enter Email..." />
                    <textarea
                        placeholder="Send me a message..."
                        className="h-32"
                    />
                    <button className="px-4 py-2 bg-mx-300 rounded">
                        Send
                    </button>
                </form>

                {/* SOCIAL MEDIA */}
                <div className="mt-16 text-mx-100 flex flex-col items-center">
                    <p> - Or follow me - </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="https://www.linkedin.com/in/maxfloresdev"
                            target="_blank"
                        >
                            <i className="ri-linkedin-line hover:text-mx-300" />
                        </a>
                        <a
                            href="https://www.github.com/maxflorex"
                            target="_blank"
                        >
                            <i className="ri-github-line hover:text-mx-300" />
                        </a>
                        <a
                            href="https://twitter.com/max01011001"
                            target="_blank"
                        >
                            <i className="ri-twitter-line hover:text-mx-300" />
                        </a>
                    </div>
                </div>

                {/* CLOSE */}
                <div
                    className="absolute top-4 right-4 hover:scale-110 cursor-pointer"
                    onClick={exitModal}
                >
                    <i className="ri-close-fill p-2 bg-mx-300 rounded hover:bg-mx-400 close" />
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
