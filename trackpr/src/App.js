import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import NavDrawer from './components/shared/NavDrawer';
import SignIn from './components/shared/SignIn';

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
  render() {
    return (
      <MuiThemeProvider theme={theme}>
     
<BrowserRouter>
      <div className="App">

        <Route path="/signin" component={SignIn} />
        <Route path="/main">
          <NavDrawer>
          sd
          </NavDrawer>        
        </Route>

      </div>

        </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
