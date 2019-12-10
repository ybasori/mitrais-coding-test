import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <Router>
      <div className="container-fluid">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        
      </div>
    </Router>
  );
}

export default App;
