import React from "react";
import "./App.css";
<<<<<<< HEAD
import Message from "./components/Message";
import Header from "./components/Header";
const jasondata = [
  {
    name: "Waqas",
    gender: "male",
    number: "03321743825",
    profilePic:
      "https://fyf.tac-cdn.net/images/products/large/BF89-11K.jpg?auto=webp&quality=60",
    firstLine: "Karachi is a very big city ...",
    numbUnread: 1,
    isUnread: true,
    time: "12:31 PM today"
  },
  {
    name: "Arifa Choudhry",
    gender: "female",
    number: "+92357843644",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybU0g3cFQ4NnESOIPWxgnLFDQvgC1Iph3KMLmP2I_RoV3P5t6Kw",
    firstLine: "My name is blah blah blah",
    numbUnread: 2,
    isUnread: true,
    time: "09:30 AM today"
  },
  {
    name: "Farah Naz",
    gender: "female",
    number: "+92538457438",
    profilePic:
      "https://www.famflowerfarm.com/media/wysiwyg/_DSC0239_roze_tulpen_homepage.jpg",
    firstLine: "I will win!",
    numbUnread: 3,
    isUnread: true,
    time: "11:00 PM yesterday"
  },
  {
    name: "Muhammad Arif",
    gender: "male",
    number: "03324732853",
    profilePic:
      "https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg",
    firstLine: "Slow and steady wins the race",
    numbUnread: 0,
    isUnread: false,
    time: "2:50 PM yesterday"
  },
  {
    name: "Ayesha Tariq",
    gender: "female",
    number: "03321432785",
    profilePic:
      "https://www.fairtrade.org.uk/~/media/FairtradeUK/Media%20Centre/Flowers.jpg?h=397&la=en&mw=760&w=760",
    firstLine: "I will reach at 2:30",
    numbUnread: 0,
    isUnread: false,
    time: "5:50 AM yesterday"
  },
  {
    name: "Taqdees Fatima",
    gender: "female",
    number: "03254368343",
    profilePic:
      "https://s7e5a.scene7.com/is/image/waitrose/FloristGiftsProductPod/563600_a_british-sunflowers-563600",
    firstLine: "I got a new job! 🎉",
    numbUnread: 0,
    isUnread: false,
    time: "5:30 AM yesterday"
  },
  {
    name: "Tooba Jabeen",
    gender: "female",
    number: "042364724722",
    profilePic:
      "https://s7img.ftdi.com/is/image/ProvideCommerce/PF_19_A3024_LAY_SHP_V2?$proflowers-tile-wide-mv-new$",
    firstLine: "Happy happy!",
    numbUnread: 13,
    isUnread: true,
    time: "3:00 PM Monday"
  },
  {
    name: "Maria Khursheed",
    gender: "female",
    number: "0232746325",
    profilePic: "https://assets.eflorist.com/site/EF-9746/Tile/Daisy.jpeg",
    firstLine: "Thanks!",
    numbUnread: 0,
    isUnread: false,
    time: "5:30 AM MOnday"
  }
];

function App() {
  return (
    <ul className="whtsap">
      <Header />
      {jasondata.map(item => (
        <Message
          name={item.name}
          smsunread={item.numbUnread}
          imgURL={item.profilePic}
          number={item.number}
          message={item.firstLine}
          time={item.time}
        />
      ))}
    </ul>
=======
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
>>>>>>> e92fdbdd342596bc4d095ede3d525cf55fa06fd6
  );
}

export default App;
