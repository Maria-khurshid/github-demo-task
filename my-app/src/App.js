import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
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
      </header>
      <main>
        <div className="App-main">
          <div className="form-para">
            <h1>Built for developers</h1>
            <p>
              GitHub is a development platform inspired by the way you work.
              From <a href="#">open source </a>to <a href="#">business</a>, you
              can host and review code, manage projects, and build software
              alongside 40 million developers.
            </p>
          </div>
          <div className="form-input">
            <div className="signup">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" placeholder="pick a username" />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" placeholder="your email address" />
                </div>
                <div className="form-group form-check">
                  <label>Password</label>
                  <input type="password" placeholder="create a password" />
                </div>
              </form>
            </div>
            <div className="main-box">
              <p>
                Make sure it's at least 15 characters OR at least 8 characters
                including a number and a lowercase letter.{" "}
                <a href="#">Learn more.</a>
              </p>
              <button type="button" className="form-btn">
                Sign up for GitHub
              </button>
              <p>
                By clicking “Sign up for GitHub”, you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Statement</a>. We’ll occasionally send you
                account related emails.
              </p>
            </div>
          </div>
        </div>
        <div className="get-start">
          <h2>Get started with GitHub Enterprise</h2>
          <p>
            Take collaboration to the next level with security and
            administrative features built for businesses.
          </p>
          <button>Contect Sales</button>
          <a
            className="App-link"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Or start a free trial of Enterprise Server
          </a>
        </div>
        <div className="image">
          <img src="" />
          <h3>More than 2.1 million businesses and organizations use GitHub</h3>
          <img src="" />
          <p>GitHub for teams</p>
          <h1>A better way to work together</h1>
          <p>
            GitHub brings teams together to work through problems, move ideas
            forward, and learn from each other along the way.
          </p>
          <button>Sign up your team →</button>
          <img src="" />
          <h3>Write better code</h3>
          <p>
            Collaboration makes perfect. The conversations and code reviews that
            happen in pull requests help your team share the weight of your work
            and improve the software you build.{" "}
            <a href="#">Learn about code review.</a>
          </p>
          <h3>Manage your chaos</h3>
          <p>
            Take a deep breath. On GitHub, project management happens in issues
            and project boards, right alongside your code. All you have to do is
            mention a teammate to get them involved.{" "}
            <a href="#">Learn about project management.</a>
          </p>
          <h3>Find the right tools</h3>
          <p>
            Browse and buy apps from GitHub Marketplace with your GitHub
            account. Find the tools you like or discover new favorites—then
            start using them in minutes.{" "}
            <a href="#">Learn about integrations.</a>
          </p>
          <div className="middle">
            <h2>
              See how the world's leading companies use GitHub Enterprise.
            </h2>
            <figure>
              <img src="" />
              <figcaption>
                <h3>MGM Resorts International</h3>
                <p>Hospitality</p>
                <a href="#">Read more →</a>
              </figcaption>
            </figure>
            <figure>
              <img src="" />
              <figcaption>
                <h3>Nationwide</h3>
                <p>Insurance</p>
                <a href="#">Read more →</a>
              </figcaption>
            </figure>
            <figure>
              <img src="" />
              <figcaption>
                <h3>SAP</h3>
                <p>Business Software</p>
                <a href="#">Read more →</a>
              </figcaption>
            </figure>
            <figure>
              <img src="" />
              <figcaption>
                <h3>Skyscanner</h3>
                <p>Travel</p>
                <a href="#">Read more →</a>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="security">
          <h6>Security and administration</h6>
          <h1>Your business needs, met</h1>
          <p>
            From flexible hosting to granular access controls, we’ve got your
            security requirements covered.
          </p>
          <button>How GitHub Enterprise works →</button>
          <img src="" />
          <h3>Code security</h3>
          <p>
            Prevent problems before they happen. Protected branches, signed
            commits, and required status checks protect your work and help you
            maintain a high standard for your code.
          </p>
          <h3>Access controlled</h3>
          <p>
            Encourage teams to work together while limiting access to those who
            need it with granular permissions and authentication through
            SAML/SSO and LDAP.
          </p>
        </div>
        <div className="buildGit">
          <p>Integrations</p>
          <h1>Build on GitHub</h1>
          <p>
            Customize your process with GitHub apps and an intuitive API.
            Integrate the tools you already use or discover new favorites to
            create a happier, more efficient way of working.
          </p>
          <button>Learn about integrations →</button>
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
          <p>
            Sometimes, there’s more than one tool for the job. Why not try
            something new?
          </p>
          <a href="#">Browse GitHub Marketplace →</a>
        </div>
        <div className="community">
          <h6>Community</h6>
          <h1>Welcome home,developers</h1>
          <p>
            GitHub is home to the world’s largest community of developers and
            their projects...
          </p>
          <figure>
            <img src="" />
            <figcaption>
              <h4>Russell Keith-Magee</h4>
              <p>
                Russell Keith-Magee created BeeWare to fill a gap in his own
                process. Today, BeeWare is the go-to project for supporting
                Python on every platform.
              </p>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="" />
            <figcaption>
              <h4>Kris Nova</h4>
              <p>
                Kris Nova quickly developed a passion for open source software.
                Now she gets to work on open source tooling at her day job,
                which includes maintaining Kubernetes Operations (kops).
              </p>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="" />
            <figcaption>
              <h4>Evan You</h4>
              <p>
                In 2013, Evan You founded Vue, a Javascript framework funded by
                the community on Patreon. In 2016, Vue reached 2,000,000
                downloads.
              </p>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="" />
            <figcaption>
              <h4>Jess Frazelle</h4>
              <p>
                Jess Frazelle works on Kubernetes full-time. Previously she
                maintained Docker, a software containerization platform used by
                thousands of teams.
              </p>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
        </div>
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
