import React from 'react';

const ReposViewTable = () => {
    return (
        <div className="file-list-wrapper">
            <div className="file-list-container">
                <div className="list-header-wrapper">
                    <div className="list-header-container">
                        <div className="d-flex align-items-center">
                            <i id="folder-back" className="fas fa-undo-alt"></i>
                            <span className="header-name">Name</span>
                        </div>
                        <div className="file-metadata">
                            <span className="type">Type of file</span>
                            <span className="last-change">Date</span>
                            <span className="size">Size</span>
                        </div>
                    </div>
                </div>
                <ul id="files">
                    <li>
                        <div className="li-header folder">
                            <div className="d-flex align-items-center">
                                <div className="ff-icon">
                                    <i className="fas fa-chevron-down"></i>
                                    {/*<i class="fas fa-chevron-up"></i>*/}
                                </div>
                                <span className="name">Some Folder or File name</span>
                            </div>
                            <div className="file-metadata">
                                <span className="type">folder/file</span>
                                <span className="last-change">01.01.1980</span>
                                <span className="size">15KB</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ReposViewTable;