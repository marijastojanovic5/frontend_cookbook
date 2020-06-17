import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addUserData } from "../redux/actionCreators";
class ProfileForm extends Component {
      
      state = {
      picture: "",
      bio: ""
    
  }
  addPicHandler = e => {
    this.setState({ picture: e.target.value });
  };
  addBioHandler = e => {
    this.setState({ bio: e.target.value });
  };
  userDataSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.props.user.user);
    this.props.history.push("/userprofile");
  };
  render() {
    return (
      <div className="profile-form">
        <form onSubmit={this.userDataSubmit}>
          <div className="added-ingredient-div">
            <h3>Add Picture:</h3>
          </div>
          <div>
            <input type="file" onChange={this.addPicHandler} />
            <h3>Add Bio:</h3>
            <textarea
              placeholder="add bio here..."
              onChange={this.addBioHandler}
              id="profile-bio"
            ></textarea>
          </div>
          <button className="btn btn-primary btn-lg btn-block login-btn" id="submit-edit-profile">Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (userData, user) => dispatch(addUserData(userData, user))
  };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfileForm))