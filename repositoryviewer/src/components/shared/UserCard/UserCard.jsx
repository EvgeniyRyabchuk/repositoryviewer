import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../../../context";
import {useHistory} from "react-router-dom";
import './UserCard.css';

const UserCard = ({props, foreget, isVisited, userSelected}) => {
    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    const changeUser = () => {
        const user = {
            username: props.login ? props.login : props.username,
            email: props.email,
            id: props.id,
            avatar_url: props.avatar_url
        }
        setUser(user);
        history.push('home');
        userSelected && userSelected();
    }


    return (
        <div className="profile-card">
            <div className={user && props.id === user.id ? 'profile-card-inner profile__card--active' : 'profile-card-inner'}>
                {isVisited &&
                    <div className="close__profile" onClick={() => foreget(props.id)}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </div>
                }
                <div className="profile__img__wrapper">
                    <img src={props.avatar_url} width="50" height="50" />
                </div>
                <div className="w-100 d-flex flex-row justify-content-end align-items-center">
                    <div className="d-flex flex-column justify-content-end">
                        <span className="profile__name">{props.login ? props.login : props.username}</span>
                        <div className="d-flex justify-content-end">
                            <div onClick={changeUser} className="view-rep-btn">View repositories</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default UserCard;