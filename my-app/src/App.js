import React from "react";
import "./App.css";
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
  );
}

export default App;
