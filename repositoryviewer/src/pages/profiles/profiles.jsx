import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import ProfileList from "../../components/profiles/ProfileList/ProfileList";
import './profiles.css';
import {UserContext, UserListContext} from "../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers} from "@fortawesome/free-solid-svg-icons";

const Profiles = () => {
    let location = useLocation();
    const {userList, setUserList} = useContext(UserListContext);
    const history = useHistory();

    return (
        <div className={
            location.pathname === '/profile' ?
                "tab-pane fade show active"
                :
                "tab-pane fade" }
            id="v-pills-profile" role="tabpanel"
             aria-labelledby="v-pills-profile-tab">
            <article className="profile-tab">
                <h1 className="h-center">Profiles</h1>
                {userList.length === 0 &&
                    <div className="no-profiles">
                        <h6 className="h-no-profiles">No profiles</h6>
                        <div className="no-profiles-icon">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <button onClick={() => history.push('/home')} className="btn btn-primary">Go home to add</button>
                    </div>

                }
                <ProfileList />
            </article>
        </div>
    );
};

export default Profiles;