import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

import Inicio from './pages/Inicio/inicio'
import Sobre from './pages/sobre'
import Contato from './pages/Contato/contato'

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

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
         <Button 
          // button
         component={Link}
          color="inherit" 
          to="/">
          Início
        </Button>

         <Button 
          // button
         component={Link}
          color="inherit" 
          to="/sobre">
          Sobre
        </Button>

        <Button 
          // button
         component={Link}
          color="inherit" 
          to="/contato">
          Contato
        </Button>
            
        </Toolbar>
      </AppBar>

      <div style={{padding: '24px'}}>
        <Route path="/" exact component={Inicio} />
        <Route path="/sobre/" component={Sobre} />
        <Route path="/contato/" component={Contato} />
      </div>

      {/* <footer>Desenvolvido por Cleviane Rebeca</footer> */}
      
    </div>
  </Router>
);

export default App;

