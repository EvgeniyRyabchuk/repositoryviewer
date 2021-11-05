import React from 'react';
import {useLocation} from "react-router-dom";

const Profile = () => {
    let location = useLocation();

    return (
        <div className={
            location.pathname === '/profile' ?
                "tab-pane fade show active"
                :
                "tab-pane fade" }
            id="v-pills-profile" role="tabpanel"
             aria-labelledby="v-pills-profile-tab">
            Profile
        </div>
    );
};

export default Profile;