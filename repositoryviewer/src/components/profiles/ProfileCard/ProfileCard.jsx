import React, {useContext} from 'react';
import './ProfileCard.css';
import {UserContext, UserListContext} from "../../../context";
import {useHistory} from "react-router-dom";

const ProfileCard = ({props}) => {
    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    const changeUser = () => {
        setUser(props);
        history.push('home');
    }

    return (
        <div className="profile-card">
            <div className={props.id === user.id ? 'profile-card-inner profile__card--active' : 'profile-card-inner'}>
                <div className="profile__img__wrapper">
                    <img src={props.avatar_url} width="50" height="50" />
                </div>
                <div className="w-100 d-flex flex-row justify-content-end align-items-center">
                    <div>
                        <span style={{fontSize: '15px'}}>{props.username}</span>
                        <div className="d-flex justify-content-end">
                            <button onClick={changeUser} className="view-rep-btn">View repositories</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;