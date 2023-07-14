import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from '../../components';
import Tabs from '../material-kit/tabs/tabs.jsx';
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const AppTable = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Table' }]} />
      </Box>
      <SimpleCard title="Students">
        <Tabs />
      </SimpleCard>
    </Container>
  );
};

export default AppTable;
