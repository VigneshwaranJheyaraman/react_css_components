import React from "react";
import PropTypes from "prop-types";
import UserAvatar from "./UserAvatar";
import UserBio from "./UserBio";

function UserDetails(props) {
  return (
    <div className={props.className}>
      <UserAvatar src={props.imgSrc} className={props.imgClassName} />
      <div className={props.bioClassName}>
        <UserBio
          className={props.userMetaDiv}
          userDetails={props.userMetaDetails}
          userMetaDiv={props.userMetaDivClassName}
          userMetaButtonClassName={props.userMetaButtonClassName}
          userMetaClassName={props.userMetaClassName}
        />
      </div>
    </div>
  );
}

UserAvatar.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

export default UserDetails;
