import React from "react";
// import "./Message.css";
import PropTypes from "prop-types";

function Message(props) {
  return (
    <li className="chatbox">
      <div className="contact-box">
        <img src={props.imgURL} alt={props.name} />
        <div className="contacts">
          <h3>{props.name}</h3>
          <p className="nubUnread">{props.smsunread}</p>
          <p>{props.number}</p>
          <p>{props.message}</p>
          <p className="movetoEnd">{props.time}</p>
        </div>
      </div>
    </li>
  );
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  time: PropTypes.string,
  imgURL: PropTypes.string.isRequired,
  message: PropTypes.string,
  smsunread: PropTypes.bool
};

export default Message;
