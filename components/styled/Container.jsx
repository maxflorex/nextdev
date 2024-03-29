import React from 'react';

const Container = (props) => {
    // BACKGROUND COLORS
    const { bg, bg2, py } = props;

    return (
        <section
            className={`${bg} grid grid-cols-12 ${py ? py : 'lg:py-40 py-24'}`}
        >
            <div className={`${bg2} col-start-2 col-span-10`}>
                {props.children}
            </div>
        </section>
    );
};

export default Container;
