import React from 'react';

import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const TimeGraph = ({...props}) => {
  return (
    <Box direction='row' justify='center' align='center' size={{height: 'small'}} colorIndex='light-2'>
      <Hero>
        <Heading>Hero</Heading>
      </Hero>
    </Box>
  )
}

export default TimeGraph;
