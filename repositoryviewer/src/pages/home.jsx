import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import LastItems from "../components/LastItems";
import ControlPanel from "../components/ControlPanel";
import ReposViewTable from "../components/ReposViewTable";

const Home = () => {
    let location = useLocation();


    return (
        <div className={
            location.pathname === '/home' ?
                "tab-pane fade show active" :"tab-pane fade" } id="v-pills-home" role="tabpanel"
             aria-labelledby="v-pills-home-tab">
            <article className="content">
                <LastItems />
                <div className="content-inner">
                    <ControlPanel />
                    <ReposViewTable />
                </div>
            </article>

        </div>
    );
};

export default Home;