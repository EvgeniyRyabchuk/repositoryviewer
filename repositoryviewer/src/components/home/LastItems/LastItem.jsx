import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";

const LastItem = ({item, types, defType}) => {

    const getFileName = () => {
        const arr = item.path.split('/');
        return arr[arr.length - 1];
    }

    const getFileIcon = () => {
        for (let t of types) {
            const extensions = t.extension.split("|");
            for (let ext of extensions) {
                if(item.path.includes(ext)) {
                    return (
                        <FontAwesomeIcon icon={t.icon} />
                    )
                }
            }
        }
        return (
            <FontAwesomeIcon icon={defType.icon} />
        )
    }

    return (
        <div className="recently-item">
            <div className="recently-item-inner">
                {getFileIcon()}
                <div className="recently-file__header">
                    <h5>{getFileName()}</h5>
                </div>
            </div>
        </div>
    );
};

export default LastItem;