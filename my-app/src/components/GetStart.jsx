import React from 'react';

const GetStart = () => {
    return (
        <>
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
        </>
    );
};

export default GetStart;