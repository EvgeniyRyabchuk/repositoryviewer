import React, {useContext, useRef, useState} from 'react';
import GitHubService from "../../API/GitHubService";
import useInputLag from "../../hooks/useInputLag";
import UserCard from "./UserCard/UserCard";
import {UserContext} from "../../context";
import MobileSearch from "./search/MobileSearch/MobileSearch";
import Loader from "../UI/loader/FetchLoader/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Header = ({openHiddenSideBar}) => {
    const {user, setUser} = useContext(UserContext);
    const searchInput = useRef();

    const [isInput, setIsInput] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    const [foundUsersList, setFoundUsersList] = useState([]);

    // const search = async () => {
    //     const query = searchInput.current.value;
    //     const data = await GitHubService.getUsers(query);
    //     console.log(data);
    // }

    const [startTimer, isTimeout] = useInputLag( async (query) => {
        if(query != '')
        {
            const data = await GitHubService.getUsers(query, 1, 5);
            console.log(data);
            if(data.items) {
                setFoundUsersList(data.items);
            }
        }

    });

    const searchOnInput = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const query = searchInput.current.value;
        // query == '' ? setIsInput(false) : setIsInput(true);
        console.log(query);
        startTimer(query);
        setFoundUsersList([]);
    }

    document.addEventListener('click', () => {
        setIsInput(false);
    })

    console.log('is input', isInput);
    return (
        <header>
            {
                searchModalOpen &&
                <MobileSearch closed={() => setSearchModalOpen(false)}/>
            }
            <nav className="navbar navbar-expand-lg navbar-light py-0">
                <div style={{display: 'flex', 'width': '100%'}}>
                    <div className="navbar-icon-wrapper">
                        <button className="navbar-toggler" id="burger-btn" type="button" onClick={() =>
                            openHiddenSideBar(true)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="" id="navbarTogglerDemo02" style={{width: '100%'}}>
                        <div className="navbar-content">
                            <div className="search" onClick={   (e) => {
                                e.stopPropagation();
                                setIsInput(true);
                            }}

                            >
                                <form className="d-flex" >
                                    <input ref={searchInput} className="form-control me-2" type="search" placeholder="Search for users..."
                                           aria-label="Search" onInput={searchOnInput} />
                                        <button className="btn btn-outline-success" type="button">Search</button>
                                        { searchInput.current && searchInput.current.value !== '' && isInput ?
                                            <div className="users-block" style={{width: '310px'}} onClick={() => { console.log('lskdh')}}>
                                                <div className="user-search-card">
                                                    {isTimeout && <Loader /> }
                                                    {foundUsersList.map(e =>
                                                        <div>
                                                            <UserCard key={e.id} props={e} isVisited={false} />
                                                        </div>

                                                    )}
                                                </div>
                                            </div> : ''
                                        }
                                </form>
                            </div>
                            <div className="side-btn">
                                <ul className="navbar-nav-list">
                                    <li className="nav-item search-header-item">
                                        <a className="nav-link" aria-current="page" onClick={() => { setSearchModalOpen(true) }}>
                                            <FontAwesomeIcon icon={faSearch} style={{fontSize: '20px'}}/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">{user && user.username}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
        </header>
    );
};

export default Header;