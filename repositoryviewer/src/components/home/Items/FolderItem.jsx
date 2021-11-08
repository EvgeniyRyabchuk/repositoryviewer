import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFolder} from "@fortawesome/free-solid-svg-icons";

const FolderItem = ({self, select}) => {
    const type = 'tree';
    const selectItem = () => {
        select(self.path, type);
    }

    return (
        <li onClick={selectItem}>
            <div className="li-header folder">
                <div className="d-flex align-items-center">
                    <div className="ff-icon">
                        <FontAwesomeIcon icon={faFolder} />
                    </div>
                    <span className="name">{self.name}</span>
                </div>
                <div className="file-metadata">
                    <span className="type">{self.type}</span>
                    <span className="last-change">{self.created_at}</span>
                    <span className="size">{self.size}</span>
                </div>
            </div>
        </li>
    );
};

export default FolderItem;