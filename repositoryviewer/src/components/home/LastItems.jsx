import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile, faFileArchive, faFileImage} from '@fortawesome/free-solid-svg-icons'
import {faFileAlt, faFileAudio, faFileVideo} from '@fortawesome/free-regular-svg-icons'

const LastItems = () => {
    return (
        <div className="recently-items-wrapper">
            <div className="recently-item">
                <div className="recently-item-inner">
                    <FontAwesomeIcon icon={faFileImage} />
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <FontAwesomeIcon icon={faFileAlt} />
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>

            <div className="recently-item">
                <div className="recently-item-inner" className="recently-item-inner">
                    <FontAwesomeIcon icon={faFile} />
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>

            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <FontAwesomeIcon icon={faFileVideo} />
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <FontAwesomeIcon icon={faFileAudio} />
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
            <div className="recently-item">
                <div className="recently-item-inner">
                    <FontAwesomeIcon icon={faFileArchive} />
                    <div className="recently-file__header">
                        <h5>Some file 1</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastItems;