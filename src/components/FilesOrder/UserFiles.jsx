import React from "react";
import { APICONSTANTS } from "../../constants";
import UserDashBoard from "../UserDashBoard/UserDashboard";

function UserFiles(props) {
  const displayUsers = () => {
    let usersList = [];
    for (var i = 0; i < props.limit; i++) {
      usersList.push(
        <UserDashBoard
          className="userdashboard"
          userDetailsClassName="user-details"
          bioClassName="user-bio"
          userDetailsURL={APICONSTANTS.USERURL}
          imgClassName="useravatar"
          userMetaDivClassName="usermeta-div"
          userMetaButtonClassName="icon-button"
          userMetaClassName="usermeta"
          zIndex={i}
          margin={`${15 + 40 * (i + 1)}px auto`}
          markerClass="marker"
        />
      );
    }
    return usersList;
  };

  return displayUsers();
}

export default UserFiles;
