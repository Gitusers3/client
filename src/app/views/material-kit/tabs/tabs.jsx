import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import StudentAll from '../tables/StudentAll';
import StudentQt from '../tables/StudentQt';
import StudentCd from '../tables/StudentCd';
import StudentCq from '../tables/StudentCq';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Cognitive" value="2" />
            <Tab label="Queue Tech" value="3" />
            <Tab label="Code Lab" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <StudentAll />
        </TabPanel>
        <TabPanel value="2">
          <StudentCq />
        </TabPanel>
        <TabPanel value="3">
          <StudentQt />
        </TabPanel>
        <TabPanel value="4">
          <StudentCd />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
