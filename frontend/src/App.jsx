// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./Components/styles/index.css";
// import Home from './Home';
// import Driver from './Driver';
// import GetDrive from './GetDrive';
// import Login from './Login';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/driver" component={Driver} />
        <Route path="/get-drive" component={GetDrive} />
        <Route path="/login" component={Login} />
      </Switch> */}
    </Router>
  );
};

export default App;
