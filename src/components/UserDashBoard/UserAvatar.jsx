import React from "react";
import PropTypes from "prop-types";

function UserAvatar(props) {
  return (
    <img
      className={props.className !== undefined ? props.className : "avatar"}
      src={props.src}
      alt={() => {
        let src = props.imgSrc.split("/");
        return src[src.length - 1];
      }}
    />
  );
}

UserAvatar.propTypes = {
  src: PropTypes.string.isRequired
};

export default UserAvatar;
