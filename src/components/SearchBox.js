import React from 'react';

const searchBox = ({searchBoxChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="search robots"
                onChange={searchBoxChange}
            />
        </div>
    )
}

export default searchBox;