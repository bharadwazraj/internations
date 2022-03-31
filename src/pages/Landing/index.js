import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.css";
class Landing extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcome</h1>

        <div className="entry">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="choice">
              <h1 className="icon">
                <i class="far fa-user fa-2x" />
              </h1>

              <h2>Users</h2>
            </div>
          </Link>
          <Link to="/groups" style={{ textDecoration: "none" }}>
            <div className="choice">
              <h1 style={{}}>
                <i class="fas fa-users fa-2x" />
              </h1>

              <h2>Groups</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect()(Landing);
