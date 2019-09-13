import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
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
          <div className="get-start-box">
            <h2>Get started with GitHub Enterprise</h2>
            <p>
              Take collaboration to the next level with security and
              administrative features built for businesses.
            </p>
          </div>
          <div className="enter-cloud">
            <div className="enter-box">
              <h3>Enterprise Cloud</h3>
              <p>Leave the hosting to us.</p>
              <button>Try Cloud free</button>
            </div>
            <div className="enter-server">
              <h3>Enterprise Server</h3>
              <p>Deploy to your environment.</p>
              <button>Try Server for free</button>
            </div>
            <div className="talk-us">
              <h3>Talk to us</h3>
              <p>Want to use both?</p>
              <button>Contect Sales</button>
            </div>
          </div>
        </div>
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
        <div className="image">
          {/* <img src="my-app\images\light-img.png" />
          <h3>More than 2.1 million businesses and organizations use GitHub</h3>
          <img src="" /> */}
          <div className="betr-way">
            <p>GitHub for teams</p>
            <h1>A better way to work together</h1>
            <p>
              GitHub brings teams together to work through problems, move ideas
              forward, and learn from each other along the way.
            </p>
            <button className="signup-team">Sign up your team →</button>
          </div>
          <div className="image-para">
            <div className="robot">
              <img
                src="https://github.githubassets.com/images/modules/site/home-illo-team.svg"
                alt="robot-image"
                height="500vh"
              />
            </div>
            <div className="robot-img-blocks">
              <div className="btr-code">
                <h3>Write better code</h3>
                <p>
                  Collaboration makes perfect. The conversations and code
                  reviews that happen in pull requests help your team share the
                  weight of your work and improve the software you build.{" "}
                  <a href="#">Learn about code review.</a>
                </p>
              </div>
              <div className="mange-chos">
                <h3>Manage your chaos</h3>
                <p>
                  Take a deep breath. On GitHub, project management happens in
                  issues and project boards, right alongside your code. All you
                  have to do is mention a teammate to get them involved.{" "}
                  <a href="#">Learn about project management.</a>
                </p>
              </div>
              <div className="find-tool">
                <h3>Find the right tools</h3>
                <p>
                  Browse and buy apps from GitHub Marketplace with your GitHub
                  account. Find the tools you like or discover new
                  favorites—then start using them in minutes.{" "}
                  <a href="#">Learn about integrations.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mgm-img-heading">
          <h2>See how the world's leading companies use GitHub Enterprise.</h2>
        </div>
        <div className="middle">
          <figure>
            <img
              src="https://camo.githubusercontent.com/2bf028cf073114afe7717cdbe4b84c2aaff08607/68747470733a2f2f637573746f6d65722d73746f726965732d666565642e6769746875622e636f6d2f637573746f6d65725f73746f726965732f6d676d2d7265736f7274732f6d676d5f706f6f6c2e6a7067"
              height="180vh"
              alt="mgm-img"
            />
            <figcaption>
              <h3>MGM Resorts International</h3>
              <p>Hospitality</p>
              <a href="#">Read more →</a>
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://camo.githubusercontent.com/04e27770c4fe0487609337e4657247ed04bff517/68747470733a2f2f637573746f6d65722d73746f726965732d666565642e6769746875622e636f6d2f637573746f6d65725f73746f726965732f6e6174696f6e776964652f44534330303536352e6a7067"
              alt="insurnc-img"
              height="180vh"
            />
            <figcaption>
              <h3>Nationwide</h3>
              <p>Insurance</p>
              <a href="#">Read more →</a>
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://camo.githubusercontent.com/0a2059318e5ad95896f7827cf9c6cd596aef3a50/68747470733a2f2f637573746f6d65722d73746f726965732d666565642e6769746875622e636f6d2f637573746f6d65725f73746f726965732f6e6174696f6e776964652f44534330303533392e6a7067"
              height="180vh"
              alt="sap-img"
            />
            <figcaption>
              <h3>SAP</h3>
              <p>Business Software</p>
              <a href="#">Read more →</a>
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://camo.githubusercontent.com/bc1f893ca86fb495535e96a099cf6e0b95f7e73b/68747470733a2f2f637573746f6d65722d73746f726965732d666565642e6769746875622e636f6d2f637573746f6d65725f73746f726965732f73706f746966792f73706f74696679312e6a7067"
              height="180vh"
              alt="travel-img"
            />
            <figcaption>
              <h3>Skyscanner</h3>
              <p>Travel</p>
              <a href="#">Read more →</a>
            </figcaption>
          </figure>
        </div>
        <div className="security">
          <div className="control-heading">
            <h6>Security and administration</h6>
            <h1>Your business needs, met</h1>
            <p>
              From flexible hosting to granular access controls, we’ve got your
              security requirements covered.
            </p>
            <button className="signup-team">
              How GitHub Enterprise works →
            </button>
          </div>

          <div className="code-secur">
            <div className="secur-para">
              <h3>Code security</h3>
              <p>
                Prevent problems before they happen. Protected branches, signed
                commits, and required status checks protect your work and help
                you maintain a high standard for your code.
              </p>
              <h3>Access controlled</h3>
              <p>
                Encourage teams to work together while limiting access to those
                who need it with granular permissions and authentication through
                SAML/SSO and LDAP.
              </p>
            </div>
            <div className="sms-section">
              <img
                src="https://github.githubassets.com/images/modules/site/home-illo-business.png"
                alt="sms-img"
                height="300vh"
              />
            </div>
          </div>
        </div>
        <div className="buildGit">
          <p>Integrations</p>
          <h1>Build on GitHub</h1>
          <p>
            Customize your process with GitHub apps and an intuitive API.
            Integrate the tools you already use or discover new favorites to
            create a happier, more efficient way of working.
          </p>
          <button className="signup-team">Learn about integrations →</button>
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/slackhq.png"
            alt="slack-logo"
            height="80vh"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/zenhubio.png"
            alt="zanhobo-logo"
            height="80vh"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/travis-ci.png"
            height="80vh"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/atom.png"
            height="80vh"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/circleci.png"
            height="80vh"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/google.png"
            height="80vh"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/codeclimate.png"
            height="80vh"
          />
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
