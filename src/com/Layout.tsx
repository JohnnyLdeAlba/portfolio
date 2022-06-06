import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';

import {Navigation} from '../com/Navigation';
import Menubar from '../com/Menubar';

import getConfig from '../config';

export function RowLayout(props:{children:React.ReactNode}) {

  const RowLayout = styled(Box)({

    padding: '24px',
    width: 'inherit',
    maxWidth: '1200px',

    '@media (min-width: 1200px)': {
      flexDirection: 'row',
      margin: '0 auto'
    }
  });

  return <RowLayout>{props.children}</RowLayout>
}

export function Layout(props:{children?:React.ReactNode}) {

  const config = getConfig();

  const Container = styled(Box)({
    padding: 0,
    '@media (min-width:800px)': {
      paddingLeft: config.drawerWidth
    }
  });

  return (<>
    <Menubar />
    <Navigation />
    <Container>
      {props.children}
    </Container>
  </>);
}

