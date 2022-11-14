import React, { useEffect, useState } from 'react';
import { hygraph, PROJECTS } from './api/graphcms';
import Card from './Card';

const getData = async () => {
    const { projects } = await hygraph.request(PROJECTS);
    return projects;
};

const Cards = () => {
    const [data, setData] = useState([]);
    
    (async () => {
        const items = await getData();
        if (items) {
            setData(items);
        }
    })();

    return (
        <div>
            {data.length > 0 &&
                data.map((item, i) => (
                    <div className="" key={i}>
                        <Card item={item} />
                    </div>
                ))}
        </div>
    );
};

export default Cards;
