import React, { Component } from "react";
import "./index.css";

import MyButton from "./partials/myButton";
import MyHeader from "./partials/myHeader";

//*
//<h1 className="text-2xl font-bold underline">Hello world!</h1>
//<h1>Users</h1>
//{this.state.users.map((user) => (
//  <div key={user.id}>{user.username}</div>
//))}
//

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <MyHeader></MyHeader>
      </div>
    );
  }
}

export default App;
