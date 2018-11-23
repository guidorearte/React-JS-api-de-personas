import React, { Component } from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10&nat=es")
      .then(response => response.json())
      .then(data => {
        const data2 = data.results;
        this.setState({ users: data2 });
      });
  }

  render() {
    console.log(this.state.users);

    return (
      <div class="App">
        <header class="App-header">
          <h1 class="App-title">API DE PERSONAS</h1>
        </header>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>state</th>
              </tr>
            </thead>
            {this.state.users.map(user => {
              return (
                <tbody>
                  <tr key={user.id.value}>
                    <td>{user.name.first}</td>
                    <td>{user.login.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.location.street}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}



export default App;
