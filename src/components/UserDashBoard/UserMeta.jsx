import React from "react";

function UserMeta(props) {
  return (
    <div className={props.className}>
      <button className={props.buttonClassName}>
        <i className={props.iconClassName} style={{ color: props.iconColor }} />
      </button>
      <p className={props.userMetaClassName}>{props.userMeta}</p>
    </div>
  );
}

export default UserMeta;
