import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGitAlt} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <div className="footer-inner">
                <span className="footer__label">Creator - <a href="https://github.com/EvgeniyRyabchuk">Evgeniy Ryabchuk</a></span>
                <FontAwesomeIcon icon={faGitAlt} />
                <span className="footer__label">GitHub Repository - <a href="https://github.com/EvgeniyRyabchuk/repositoryviewer">GitHub Viewer</a></span>
            </div>
        </footer>
    );
};

export default Footer;