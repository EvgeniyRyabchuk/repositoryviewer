import React from 'react';

const ControlPanel = () => {
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
                    <button className="path-history">
                        <i className="fas fa-caret-down"></i>
                    </button>
                    <ul className="path-list">
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                        <li><i className="fas fa-folder"></i><span>some folder text</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;