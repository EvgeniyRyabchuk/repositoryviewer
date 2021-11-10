import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import LastItems from "../components/home/LastItems/LastItems";
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
    const [lastItems, setLastItems] = useState([]);

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
        for (let i of branchList) {
            if(i.name === branchName) { branch = i; }
        }
        console.log(branch);
        setCurBranch(branch);
    }

    const changeCurBranch = (b) => {
        console.log(b);
        setCurBranch(b);
    }
    const addLastItem = (item) => {
        if(lastItems.includes(item)) return;
        if(lastItems.length > 5) {
            lastItems.splice(lastItems.length - 1, 1);
            setLastItems([item, ...lastItems]);
        }
        else {
            setLastItems([item, ...lastItems]);
        }
    }

    const openLastItem = (item) => {
        GitHubService.getBlob(item.username, item.reposName, item.branchName, item.path);
    }

    useEffect(() => {
        const recovered =  JSON.parse(localStorage.getItem('lastItems'));
        if(recovered && recovered.length > 0)
            setLastItems(recovered);

        console.log(recovered);
    }, [])

    useEffect(() => {
      if(lastItems)
          localStorage.setItem('lastItems', JSON.stringify(lastItems));
    }, [lastItems])

    return (
        <div className={
            location.pathname === '/home' ?
                "tab-pane fade show active" :"tab-pane fade" } id="v-pills-home" role="tabpanel"
             aria-labelledby="v-pills-home-tab">
            <article className="content">
                <LastItems lastItems={lastItems} openLastItem={openLastItem}/>
                <div className="content-inner">
                    <ControlPanel showModal={showModal}
                                  curPath={curPath}
                                  changePath={changePath}
                                  branches={branchList}
                                  switchBranch={switchBranch}
                                  curBranch={curBranch} />
                    <ReposViewTable curPath={curPath}
                                    changePath={changePath}
                                    isRefresh={isRefresh}
                                    setIsRefresh={setIsRefresh}
                                    changeBranches={setBranchList}
                                    branches={branchList}
                                    curBranch={curBranch}
                                    changeCurBranch={setCurBranch}
                                    addLastItem={addLastItem}
                    />
                    <ViewUserReposModal isOpen={isModalOpen} confirm={confirmModal} hidden={hideModal}/>

                </div>
            </article>

        </div>
    );
};

export default Home;