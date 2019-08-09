import React from "react";
import PropTypes from "prop-types";
import UserMeta from "./UserMeta";
import { iconClassName, iconColor } from "../../constants";

function UserBio(props) {
  return props.userDetails !== undefined
    ? Object.entries(props.userDetails).map((v, i) => {
        return (
          <UserMeta
            className={props.userMetaDiv}
            buttonClassName={props.userMetaButtonClassName}
            iconClassName={iconClassName[v[0]]}
            iconColor={iconColor[v[0]]}
            userMetaClassName={props.userMetaClassName}
            userMeta={v[1]}
            key={i}
          />
        );
      })
    : "";
}

UserBio.propTypes = {
  userDetails: PropTypes.object.isRequired
};

export default UserBio;
