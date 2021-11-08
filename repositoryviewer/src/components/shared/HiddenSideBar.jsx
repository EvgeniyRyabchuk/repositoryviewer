import React from 'react';
import {useHistory, useLocation} from "react-router-dom";

const HiddenSideBar = ({isOpen, openHiddenSideBar}) => {
    const history = useHistory();
    const location = useLocation();
    const sidebarLinks = [
        'home',
        'profile',
    ]

    const menuItemClick = (e) => {
        history.push(`/${e}`);
        openHiddenSideBar(false); 
    }

    return (
        <div>
            <div onClick={() => openHiddenSideBar(false)} className={ isOpen === true ? 'side_wrapper side_wrapper--show' : 'side_wrapper'}></div>
            <div className={ isOpen === true ? 'hidden-aside hidden-aside--show' : 'hidden-aside'}>
                <div className="profile">
                    <div className="profile__img__wrapper">
                        <img src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png" alt=""
                             width="50" height="50" />
                    </div>
                    <span className="email">
                    example.layout@gmail.com
                </span>
                </div>
                <div className="nav flex-column nav-pills mx-3" id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">
                    {sidebarLinks.map(e =>
                        <button key={e} onClick={() => menuItemClick(e)} className={ location.pathname === `/${e}` ? 'nav-link active' : 'nav-link'} id={`v-pills-${e}-tab`} data-bs-toggle="pill"
                                data-bs-target={`#v-pills-${e}`} type="button" role="tab" aria-controls={`v-pills-${e}`}
                                aria-selected={location.pathname === `/${e}`}>{e}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HiddenSideBar;