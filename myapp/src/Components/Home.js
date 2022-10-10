import { Component } from "react";
import profilePic from "../Images/Profile-image.png";

let name = "Satya Nadella";
let description ="Satya Nadella is Chairman and Chief Executive Officer of Microsoft. Before being named CEO in February 2014, Nadella held leadership roles in both enterprise and consumer businesses across the company. Joining Microsoft in 1992, he quickly became known as a leader who could span a breadth of technologies and businesses to transform some of Microsoft’s biggest product offerings.";

class Home extends Component {
  state = { userName: name, userDescription: description };

  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ userDescription: event.target.value });
  };

  render() {
    const { userName, userDescription } = this.state;
    return (
      <div class="container">
        <div class="row">
          <div class="col-3">
            <img class="w-100 h-120" src={profilePic} alt="profileImage" />
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <h1 class="main-heading">{userName}</h1>
            <p class="description d-inline-flex" align="justify">{userDescription}</p>
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <div className="m-1">
              <label class="m-3" htmlFor="myUserName" >
               <b>Edit Name:</b>
              </label>
              <input id="myUserName" onChange={this.onChangeName} type="text" placeholder="Type here to edit name"/>
            </div>
            <div class="m-1">
              <label class="m-3" htmlFor="myDescription">
               <b>Edit Description:</b>
              </label>
              <input id="myDescription" onChange={this.onChangeDescription} type="text" placeholder="Type here to edit description"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;