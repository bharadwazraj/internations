import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../actions/createUsers";
import "./styles.css";

class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      newUser: {
        name: "",
        groups: []
      },
      errorMessage:"",
      checkedBool: false
    };
  }

  removeGroupFromNewUser = (group = "") => {
    const { groups } = this.state.newUser;
    const index = groups.indexOf(group);

    if (index !== -1) {
      this.setState(state => ({
        ...state,
        newUser: {
          ...state.newUser,
          groups: [...groups.slice(0, index), ...groups.slice(index + 1)]
        }
      }));
    }
  };

  addGroupToNewUser = (group = "") => {
    this.setState(state => ({
      ...state,
      newUser: {
        ...state.newUser,
        groups: [...state.newUser.groups, group]
      }
    }));
  };

  isGroupAssigned = group => {

    const { groups } = this.state.newUser;
    return groups.indexOf(group) !== -1;
  };

  handleGroupChange = (e, group) => {
    const { checked } = e.target;
     this.setState({checkedBool: checked});
    if (checked) {
      this.addGroupToNewUser(group);
      this.setState({errorMessage:""})
    } else {
      this.removeGroupFromNewUser(group);      
    }
  };

  handleChangeUserInput = e => {
    const { value } = e.target;
    this.setState(state => ({
      ...state,
      newUser: {
        ...state.newUser,
        name: value
      }
    }));
  };

  cleanNewUser = () => {
    this.setState({
      newUser: {
        name: "",
        groups: []
      }
    });
  };

  createUser(newUser) {
    if (newUser.name !== "" && this.state.checkedBool) {
      this.props.createUser(newUser);      
      this.cleanNewUser();
      this.props.history.push("/users");
      this.setState({errorMessage:""})
    }
    else{
      this.setState({errorMessage:"Please select error MessaGE"})
    }
  }

  render() {
    const { newUser } = this.state;
    const { groups } = this.props;

    return (
      <div>
        <div>
          <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i className="fas fa-arrow-left" /> Back to users
            </h3>
          </Link>
        </div>
        <h2>Add User: {newUser.name}</h2>
        <hr />
        <div className="addUserWrapper form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            value={newUser.name}
            onChange={this.handleChangeUserInput}
          />
          <hr />
          <h3>Available groups to assign:</h3>
          {groups.length ? (
            <div className="rows">
              <div className="columns">
                {groups.map((group, i) => (
                  <div key={i} className="col-md-4 text-center groupChoice">
                    <h4>{group.name}</h4>

                    <input
                      type="checkbox"
                      onChange={e => this.handleGroupChange(e, group)}
                      checked={this.isGroupAssigned(group)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p>Sorry... currently there are no groups to assign</p>
            </div>
          )}
          {this.state.errorMessage && <h3> {this.state.errorMessage}</h3>}
          <div>
            <button
              className="btn btn-primary"
              onClick={() => this.createUser(newUser)}
            >
              Create User{" "}
            </button>
          </div>
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
  createUser: user => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
