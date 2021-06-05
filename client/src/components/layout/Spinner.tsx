import React from 'react';
import spinner from './spinner.gif'
const Spinner = () => {
    return (
        <div>
           <img width="60px"src={spinner} alt="Loading..." />
        </div>
    );
};

export default Spinner;
