import React from 'react';
import PathNavigator from "../PathNavigator/PathNavigator";
import cl from './ControlPanel.module.css';

const ControlPanel = ({showModal, curPath, changePath, branches, switchBranch, curBranch}) => {


    return (
        <div className="control-wrapper">
            {/*{branches.map(e => e.name === curBranch.name ? e.name : '')}*/}
            <div className="control-panel">

                <button type="button" onClick={showModal} className="btn btn-primary control-btn">View profile</button>
                {/*<button className="btn btn-primary control-btn">Log out</button>*/}
                {/*<button className="btn btn-danger control-btn">Remove</button>*/}

                <div className="cur-path">
                    <input type="text" disabled
                           value={'/'+curPath}/>
                </div>

                {/*value={branches != 0 ? branches[0] : undefined}*/}
                <select className={'form-select ' + cl.branch__list} aria-label="Default select example"
                        onChange={(event) => switchBranch(event.target.value)}>
                    <option disabled>Select branch</option>
                    {branches.map((e, index) =>
                        <option key={e.commit.sha} className=
                            {curBranch ? e.name === curBranch.name ? cl.selected : 'simple'
                                : e.name === branches[0].name ? cl.selected : 'simple' } value={e.name}>{e.name}</option>
                    )}
                </select>
                <PathNavigator curPath={curPath} changePath={changePath} />
            </div>
        </div>
    );
};

export default ControlPanel;