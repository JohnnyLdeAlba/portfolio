import {createTheme} from '@mui/material/styles';
import getConfig from './config';

const config = getConfig();

const theme = createTheme({
  palette: {
    primary: { main: config.palette.icon },
    background: {
      default: config.palette.background
    }
  }
});

export default theme;
