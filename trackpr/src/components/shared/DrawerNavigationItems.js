import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';


const DrawerNavigationItems =  (props) => {
    return (
        <List>               
            <Link to="/activities">
                <ListItem  button key='activities'>                  
                    <ListItemIcon><Icon color="primary">show_chart</Icon></ListItemIcon>
                    <ListItemText className={props.classes.navigation} primary='Activities' />
                </ListItem>
            </Link>
            <Link to="/blog">
                <ListItem  button key='blog'>                  
                    <ListItemIcon><Icon color="primary">format_bold</Icon></ListItemIcon>
                    <ListItemText className={props.classes.navigation} primary='Blog' />
                </ListItem>
            </Link>
            <Link to="/events">
                <ListItem  button key='events'>                  
                    <ListItemIcon><Icon color="primary">calendar_today</Icon></ListItemIcon>
                    <ListItemText className={props.classes.navigation} primary='Events' />
                </ListItem>
            </Link>
        </List>
        );
}

export default DrawerNavigationItems;
