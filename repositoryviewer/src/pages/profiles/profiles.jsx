import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import ProfileList from "../../components/profiles/ProfileList/ProfileList";
import './profiles.css';
import {UserContext} from "../../context";

const Profiles = () => {
    let location = useLocation();
    
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
                <ProfileList />
            </article>
        </div>
    );
};

export default Profiles;