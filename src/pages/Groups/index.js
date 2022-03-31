import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { deleteGroup } from "../../actions/groups";

import "./styles.css";

class Groups extends Component {

  render() {
    const { users, groups } = this.props;
    let showDeleteButton = true;

    return (
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i class="fas fa-arrow-left" /> Back to dashboard
            </h3>
          </Link>
        </div>
        <div>
          <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
            <h4>
              <i class="fas fa-user" /> Go to users
            </h4>
          </Link>
        </div>
        <h1 className="text-center">Groups</h1>
        <hr />
        <div className="card-columns">
          <div className="card groupCard">
            <div>
              <Link to={`/groups/create`} style={{ color: "white" }}>
                <div>
                  <h2 className="text-center">
                    <i class="fas fa-plus-circle" />
                  </h2>
                  <br />
                  <h3>Create a group</h3>
                </div>
              </Link>
            </div>
          </div>

          {this.props.groups.map((group, i) => (
            <div className="card groupCard">
              <div>
                <Link to={`/groups/${group.id}`} style={{ color: "white" }}>
                  <div key={i}>
                    <h2 className="text-center">
                      <i class="fas fa-users" />
                    </h2>
                    <br />
                    <h3>{group.name}</h3>
                  </div>
                </Link>
                <div>
                  {!showDeleteButton ? (showDeleteButton = true) : null}
                  {users.map(function(user) {
                    if (user.groups.find(grp => grp.id === group.id)) {
                      showDeleteButton = false;
                    }
                    return showDeleteButton;
                  })}
                  {showDeleteButton ? (
                    <p
                      className="text-danger"
                      onClick={() => this.props.deleteGroup(group)}
                      style={{ cursor: "pointer" }}
                    >
                      This group is empty. Want to delete it?
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  deleteGroup: group => dispatch(deleteGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
