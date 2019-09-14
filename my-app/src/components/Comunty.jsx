import React from 'react';

const Comunty = () => {
    return (
        <>
            <div className="community">
                <h6>Community</h6>
                <h1>Welcome home,developers</h1>
                <p>
                    GitHub is home to the world’s largest community of developers and
                    their projects...
                </p>
                <div className="comunity-fig" >
                    <figure>
                        <img src="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg" height="180vh" />
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
                        <img src="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg" height="180vh" />
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
                        <img src="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg" height="180vh" />
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
                        <img src="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg" height="180vh" />
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
            </div>
        </>
    );
};

export default Comunty;