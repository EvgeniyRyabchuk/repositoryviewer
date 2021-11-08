import React from 'react';
import {useLocation} from "react-router-dom";

const Error404 = () => {
    let location = useLocation();
    return (
        <div>
            <h1 style={{color: 'red'}}>You have 404 error. Do you mean this page? ({location.pathname})</h1>
        </div>
    );
};

export default Error404;