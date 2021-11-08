import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";

const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();
    const sidebarLinks = [
        'home',
        'profile',
    ]

    return (
        <aside className="disk-manage">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                 aria-orientation="vertical">
                {sidebarLinks.map(e =>
                    <button key={e} onClick={() => history.push(`/${e}`)} className={ location.pathname === `/${e}` ? 'nav-link active' : 'nav-link'} id={`v-pills-${e}-tab`} data-bs-toggle="pill"
                            data-bs-target={`#v-pills-${e}`} type="button" role="tab" aria-controls={`v-pills-${e}`}
                            aria-selected={location.pathname === `/${e}`}>{e}
                    </button>
                )}
                {/*<button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"*/}
                {/*        data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"*/}
                {/*        aria-selected="true">Home*/}
                {/*</button>*/}
                {/*<button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"*/}
                {/*        data-bs-target="#v-pills-profile" type="button" role="tab"*/}
                {/*        aria-controls="v-pills-profile" aria-selected="false">Profiles*/}
                {/*</button>*/}

            </div>
        </aside>
    );
};

export default Sidebar;