import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import './App.css';

import Inicio from './pages/Inicio/inicio'

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const App = () => (
  <Router>
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Joana Barros
          </Typography>
          {/* <Button color="inherit" to="/about">
            <Link to="/about">Public Page</Link>
          </Button> */}
          {/* <NavLink to="/about" activeClassName="selected">
          about
          </NavLink> */}
         {/* <ListItem button component={Link} to="/about">SOBRE</ListItem> */}
         <Button 
          button
         component={Link}
          color="inherit" 
          to="/about">
          Sobre
        </Button>
            
        </Toolbar>
      </AppBar>

      <Route path="/" exact component={Inicio} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default App;

