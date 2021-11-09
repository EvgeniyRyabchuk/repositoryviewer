import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHardHat} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ReposItem = ({self, select}) => {
    const type = 'repos';

    const selectItem = () => {
        select(self.name, type);
    }

    return (
        <li onClick={selectItem}>
            <div className="li-header folder">
                <div className="d-flex align-items-center">
                    <div className="ff-icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <span className="name">{self.name}</span>
                </div>
                <div className="file-metadata">
                    <span className="type">     - </span>
                    <span className="created-at">{self.created_at}</span>
                    <span className="size">{self.size}</span>
                </div>
            </div>
        </li>
    );
};

export default ReposItem;