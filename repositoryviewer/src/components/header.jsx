import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">

                <div style={{display: 'flex', 'width': '100%'}}>
                    <div className="navbar-icon-wrapper">
                        <button className="navbar-toggler" id="burger-btn" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">Navbar</a>

                    </div>

                    <div className="" id="navbarTogglerDemo02" style={{width: '100%'}}>
                        <div className="navbar-content">
                            <div className="search">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="side-btn">
                                <ul className="navbar-nav-list">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
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