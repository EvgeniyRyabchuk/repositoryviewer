import React from 'react';

const LastItems = () => {
    return (
        <div className="recently-items-wrapper">
            <div className="recently-item">
                <div className="recently-item-inner">
                    <i className="fas fa-file-image"></i>
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <i className="far fa-file-alt"></i>
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>

            <div className="recently-item">
                <div className="recently-item-inner" className="recently-item-inner">
                    <i className="fas fa-file"></i>
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>

            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <i className="far fa-file-video"></i>
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <i className="far fa-file-audio"></i>
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <i className="fas fa-file-archive"></i>
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastItems;