import React from "react";

function Notification(props) {
  const { message } = props;
  return <div className="notification">{message}</div>;
}

export default Notification;