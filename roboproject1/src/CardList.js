import React from 'react';
import Card from './Card';

export default function CardList({robots}) {

    return (
        <div>
            {
                robots.map((robot,index) => {
                    return <Card id={robot.id} name={robot.name} email={robot.email}/>
                })
            }
        </div>
    )
}
