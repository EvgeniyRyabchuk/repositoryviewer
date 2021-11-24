import React from 'react';
import cl from './Loader.module.css';

const Loader = ({...probs}) => {
    return (
     <div {...probs} className={cl.loader}>Loading...</div>
    );
};

export default Loader;