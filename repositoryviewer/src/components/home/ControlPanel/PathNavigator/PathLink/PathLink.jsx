import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";

const PathLink = ({children, select, index}) => {
    return (
        <li onClick={() => {select(index)}}><FontAwesomeIcon icon={faFolder}/><span>{children}</span></li>
    );
};

export default PathLink;