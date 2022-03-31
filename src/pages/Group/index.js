import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import './styles.css';

import { editGroup } from "../../actions/groups";

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedGroup: {
        id: "",
        name: ""
      }
    };
  }

  getGroup = id => {
    const { groups, users } = this.props;
    console.log(users);
    return groups.find(group => group.id === +id);
  };
  getGroupmem = name => {
    const {users, groups} = this.props;
    let arr = [];
    // if(users[0].groups[0].name == name){
    //  arr.push(users[0].name);
    // }
    users.map(function(data){
      data.groups.map(function(result) {  
        if(result.name === name){
          arr.push(data.name);
        }
      })      
  })
    return arr;
  }

  render() {
    const group = this.getGroup(this.props.match.params.id);
    const getGroupMembers = this.getGroupmem(group.name);
    return (
      <div>
        <div>
          <Link to="/groups" style={{ textDecoration: "none", color: "black" }}>
            <h3>
              <i className="fas fa-arrow-left" /> Back to dashboard
            </h3>
          </Link>
        </div>
        <h2>{group.name}</h2>
        <label>Group</label>
        <hr />
        <div>
          <h3>Group Members:</h3>
          {getGroupMembers.map((data) => {
            return (
                <li>{data}</li>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups,
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  editGroup: (index, editedGroup) => dispatch(editGroup(index, editedGroup))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);
