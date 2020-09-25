import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="header">
            <div className="home">
                <h1><a href="/">Anastasia May</a></h1>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <Link href="/chalkboards">Chalkboards</Link>
                    </li>
                    <li>
                        <Link href="/caricatures">Caricatures</Link>
                    </li>
                    <li>
                        <Link href="/paintings">Paintings</Link>
                    </li>
                    <li>
                        <Link href="/costumes">Costumes</Link>
                    </li>
                    <li>
                        <Link href="/nsfwart">NSFW Art</Link>
                    </li>
                </ul>
            </div>
            <div className="social-navigation">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/anastasiamayisamayzingg">
                        <i className="fab fa-linkedin-in"></i>
                        <span className="visuallyhidden">LinkedIn (opens a new window)</span></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/amay_zinggdev">
                        <i className="fab fa-twitter"></i>
                        <span className="visuallyhidden">Twitter (opens a new window)</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/amay-zingg">
                        <i className="fab fa-github"></i>
                        <span className="visuallyhidden">Github (opens a new window)</span></a>
                    </li>
                    <li>
                        <a href="https://medium.com/@amay_zingg">
                        <i className="fab fa-medium"></i>
                        <span className="visuallyhidden">Medium (opens a new window)</span></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/paperhijinks/">
                        <i className="fab fa-instagram"></i>
                        <span className="visuallyhidden">Instagram (opens a new window)</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;