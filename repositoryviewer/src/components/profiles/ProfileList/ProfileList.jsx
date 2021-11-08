import React, {useContext, useEffect} from 'react';
import './ProfileList.css';
import ProfileCard from "../ProfileCard/ProfileCard";
import {UserContext, UserListContext} from "../../../context";

const ProfileList = () => {
    const {userList, setUserList} = useContext(UserListContext);
    const {user, setUser} = useContext(UserContext);
    console.log(userList)

    return (
        <div className="profile-list">
            {userList.map(e =>
                <ProfileCard key={e.id} props={e}/>
            )}
        </div>
    );
};

export default ProfileList;