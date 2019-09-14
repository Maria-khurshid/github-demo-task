import React from 'react';

const Header = () => {
    return (
        <>
            <header className="App-header">
                <ul>
                    <li>
                        <img
                            className="github-logo"
                            src="https://pngimg.com/uploads/github/github_PNG34.png"
                            alt="logo"
                        ></img>
                    </li>
                    <li>
                        <a href="#">Why GitHub?</a>
                    </li>
                    <li>
                        <a href="#">Enterprise</a>
                    </li>
                    <li>
                        <a href="#">Explore </a>
                    </li>
                    <li>
                        <a href="#">Marketplace</a>
                    </li>
                    <li>
                        <a href="#">Pricing </a>
                    </li>
                </ul>
                <div className="header-input">
                    <input className="search" placeholder="Search Github" />
                    <button className="github-signin">Sign in</button>
                    <button className="github-signup">Sign up</button>
                </div>
            </header>
        </>
    );
};

export default Header;