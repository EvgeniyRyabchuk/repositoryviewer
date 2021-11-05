import React from 'react';
import cl from './DefBtn.module.css'

const DefBtn = ({children, ...probs}) => {
    return (
        <button {...probs} className={cl.button}>
            {children}
        </button>
    );
};

export default DefBtn;