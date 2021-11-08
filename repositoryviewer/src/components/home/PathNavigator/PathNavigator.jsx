import React, {useEffect, useMemo, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faFolder} from "@fortawesome/free-solid-svg-icons";
import PathLink from "../PathLink/PathLink";

const PathNavigator = ({curPath, changePath}) => {
    const [isPathHistoryOpen, setIsPathHistoryOpen] = useState(false);

    const pathHistoryOpen = () => {
        setIsPathHistoryOpen(!isPathHistoryOpen);
    }

    const folderList = useMemo(() => {
        const arr = curPath.split('/');
        if(arr[0] === '') arr[0] = '/';
        return arr;
    }, [curPath])

    const folderSelect = (index) => {
        const arr = curPath.split('/');
        const count = arr.length - (index + 1);
        console.log(count, index + count);
        let pathBack = arr.splice(0, index).join('/');
        if(pathBack === '') pathBack = '';
        changePath(pathBack, true);
    }

    return (
        <div className="history-wrapper">
            <button className="path-history" onClick={pathHistoryOpen}>
                <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <ul className={isPathHistoryOpen ? 'path-list open' : 'path-list'}>
                { folderList.map((e, index) =>
                    <PathLink key={index} index={index} select={folderSelect}>{e}</PathLink>
                )}
            </ul>
        </div>
    );
};

export default PathNavigator;