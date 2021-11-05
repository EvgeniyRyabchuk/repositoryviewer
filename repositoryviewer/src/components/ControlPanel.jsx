import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faFolder} from "@fortawesome/free-solid-svg-icons";

const ControlPanel = () => {
    const [isPathHistoryOpen, setIsPathHistoryOpen] = useState(false);

    const pathHistoryOpen = () => {
        setIsPathHistoryOpen(!isPathHistoryOpen);
    }

    return (
        <div className="control-wrapper">
            <div className="control-panel">
                <button className="btn btn-primary control-btn">Add Folder</button>
                <button className="btn btn-primary control-btn">Add File</button>
                <button className="btn btn-danger control-btn">Remove</button>
                <div className="cur-path">
                    <input type="text" disabled
                           value="/path/to/folder/where/should/be/some/files/and/folderssfghjdthjdstgdgfjdgjdghjfhgjfdhgjfhgjfghj"/>

                </div>
                <div className="history-wrapper">
                    <button className="path-history" onClick={pathHistoryOpen}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    <ul className={isPathHistoryOpen ? 'path-list open' : 'path-list'}>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                        <li><FontAwesomeIcon icon={faFolder}/><span>some folder text</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;