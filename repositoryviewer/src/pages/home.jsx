import React, {useContext, useState} from 'react';
import {useLocation} from "react-router-dom";
import LastItems from "../components/home/LastItems";
import ControlPanel from "../components/home/ControlPanel/ControlPanel";
import ReposViewTable from "../components/home/ReposViewTable";
import ViewUserReposModal from "../components/UI/ViewUserReposModal/ViewUserReposModal";
import {UserContext} from "../context";
import GitHubService from "../API/GitHubService";

const Home = () => {
    let location = useLocation();
    const {user, setUser} = useContext(UserContext);
    
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [curPath, setCurPath] = useState(''); 
    const [curBranch, setCurBranch] = useState();
    const [branchList, setBranchList] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    const confirmModal = async ({username}) => {
        if(username) {
            try {
                const responce = await GitHubService.getUser(username);
                console.log(responce);
                const user = { 
                    username: responce.login,
                    email: responce.email,
                    id: responce.id,
                    avatar_url: responce.avatar_url
                }
                setUser(user);
            }
            catch (ex) {
                console.log(ex);
            }
            finally {

                hideModal();
            }
        }
    }

    const changePath = (path, isRefresh = false) => {
        setCurPath(path);
        if(isRefresh) setIsRefresh(true);
    }

    const switchBranch = (branchName) => {
        let branch = null;
        // удаление метки со старой ветки и его получение
        let newBranchList = branchList.map(e => {
            if(e.isSelect) {
                e.isSelect = false;
            }
            return e;
        });

        // установил метку на новой ветке
        newBranchList = newBranchList.map(e => {
            if(e.name === branchName)
            {
                e.isSelect = true;
                branch = e;
            }
            return e;
        })


        console.log('new branches list');
        console.log(newBranchList);
        console.log(branch);
        // setBranchList(newBranchList);
        setCurBranch(branch);
    }

    const changeCurBranch = (b) => { 
        console.log(b)
        setCurBranch(b);
    }

    return (
        <div className={
            location.pathname === '/home' ?
                "tab-pane fade show active" :"tab-pane fade" } id="v-pills-home" role="tabpanel"
             aria-labelledby="v-pills-home-tab">
            <article className="content">
                <LastItems />
                <div className="content-inner">
                    <ControlPanel showModal={showModal} curPath={curPath} changePath={changePath}
                                  branches={branchList} switchBranch={switchBranch} curBranch={curBranch} />
                    <ReposViewTable curPath={curPath} changePath={changePath} isRefresh={isRefresh}
                                    setIsRefresh={setIsRefresh} changeBranches={setBranchList} curBranch={curBranch} changeCurBranch={setCurBranch} />
                    <ViewUserReposModal isOpen={isModalOpen} confirm={confirmModal} hidden={hideModal}/>

                </div>
            </article>

        </div>
    );
};

export default Home;