import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile, faFileArchive, faFileImage} from '@fortawesome/free-solid-svg-icons'
import {faFileAlt, faFileAudio, faFileVideo} from '@fortawesome/free-regular-svg-icons'
import LastItem from "./LastItem";

const LastItems = ({lastItems}) => {
    const types = [
        {extension: '.png|.jpeg|.jpg', type: 'image', icon: faFileImage},
        {extension: '.txt', type: 'text', icon: faFileAlt},
        {extension: '.mp4', type: 'video', icon: faFileVideo},
        {extension: '.mp3', type: 'audio', icon: faFileAudio},
        {extension: '.zip|.rar', type: 'audio', icon: faFileArchive},
    ];
    const defType = {extension: '*', type: 'any', icon: faFile};
    return (
        <div className="recently-items-wrapper">
            {lastItems.map(e =>
                <LastItem key={e.sha} item={e} types={types} defType={defType}/>
            )}
            {lastItems.length === 0 &&
                <h1 className="h-center">You not have recently items</h1>
            }
            {/*<div className="recently-item">*/}
            {/*    <div className="recently-item-inner">*/}
            {/*        <FontAwesomeIcon icon={faFileImage} />*/}
            {/*        <div className="recently-file__header">*/}
            {/*            <h5>Some file 1</h5>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="recently-item">*/}
            {/*    <div className="recently-item-inner">*/}
            {/*        <FontAwesomeIcon icon={faFileAlt} />*/}
            {/*        <div className="recently-file__header">*/}
            {/*            <h5>Some file 1</h5>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="recently-item">*/}
            {/*    <div className="recently-item-inner" className="recently-item-inner">*/}
            {/*        <FontAwesomeIcon icon={faFile} />*/}
            {/*        <div className="recently-file__header">*/}
            {/*            <h5>Some file 1</h5>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div className="recently-item">*/}
            {/*    <div className="recently-item-inner">*/}
            {/*        <FontAwesomeIcon icon={faFileVideo} />*/}
            {/*        <div className="recently-file__header">*/}
            {/*            <h5>Some file 1</h5>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="recently-item">*/}
            {/*    <div className="recently-item-inner">*/}
            {/*        <FontAwesomeIcon icon={faFileAudio} />*/}
            {/*        <div className="recently-file__header">*/}
            {/*            <h5>Some file 1</h5>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="recently-item">*/}
            {/*    <div className="recently-item-inner">*/}
            {/*        <FontAwesomeIcon icon={faFileArchive} />*/}
            {/*        <div className="recently-file__header">*/}
            {/*            <h5>Some file 1</h5>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default LastItems;