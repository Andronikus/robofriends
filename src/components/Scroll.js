import React from 'react';

const scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', border: '2px solid black', height: '700px'}}>
            {props.children}
        </div>
    );

}

export default scroll;