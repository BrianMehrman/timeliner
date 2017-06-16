// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './css/App.css';

import Sidebar from './components/Sidebar';
import TimelineDashboard from './components/TimelineDashboard';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

class Main extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='Main'>
        <App className='wrap container-fluid'>
          <Split separator={true} flex='right'>
            { Sidebar() }
            { TimelineDashboard() }
          </Split>
        </App>
      </div>
    );
  }
}

let data = (state) => ({});

export default connect(data)(Main);
