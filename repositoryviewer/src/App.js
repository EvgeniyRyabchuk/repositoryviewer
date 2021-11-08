import './styles/App.css';
import Header from "./components/shared/header";
import Sidebar from "./components/shared/sidebar";
import {HashRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import HiddenSideBar from "./components/shared/HiddenSideBar";
import {useEffect, useState} from "react";
import {UserContext, UserListContext} from "./context";


function App() {

    const [user, setUser] = useState(); 
    const [userList, setUserList] = useState([]);
    const [isHiddenSideBarOpen, setIsHiddenSideBarOpen] = useState(false);
    const openSideBar = (value) => {
        setIsHiddenSideBarOpen(value);
        document.body.style.overflowY = value === true ? 'hidden' : 'auto'; 
    }
    
    
    useEffect(() => {
        const recoveredList = JSON.parse(localStorage.getItem('userList'));
        if(recoveredList) {
            setUserList(recoveredList); 
            if(recoveredList.length > 0)
                setUser(recoveredList[0]); 
        }
    }, []);
    
    useEffect(() => {
        if(user) {
            console.log(userList); 
            if(userList && userList.length > 0) {
                const isExist = userList.filter(e => e.id === user.id).length > 0 ? true : false;
                if (!isExist) { 
                    setUserList([...userList, user]);
                }
            }
            else {
                setUserList([user]); 
            }
        }
    }, [user]);

    useEffect(() => {
        if(userList)
            localStorage.setItem('userList', JSON.stringify(userList));
    }, [userList]);

    return (
    <div className="App">
        <UserListContext.Provider value={{userList, setUserList}}>
            <UserContext.Provider value={{user, setUser}}>
                <Router>
                    <Header openHiddenSideBar={openSideBar}/>
                    <HiddenSideBar isOpen={isHiddenSideBarOpen} openHiddenSideBar={openSideBar}/>

                    <div className="main-wrapper container-fluid d-flex pr-0">
                        <main>
                            {/*<button onClick={() => openSideBar(true)}>123</button>*/}
                            <div className="d-flex w-100">
                               <Sidebar />
                                <div className="tab-content" id="v-pills-tabContent">
                                    <AppRouter />
                                </div>
                            </div>
                        </main>
                    </div>
                </Router>
            </UserContext.Provider>
        </UserListContext.Provider>
    </div>
  );
}

export default App;
