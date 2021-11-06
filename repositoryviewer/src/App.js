import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from "./components/shared/header";
import Sidebar from "./components/shared/sidebar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import HiddenSideBar from "./components/shared/HiddenSideBar";
import {useEffect, useRef, useState} from "react";
import {UserContext} from "./context";

function App() {

    const [user, setUser] = useState({isAuth: false});
    const [isHiddenSideBarOpen, setIsHiddenSideBarOpen] = useState(false);
    const openSideBar = (value) => {
        setIsHiddenSideBarOpen(value);
        document.body.style.overflowY = value === true ? 'hidden' : 'auto';
    }

    return (
    <div className="App">
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
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
            </BrowserRouter>
        </UserContext.Provider>
    </div>
  );
}

export default App;
