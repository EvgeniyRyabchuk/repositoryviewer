import React, {useContext, useState} from 'react';
import {useLocation} from "react-router-dom";
import LastItems from "../components/home/LastItems";
import ControlPanel from "../components/home/ControlPanel/ControlPanel";
import ReposViewTable from "../components/home/ReposViewTable";
import ViewUserReposModal from "../components/UI/ViewUserReposModal/ViewUserReposModal";
import {UserContext} from "../context";

const Home = () => {
    let location = useLocation();
    const {user, setUser} = useContext(UserContext);

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [curPath, setCurPath] = useState('');
    const [isRefresh, setIsRefresh] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    const confirmModal = ({username}) => {
        if(username) {
            setUser({isAuth: true, username: username})
            hideModal();
        }
    }

    const changePath = (path, isRefresh = false) => {
        setCurPath(path);
        if(isRefresh) setIsRefresh(true);
    }

    return (
        <div className={
            location.pathname === '/home' ?
                "tab-pane fade show active" :"tab-pane fade" } id="v-pills-home" role="tabpanel"
             aria-labelledby="v-pills-home-tab">
            <article className="content">
                <LastItems />
                <div className="content-inner">
                    <ControlPanel showModal={showModal} curPath={curPath} changePath={changePath}/>
                    <ReposViewTable curPath={curPath} changePath={changePath} isRefresh={isRefresh} setIsRefresh={setIsRefresh} />
                    <ViewUserReposModal isOpen={isModalOpen} confirm={confirmModal} hidden={hideModal} />

                </div>
            </article>

        </div>
    );
};

export default Home;