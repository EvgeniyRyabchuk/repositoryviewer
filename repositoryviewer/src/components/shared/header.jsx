import React, {useContext, useRef, useState} from 'react';
import GitHubService from "../../API/GitHubService";
import useInputLag from "../../hooks/useInputLag";
import UserCard from "./UserCard/UserCard";
import {UserContext} from "../../context";
import MobileSearch from "./search/MobileSearch/MobileSearch";


const Header = ({openHiddenSideBar}) => {
    const {user, setUser} = useContext(UserContext);
    const searchInput = useRef();

    const [isInput, setIsInput] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    const [foundUsersList, setFoundUsersList] = useState([]);

    const search = async () => {
        const query = searchInput.current.value;
        const data = await GitHubService.getUsers(query);
        console.log(data);
    }

    const [startTimer, isTimeout] = useInputLag( async (query) => {
        if(query != '')
        {
            const data = await GitHubService.getUsers(query, 1, 5);
            console.log(data);
            if(data.items) {
                setFoundUsersList(data.items);
            }
            return;
        }

    });

    const searchOnInput = () => {
        const query = searchInput.current.value;
        query === '' && setIsInput(false);
        startTimer(query);
    }

    return (
        <header>
            {
                searchModalOpen &&
                <MobileSearch closed={() => setSearchModalOpen(false)}/>
            }
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <div style={{display: 'flex', 'width': '100%'}}>
                    <div className="navbar-icon-wrapper">
                        <button className="navbar-toggler" id="burger-btn" type="button" onClick={() =>
                            openHiddenSideBar(true)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">Navbar</a>

                    </div>
                    {/*
                    onFocus={(event) => {
                                // if(event.target.localName != 'input')
                                //     return;
                                console.log(event.target.localName);
                                setIsInput(true);

                            }}
                             onBlur={(event) => {
                                 console.log(event.target.localName);
                                 setIsInput(false)
                             }}*/}
                    <div className="" id="navbarTogglerDemo02" style={{width: '100%'}}>
                        <div className="navbar-content">
                            <div tabIndex={0} className="search"  >
                                <form className="d-flex">
                                    <input ref={searchInput} className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search" onInput={searchOnInput} onClick={() => setIsInput(true)} />
                                        <button className="btn btn-outline-success" type="button" onClick={search}>Search</button>
                                </form>
                                { isInput &&
                                    // <div className="search-wrapper"></div>
                                    <div className="users-block">
                                        <div className="user-search-card">
                                            {foundUsersList.map(e =>
                                                <UserCard key={e.id} props={e} isVisited={false}/>
                                            )}
                                        </div>
                                    </div>
                                }

                            </div>
                            <div className="side-btn">
                                <ul className="navbar-nav-list">
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                                    {/*</li>*/}
                                    <li className="nav-item search-header-item">
                                        <a className="nav-link" aria-current="page" onClick={() => { setSearchModalOpen(true) }}>Search</a>
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