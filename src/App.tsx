import * as React from 'react';
import './App.css';

import User from './classes/User';
import UserComponent from './components/UserComponent';
import UserService from './services/UserService';

const userList: User[] = new UserService().getUsers();

class App extends React.Component {
  public render() {
    const userListComponents = userList.map((user) => {
      return <div key={user.getName()}>
        <UserComponent user={user} />
      </div>
    })
    return (
      <div className="App">
        {userListComponents}
      </div>
    );
  }
}

export default App;
