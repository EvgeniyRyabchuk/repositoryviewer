import React, {useRef, useState} from 'react';
import UserCard from "../../UserCard/UserCard";
import GitHubService from "../../../../API/GitHubService";
import useInputLag from "../../../../hooks/useInputLag";
import './MobileSearch.css';

const MobileSearch = ({closed}) => {
    const searchInput = useRef();
    const [wrapperHide, setWrapperHide] = useState(false);

    const [isInput, setIsInput] = useState(false);
    const [foundUsersList, setFoundUsersList] = useState([]);


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

    const searchOnInput = () => {
        const query = searchInput.current.value;
        query === '' && setIsInput(false);
        startTimer(query);
    }

    return (
        <div className={wrapperHide ? "sm-search-wrapper wrapper--hide" : "sm-search-wrapper"} onClick={() => {
            console.log(wrapperHide);

            closed();
        }}>
            <div className="sm-search" onClick={(e) => { e.stopPropagation(); }}>
                <div className="sm-search-inner">
                    <form className="d-flex mx-2">
                        <input ref={searchInput} className="form-control" type="search" placeholder="Search"
                               aria-label="Search" onInput={searchOnInput}
                               onFocus={(event) => setIsInput(true)} />
                    </form>
                    {isInput &&
                    <div className="users-block">
                        <div className="user-search-card">
                            { searchInput.current.value === '' && <h6 style={{textAlign: 'center', margin: '0'}}>Input user name</h6> }
                            {foundUsersList.map(e =>
                                <UserCard key={e.id} props={e} isVisited={false} userSelected={() => {
                                    closed();
                                }}/>
                            )}
                        </div>
                    </div>
                    }
                </div>


            </div>
        </div>
    );
};

export default MobileSearch;