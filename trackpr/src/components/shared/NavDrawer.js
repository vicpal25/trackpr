import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {compose} from 'redux';

import MainContent from './MainContent';


const drawerWidth = 240;

const styles = theme => ({
  navigation: {
    fontSize: '14px !important'
  },
  login: {
    float:'right',
    marginLeft:'auto',
    paddingRight:'15px'
  },
  icon: {

  },
  root: {
    display: 'flex',
  },
  appBar: {
    opacity: 1,
    display: 'block',
    fontSize: '14px',
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
    fontWeight: '300',
    lineHeight: '30px',
    backgroundColor:'transparent',
    color:'#000',
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    border:'1px solid #fff',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    border:'1px solid #fff',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
});


class NavDrawer extends Component {

  

state = {
    open: false,
    };

    handleDrawerOpen = () => {
    this.setState({ open: true });
    };

    handleDrawerClose = () => {
    this.setState({ open: false });
    };

    renderNavigation(classes) {
      if (!this.props.authenticated) {
        return (
          <Button color="inherit" className={classes.login}> <Link to="/signin">Login</Link></Button>
          );
      } else {
        return (
          <Toolbar disableGutters={!this.state.open}>            

          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, {
              [classes.hide]: this.state.open,
            })}
          >
            <MenuIcon className={classNames(classes.icon, 'fas fa-align-center')}  />
          </IconButton>

            <Typography variant="h6" color="inherit" noWrap>
              Mini variant drawer
            </Typography>
  
            <Button color="inherit" className={classes.login}> <Link to="/signout">Log Out</Link></Button>            
          </Toolbar>
          );

      }
    }   
    
    renderDrawer(classes) {
 
        return (         
          <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
          >
              <div className={classes.toolbar}>
                <IconButton onClick={this.handleDrawerClose}>
                  {this.state.open ?  <ChevronLeftIcon /> : <div className="spacer"></div> }
                </IconButton>
              </div>

              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem  button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText className={classes.navigation} primary={text} />
                  </ListItem>
                ))}
              </List>
          </Drawer>
        )
      
    }

  render() {

    const { classes, theme } = this.props;
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              {this.renderNavigation(classes)}
            </AppBar>
            {this.renderDrawer(classes)} 
            <MainContent>
              {this.props.children}
            </MainContent>  
        </div>
    )
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}
 
export default compose(
  connect(mapStateToProps),
  withStyles(styles, {
    withTheme: true
  })
)(NavDrawer);
