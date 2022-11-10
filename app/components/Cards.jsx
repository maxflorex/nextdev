import React, { useEffect, useState } from 'react';
import { hygraph, PROJECTS } from './api/graphcms';
import Card from './Card';

const getData = async () => {
    const { projects } = await hygraph.request(PROJECTS);
    return projects;
};

const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const items = await getData();
            if (items) {
                setData(items);
            }
        };
        getProjects();
    }, []);

    return (
        <div>
            {data.length > 0 &&
                data.map((item) => (
                    <div className="" key={item.id}>
                        <Card item={item} />
                    </div>
                ))}
        </div>
    );
};

export default Cards;
