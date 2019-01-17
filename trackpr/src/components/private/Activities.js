import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions';
import requireAuth from '../shared/RequireAuth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis} from 'recharts';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {metersToMiles, secondsToHours, mscTomph, converDate } from '../../utils/calc';

import '../../styles/App.css';

let chartData = [];

const initialState = {
    searchText: '',
    filteredItems: [],
    bothOn: false
};

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);
class Activities extends Component {

  constructor(props) {
    super(props);
    var test = this.props.fetchActivities(11389513);
    console.log(test)
    console.log(this.props)
    this.state = {
        bothOn: false
      }

  }

  componentDidMount() {
    console.log(this.props);
  }

  renderActivites() {

    if(this.props.activities && Object.values(this.props.activities)) {

        return this.props.activities.map(activity => {
            return (
              <h2>items</h2>
            )  
        })  

    }
  }



  render() {
    return (
      
      <span>{this.renderActivites()} yo</span>
 
      )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { activities: [] };
}

export default connect(mapStateToProps, actions)(requireAuth(Activities))


