<<<<<<< HEAD
import React from "react";
function Header() {
  return (
    <div className="header">
      <span>WHATSAPP WEB</span>
      <span>FEATURES</span>
      <span>DOWNLOAD</span>
      <span>SECURITY</span>
    </div>
  );
}

export default Header;
=======
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
>>>>>>> e92fdbdd342596bc4d095ede3d525cf55fa06fd6
