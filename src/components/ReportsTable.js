import React from 'react';

import ReactJson from 'react-json-view';
import _ from 'lodash';

import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';

const ReportsTable = ({...props}) => {

  return (
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
  )
}

export default ReportsTable;
