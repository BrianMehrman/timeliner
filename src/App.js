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
import Split from 'grommet/components/Split';
import Table from 'grommet/components/Table';
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
          <Split separator={true} flex='right'>
            <Sidebar colorIndex='neutral-1'
              pad='none'
              size='small'>
              <Header pad='small' justify='between'>
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
            <Box direction='column'
              flex={true}
              pad='none'
              justify='center'
              colorIndex='neutral-2'>
              <Box direction='row' flex={true} justify='center' align='center' colorIndex='neutral-1'>
                <Header>
                  <Title>Header</Title>
                </Header>
              </Box>
              <Box direction='row' justify='center' align='center' size={{height: 'small'}} colorIndex='light-2'>
                <Hero>
                  <Heading>Hero</Heading>
                </Hero>
              </Box>
              <Box direction='column' flex={true} justify='center' align='center' colorIndex='accent-1'>
                <Table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Hook</th>
                      <th>Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>RecipesController#index</td>
                      <td>12345</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>RecipesController#index</td>
                      <td>12346</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>RecipesController#show</td>
                      <td>12346</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>RecipesController#delete</td>
                      <td>12347</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>RecipesController#index</td>
                      <td>12346</td>
                    </tr>
                  </tbody>
                </Table>
              </Box>
            </Box>
          </Split>
        </App>
      </div>
    );
  }
}

let data = (state) => ({});

export default connect(data)(Main);
