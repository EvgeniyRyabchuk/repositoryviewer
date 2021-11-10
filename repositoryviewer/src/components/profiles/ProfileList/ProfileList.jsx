import React, {useContext, useEffect} from 'react';
import './ProfileList.css';
import {UserContext, UserListContext} from "../../../context";
import UserCard from "../../shared/UserCard/UserCard";

const ProfileList = () => {
    const {userList, setUserList} = useContext(UserListContext);
    const {user, setUser} = useContext(UserContext);

    const foregetProfile = (profileId) => {
        const newList = userList.filter(e => e.id != profileId);
        if(newList.length > 0) setUser(userList[0]);
        else setUser(null);
        setUserList(newList);
    }
    console.log(userList);
    return (
        <div className="profile-list">
            {userList.map(e =>
                <UserCard key={e.id} props={e} foreget={foregetProfile} isVisited={true}/>
            )}

        </div>
    );
};

export default ProfileList;