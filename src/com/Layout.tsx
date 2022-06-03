import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';

import {Navigation} from '../com/Navigation';
import Menubar from '../com/Menubar';

import getConfig from '../config';

export default function Layout(props:{children?:React.ReactNode}) {

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

