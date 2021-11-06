import React from 'react';

const Item = ({self, type = 'repos', select}) => {

    const selectItem = () => {

        select(self.name, type);
        select(self.path, type);
    }

    return (
        <li onClick={selectItem}>
            <div className="li-header folder">
                <div className="d-flex align-items-center">
                    <div className="ff-icon">
                        <i className="fas fa-chevron-down"></i>
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

export default Item;


