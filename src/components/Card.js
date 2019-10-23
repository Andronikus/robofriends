import React from 'react';

const card = ({id, name, email}) => {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;