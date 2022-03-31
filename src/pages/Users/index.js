import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteUser } from "../../actions/users";
import "./styles.css";

class UsersPage extends Component {
  
  render() {
    const { users } = this.props;

    return (
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i class="fas fa-arrow-left" /> Back to dashboard
            </h3>
          </Link>
        </div>
        <hr />
        <h1>Users</h1>

        <div>
          <div className="card-columns">
            <Link to="/users/create" style={{ color: "white" }}>
              <div className="card groupCard">
                <h2 className="text-center">
                  <i class="fas fa-user-plus" /> Add User
                </h2>
              </div>
            </Link>
            {users.map((user, i) => (
              <div className="card groupCard">
                <Link to={`/users/${user.name}`} style={{ color: "white" }}>
                  <div key={i}>
                    <h2 className="text-center">
                      <i class="fas fa-user" /> {user.name}
                    </h2>
                  </div>
                </Link>

                <p
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.deleteUser(user)}
                >
                  Delete this user?
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
console.log(mapStateToProps +"mapStateToProps");
const mapStateToProps = state => ({
  users: state.users,
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  deleteUser: user => dispatch(deleteUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
