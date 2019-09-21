import React from 'react';

const SmsSec = () => {
    return (
        <>
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

        </>
    );
};

export default SmsSec;