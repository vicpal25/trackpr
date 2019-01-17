import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

import { Route, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import NavDrawer from './components/shared/NavDrawer';
import SignIn from './components/shared/SignIn';
import SignOut from './components/shared/SignOut';

import requireAuth from './components/shared/RequireAuth';

//Private Components
import Activities from './components/private/Activities';
import Blog from './components/private/Blog';
import Events from './components/private/Events';

import { createStore, applyMiddleware } from 'redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    "fontFamily": "Raleway",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
    },
  palette: {
      secondary: {
          main: '#d32f2f'
      }
    },
});

class App extends Component {

  state = {
    segments: []
}
  render() {

    if(this.props.authenticated) {
      return (
        <MuiThemeProvider theme={theme}>     
            <div className="App">
                <NavDrawer>
                <Route path="/activities" component={Activities} />
                <Route path="/signout" component={SignOut} />
                <Route path="/events" component={Events} />
                <Route path="/blog" component={Blog} />

                </NavDrawer>        
            </div>
        </MuiThemeProvider>
    );
    } else {
      return (<Route path="/" exact component={SignIn} />)
    }

  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
