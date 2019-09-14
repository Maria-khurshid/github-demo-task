import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import GetStart from "./components/GetStart";
import RobotImg from "./components/RobotImg";
import Middle from "./components/Middle";
import SecurTeam from "./components/SecurTeam";
import SmsSec from "./components/SmsSec";
import Comunty from "./components/Comunty";




function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <GetStart />
        {/* <div>
          <a
            className="App-link"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Or start a free trial of Enterprise Server
          </a>
        </div> */}
        <RobotImg />
        <Middle />
        <SecurTeam />
        <SmsSec />
        <Comunty />
        <div className="help">
          <div className="red-Circle">
            <h2>
              100M <sub>*</sub>
            </h2>
            <p>repositries worldwide</p>
          </div>
          <p>
            GitHub’s users create and maintain influential technologies
            alongside the world’s largest open source community.
          </p>
          <div className="blue-Circle">
            <h2>
              40M <sub>*</sub>
            </h2>
            <p>developers/n worldwide</p>
          </div>
          <p>
            developers worldwide Developers use GitHub for personal projects,
            from experimenting with new programming languages to hosting their
            life’s work.
          </p>
          <div className="purple-Circle">
            <h2>
              2.1M <sub>*</sub>
            </h2>
            <p>businesses & organizations worldwide</p>
          </div>
          <p>
            Businesses of all sizes use GitHub to support their development
            process and to securely build software
          </p>
        </div>
        <div className="signup">
          <form>
            <h2>
              Get started for free — join the millions of developers already
              using GitHub to share their code, work together, and build amazing
              things.
            </h2>
            <label>Username</label>
            <input type="text" placeholder="pick a username" />
            <label>Email</label>
            <input type="text" placeholder="your email address" />
            <label>Password</label>
            <input type="password" placeholder="create a password" />
            <p>
              Make sure it's at least 15 characters OR at least 8 characters
              including a number and a lowercase letter.{" "}
              <a href="#">Learn more.</a>
            </p>
          </form>
          <button type="button">Sign up for GitHub</button>
          <p>
            By clicking “Sign up for GitHub”, you agree to our{" "}
            <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Statement</a>. We’ll occasionally send you
            account related emails.
          </p>
        </div>
      </main>
      <footer>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#"> Security</a>
          </li>
          <li>
            <a href="#">Enterprise</a>
          </li>
          <li>
            <a href="#">Customer stories</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Platform</a>
          </li>
          <li>
            <a href="#">Developer API</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Atom</a>
          </li>
          <li>
            <a href="#">Electron</a>
          </li>
          <li>
            <a href="#">GitHub Desktop</a>
          </li>
          <li>
            <a href="#"> Support</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Community Forum</a>
          </li>
          <li>
            <a href="#">Training</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
          <li>
            <a href="#">Contact GitHub</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
