import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import PropTypes from 'prop-types';
import './App.css';

import Inicio from './pages/Inicio/inicio'
import Sobre from './pages/sobre'
import Contato from './pages/Contato/contato'


const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


class App extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 0
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event, index) => {
    this.setState({ anchorEl: null, selectedIndex: index });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props

    console.log(this.props)

    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit" 
                aria-label="Menu" 
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}>
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Joana Barros
              </Typography>
            {/* <Button 
            component={Link}
              color="inherit" 
              to="/">
              Início
            </Button>

            <Button 
            component={Link}
              color="inherit" 
              to="/sobre">
              Sobre
            </Button>

            <Button 
            component={Link}
              color="inherit" 
              to="/contato">
              Contato
            </Button> */}

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={(event) => this.handleClose(event, 1)} selected={ 1 === this.state.selectedIndex} component={Link} to="/">Inicio</MenuItem>
              <MenuItem onClick={(event) => this.handleClose(event, 2)} selected={ 2 === this.state.selectedIndex} component={Link} to="/sobre">Sobre</MenuItem>
              <MenuItem onClick={(event) => this.handleClose(event, 3)} selected={ 3 === this.state.selectedIndex} component={Link} to="/contato">Contato</MenuItem>
            </Menu>
                
            </Toolbar>
          </AppBar>

          <div style={{padding: '24px 24px 35px 24px'}}>
            <Route path="/" exact component={Inicio} />
            <Route path="/sobre/" component={Sobre} />
            <Route path="/contato/" component={Contato} />
          </div>

          <footer style={{position: 'absolute', bottom: '0', top: 'auto', width:'100%'}}>
            <Typography variant="body2" gutterBottom style={{textAlign: 'center'}}>
              Desenvolvido por Cleviane Rebeca              
            </Typography> 
          </footer>
          
      </div>
    </Router>

    );
  }

}

// export default (withStyles)(App);
export default withStyles(styles)(App);

