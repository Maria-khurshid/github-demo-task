import React from 'react';

const Form = () => {
    return (
        <>
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
                            Sign up for GitHub</button>
                        <p>
                            By clicking “Sign up for GitHub”, you agree to our{" "}
                            <a href="#">Terms of Service</a> and{" "}
                            <a href="#">Privacy Statement</a>. We’ll occasionally send you
                            account related emails.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;