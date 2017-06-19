import React from 'react';

import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';

const ReportsTable = ({ reports }) => {

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
        { reports.map((report) => (
          <tr>
            <td>{report.id}</td>
            <td>{report.hook}</td>
            <td>{report.session}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default ReportsTable;
