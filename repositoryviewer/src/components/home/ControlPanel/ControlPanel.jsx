import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faFolder} from "@fortawesome/free-solid-svg-icons";
import PathNavigator from "./PathNavigator/PathNavigator";

const ControlPanel = ({showModal, curPath, changePath}) => {


    return (
        <div className="control-wrapper">
            <div className="control-panel">

                <button type="button" onClick={showModal} className="btn btn-primary control-btn">View User Repos</button>
                <button className="btn btn-primary control-btn">Log out</button>
                <button className="btn btn-danger control-btn">Remove</button>
                <div className="cur-path">
                    <input type="text" disabled
                           value={'/'+curPath}/>

                </div>
                <PathNavigator curPath={curPath} changePath={changePath} />
            </div>
        </div>
    );
};

export default ControlPanel;