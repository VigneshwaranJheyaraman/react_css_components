import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchUserData } from "../../utils";
import UserDetails from "./UserDetails";

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: {
        UserAvatar: "",
        userDetails: {
          userName: "",
          userEmail: "",
          location: "",
          dob: ""
        }
      },
      zIndex: 0
    };
  }

  componentWillMount() {
    //utils.js imcludes a fetcher class which fetches the user details
    fetchUserData(this.props.userDetailsURL, this.successCallBack);
  }

  successCallBack = jsonResponse => {
    let response = jsonResponse.response.results[0];
    this.setState({
      responseData: {
        UserAvatar: response.picture.large,
        userDetails: {
          ...this.state.userDetails,
          userName: `${response.name.title}  ${response.name.first}  ${
            response.name.last
          }`,
          userEmail: response.email,
          location: `${response.location.street}, ${response.location.city}`,
          dob: `Born ${response.dob.date}, Now ${response.dob.age}`
        }
      }
    });
  };

  handleClick = e => {
    this.setState({ zIndex: 99 });
  };

  handleMouseLeave = e => {
    let target = e.target;
    this.setState({ zIndex: 0 }, () => {
      target.style.zIndex = this.props.zIndex;
    });
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          zIndex:
            this.state.zIndex === 0 ? this.props.zIndex : this.state.zIndex,
          margin: this.props.margin
        }}
        onClick={this.handleClick}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className={this.props.markerClass} />
        {/* user dashboard details are appended here */}
        <UserDetails
          className={this.props.userDetailsClassName}
          bioClassName={this.props.bioClassName}
          imgSrc={this.state.responseData.UserAvatar}
          imgClassName={this.props.imgClassName}
          userMetaDetails={this.state.responseData.userDetails}
          userMetaDivClassName={this.props.userMetaDivClassName}
          userMetaButtonClassName={this.props.userMetaButtonClassName}
          userMetaClassName={this.props.userMetaClassName}
        />
      </div>
    );
  }
}

UserDashboard.propTypes = {
  className: PropTypes.string.isRequired,
  userDetailsURL: PropTypes.string.isRequired
};

export default UserDashboard;
