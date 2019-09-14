import React from 'react';

const RobotImg = () => {
    return (
        <>
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
                            height="380vh"
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
        </>
    );
};

export default RobotImg;