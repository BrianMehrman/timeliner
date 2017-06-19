import React from 'react';
import { connect } from 'react-redux';

import ReportsTable from './ReportsTable';
import TimeGraph from './TimeGraph';

import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';

const TimelineDashboard = ({ reports }) => {
  return (
    <Box direction='column'
      flex={true}
      pad='none'
      justify='center'
      colorIndex='neutral-2'>
      <Box direction='row'
        flex={true}
        justify='center'
        align='center'
        colorIndex='neutral-1'>
        <Header>
          <Title>Header</Title>
        </Header>
      </Box>
      <TimeGraph reports={reports} />
      <ReportsTable reports={reports} />
    </Box>
  )
}

const daysAgo    = ((days, date) => { let d = date || new Date(); d.setDate(d.getDate() - (days || 1)); return d; });
const hoursAgo   = ((hours, date) => { let d = date || new Date(); d.setHours(d.getHours() - (hours || 1)); return d; });
const minutesAgo = ((mins, date) => { let d = date || new Date(); d.setMinutes(d.getMinutes() - (mins || 1)); return d; });

let data = (state) => ({
  selectedReport: undefined,
  reports: [
    {
      id: 'abc',
      hook: 'foo#index',
      session: 'xxy',
      start: daysAgo(1, hoursAgo(2)),
      printers: [
        {
          type: 'graph-text',
          name: 'Graph Text',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'graph-html',
          name: 'Graph HTML',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'call-stack',
          name: 'Call Stack',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        }
      ]
    },
    {
      id: 'abe',
      hook: 'foo#index',
      session: 'xxy',
      start: hoursAgo(2, minutesAgo(4)),
      printers: [
        {
          type: 'graph-text',
          name: 'Graph Text',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'graph-html',
          name: 'Graph HTML',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'call-stack',
          name: 'Call Stack',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        }
      ]
    },
    {
      id: 'abs',
      hook: 'foo#show',
      session: 'xxy',
      start: hoursAgo(1, minutesAgo(-5)),
      printers: [
        {
          type: 'graph-text',
          name: 'Graph Text',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'graph-html',
          name: 'Graph HTML',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'call-stack',
          name: 'Call Stack',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        }
      ]
    },
    {
      id: 'abx',
      hook: 'foo#index',
      session: 'xxy',
      start: daysAgo(3, hoursAgo(2)),
      printers: [
        {
          type: 'call-stack',
          name: 'Call Stack',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        }
      ]
    },
    {
      id: 'a1c',
      hook: 'foo#index',
      session: 'xxy',
      start:  minutesAgo(4)
    },
    {
      id: 'w2c',
      hook: 'foo#index',
      session: 'u83',
      start: hoursAgo(4, minutesAgo(-5)),
      printers: [
        {
          type: 'graph-text',
          name: 'Graph Text',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'graph-html',
          name: 'Graph HTML',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'call-stack',
          name: 'Call Stack',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        }
      ]
    },
    {
      id: 'a4c',
      hook: 'foo#index',
      session: 'e2x',
      start: daysAgo(3, hoursAgo(12))
    },
    {
      id: 'ade',
      hook: 'foo#index',
      session: '3ex',
      start: hoursAgo(7, minutesAgo(4)),
      printers: [
        {
          type: 'graph-html',
          name: 'Graph HTML',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        },
        {
          type: 'call-stack',
          name: 'Call Stack',
          url: 'tmp/recipes#index/20170528T183956/graph.txt'
        }
      ]
    },
    {
      id: 'a32',
      hook: 'foo#edit',
      session: '3ex',
      start: hoursAgo(9, minutesAgo(-5))
    }
  ]
});

export default connect(data)(TimelineDashboard);
