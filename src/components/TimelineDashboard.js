import React from 'react';

import ReportsTable from './ReportsTable';
import TimeGraph from './TimeGraph';

import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Split from 'grommet/components/Split';

const TimelineDashboard = ({...props}) => {
  return (
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
      { TimeGraph() }
      { ReportsTable() }
    </Box>
  )
}

export default TimelineDashboard;
