import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createGroup } from "../../actions/createGroups";
import uuid from "uuid";

class CreateGroups extends Component {
  constructor() {
    super();

    this.state = {
      newGroup: {
        id: "",
        name: ""
      }
    };
  }

  handleChangeGroupInput = e => {
    const { value } = e.target;
    this.setState(state => ({
      ...state,
      newGroup: {
        ...state.newGroup,
        name: value
      }
    }));
  };

  cleanNewGroup = () => {
    this.setState({
      newGroup: {
        id: "",
        name: ""
      }
    });
  };

  createGroup(group) {
    if (group.name) {
      let getId = 1;
      const { groups } = this.props;
      if (groups.length) {
        getId = groups[groups.length - 1].id + 1;
      }

      this.setState(
        state => ({
          ...state,
          newGroup: {
            ...state.newGroup,
            id: getId,
            name: group.name
          }
        }),
        () => {
          this.props.createGroup(this.state.newGroup);
          this.cleanNewGroup();
          this.props.history.push("/groups");
        }
      );
    }
  }

  render() {
    const { newGroup } = this.state;

    return (
      <div>
        <div>
          <Link to="/groups" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i className="fas fa-arrow-left" /> Back to groups
            </h3>
          </Link>
        </div>
        <h2>Create {newGroup.name}</h2>
        <div className="form-group">
          <label>Group Name:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            value={newGroup.name}
            onChange={this.handleChangeGroupInput}
          />
          <br />
          <button
            className="btn btn-primary"
            onClick={() => this.createGroup(newGroup)}
          >
            Add Group
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroups);
