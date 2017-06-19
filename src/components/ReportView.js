import React from 'react';

import Box from 'grommet/components/Box';
import Tabs from 'grommet/components/Tabs';
import Value from 'grommet/compoents/Value';

const DetailsView = ({report}) => {
  return (
    <Tab title='Details'>
      <Paragraph>
        Details View
      </Paragraph>
      <Box direction='column'
           flex={true}
           justify='left'
           align='center' >
        <Value value={report.id}
          icon={<Book />}
          label='ID'
          units='uuid' />
        <Value value={report.hook}
          icon{<Attraction />}
          label='Hook' />
        <Value value={report.session}
          icon={<Monitor />}
          label='Session' />
    </Tab>
  )
}

const PrinterView = ({ printer }) => {
  return (
    <Tab title={ printer.type }>
      <Paragraph>
      {printer.name}
      </Paragraph>
      <iframe
        src={printer.url}></iframe>
    </Tab>
  )
}

const ReportView = ({ report }) => {
  const printers = report.printers || [];

  return (
    <Box direction='row' flex={true} align='center' colorIndex='accent-2'>
      <Tabs>
        <DetailsView report={report} />
        { printers.map((printer) => (
          <PrinterView printer={printer} />
        ))}
      </Tabs>
    </Box>
  )
}

export default ReportView;
