import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route , Link } from "react-router-dom";

import TodoList from "./Components/Todolist";
import EditTodo from "./Components/Edittodo";
import CreateTodo from "./Components/Createtodo";
import logo from "./logo.jpg";


class App extends Component {
  render() {
    return (
      <Router>
          <div className = "container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="http://portfolio-robin.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={logo} width="30px" height="30px" alt="robin.me" /> 
              </a>
              <Link to="/" className="navbar-brand">Todo</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/create" className="nav-link">Create-Todo</Link>
                  </li>
                </ul>
              </div> 
              </nav>

              <Route path='/' exact component={TodoList} />
              <Route path="/edit/:id" component={EditTodo} />
              <Route path="/create" component={CreateTodo} />
          </div>  
      </Router>
    );
  }
}

export default App;
