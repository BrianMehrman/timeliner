// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './css/App.css';

import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

class Main extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='Main'>
        <App className='wrap container-fluid'>
          <Sidebar colorIndex='neutral-1'>
            <Header pad='medium' justify='between'>
              <Title>Title</Title>
              <Box flex='grow' justify='start'>
                <Menu primary={true}>
                  <Anchor href='#' className='active'>
                    First
                  </Anchor>
                  <Anchor href='#'>
                    Second
                  </Anchor>
                  <Anchor href='#'>
                    Third
                  </Anchor>
                </Menu>
              </Box>
            </Header>
          </Sidebar>
          <Box direction='row' flex={true} justify='center' align='center' colorIndex='neutral-1'>
            <Header>
              <Title>Header</Title>
            </Header>
           </Box>
           <Hero>
             <Box direction='row' justify='center' align='center' colorIndex='light-2'>
               <Heading>Hero</Heading>
             </Box>
           </Hero>
          <Box direction='column' flex={true} justify='center' align='center' colorIndex='accent-1'>
            <Box direction='row' flex={true} pad='large' size={{"width": {"max": "xxlarge"}}}>
              <Box justify='center' align='center' colorIndex='light-1' size={{"width": "large", "height": "medium"}}>
                Section
              </Box>
             </Box>
             <Box direction='row' flex='grow' justify='center' align='center' pad={{vertical: 'medium'}}>
               <Card heading='Card' contentPadi='medium' justify='center' pad={{horizontal: "large"}}/>
               <Card heading='Card' contentPad='medium' justify='center' pad={{horizontal: "large"}}/>
               <Card heading='Card' contentPad='medium' justify='center' pad={{horizontal: "large"}}/>
             </Box>
          </Box>
        </App>
      </div>
    );
  }
}

let data = (state) => ({});

export default connect(data)(Main);
