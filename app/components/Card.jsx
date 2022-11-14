import React from 'react';
import Gallery from './Gallery';
import { Container, Title, Icon, Btn } from '../components';

const Card = ({ item }) => {
    return (
        <Container>
            <div className="bg-mx-100 w-full p-16 mt-16 grid grid-cols-3 gap-8 bg-subtle-pattern">
                <div className="col-span-2">
                    <Gallery item={item} />
                </div>
                <div className="flex flex-col justify-between items-stretch h-full">
                    <div className="flex flex-col justify-end w-full text-right">
                        <Title>{item.title}</Title>
                        <p>- Web App -</p>
                        <div className="flex justify-end mt-2 gap-2">
                            <Icon icon="window" />
                            <Icon icon="code" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Btn title="View Project" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Card;
