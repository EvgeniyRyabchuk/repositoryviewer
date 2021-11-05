import React from 'react';
import {useHistory, useLocation} from "react-router-dom";

const HiddenSideBar = ({isOpen, openHiddenSideBar}) => {
    const history = useHistory();
    const location = useLocation();
    const sidebarLinks = [
        'home',
        'profile',
    ]

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
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                            aria-selected="true">Home
                    </button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                            aria-selected="false">Profile
                    </button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                            aria-selected="false">Messages
                    </button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false">Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HiddenSideBar;