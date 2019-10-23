import React from 'react';
import Card from './Card';

const cardList = ({robots}) => {
    const robotArray = robots.map((item, i) => {
        return <Card key={i} id={item.id} name={item.name} email={item.email} />;
    });
    
    return(
        <div>
            {robotArray}
        </div>
    );
}

export default cardList;