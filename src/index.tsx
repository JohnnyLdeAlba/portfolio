import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {styled, createTheme, ThemeProvider} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Backdrop from '@mui/material/Backdrop';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const config = {
  palette: {
    background: '#25253d',
    darker: '#0b0b18',
    dark: '#171730',
    light: '#25253d',
    lighter: '#5c5c80',
    link: '#8080a6'
  },

  drawerWidth: '270px',
  drawerTransition: 200
};

function getConfig() {return config;}

const theme = createTheme({
  palette: {
    background: {
      default: config.palette.background
    }
  }
});

class t_controller {

  intervalActive:boolean;
  intervalId:ReturnType<typeof setInterval>;
  visible:boolean;
  show:Function;
  backdropVisible:boolean;
  backdropShow:Function;
  drawerColor:string;
  windowWidth:number;

  constructor() {

    this.intervalActive = false;

    this.intervalId = setInterval(() => {}, 0);
    clearInterval(this.intervalId);

    this.visible = false;
    this.show = (visible:boolean) => null;
    this.backdropVisible = false;
    this.backdropShow = (visible:boolean) => null;
    this.drawerColor = '';
    this.windowWidth = 0;
  }
}

class t_context {

  controllers: {[key:string]:t_controller};

  constructor() {
    this.controllers = {};
  }

  getController(id:string) {
    
    if (typeof this.controllers[id] == 'undefined') {
      const controller = new t_controller;
      this.controllers[id] = controller;
    }

    return this.controllers[id];
  }
};

const context = new t_context();
function getContext() {return context;}
function getController(id:string) {return context.getController(id);}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function getCallbackInterval(controller:t_controller) {

  const config = getConfig();

  controller.intervalActive = true;

  return (() => {

    if (controller.windowWidth != window.innerWidth) {

      if (window.innerWidth >= 800) {
        controller.show(true);
        controller.backdropShow(false);
        controller.drawerColor = config.palette.light;
      }
      else {
        controller.show(false);
        controller.backdropShow(false);
        controller.drawerColor = config.palette.dark;
      }

      controller.windowWidth = window.innerWidth;
    }

  });
}

function SigilIcon(props: {variant?:string}) {

  let width = props.variant ? '38px' : '48px'; 

  const Image = styled('img')({
    width: width
  });

  return (<Image src="sigil.svg" alt="" />);
}

function SignatureIcon(props: {variant?:string}) {

  let height = props.variant ? '38px' : '38px'; 

  const Image = styled('img')({
    height: height
  });

  return (<Image src="signature.svg" alt="" />);
}

function Navigation(props: {children?:React.ReactNode}) {

  const config = getConfig();
  const controller = getController('navigation');

  const [backdropVisible, backdropShow] = React.useState(false);
  const [visible, show] = React.useState(false);

  const backdropOnClick = () => {
    backdropShow(false);
    show(false);
  };

  controller.visible = visible;
  controller.show = show;
  controller.backdropVisible = backdropVisible;
  controller.backdropShow = backdropShow;

  if (controller.intervalActive == false) {
    controller.drawerColor = config.palette.light;
    controller.intervalId = setInterval(
      getCallbackInterval(controller), 250);
  }

  const style = {

    logo: {
      display: 'flex',
      width: 'inherit',
      margin: '8px 16px',
      '@media (min-width: 800px)': {display: 'none'}
    },

    listIcon: {
      marginRight: '0.25em',
      width: '24px'
    },

    listCategory: {
      margin: '8px 16px',
      width: 'inherit',
      borderRadius: '6px',
      backgroundColor: config.palette.dark,
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.4em',
      color: '#ffffff'
    },

    listItem: {
      margin: '8px 16px',
      width: 'inherit',
      borderRadius: '6px',
      fontSize: '16px',
      color: '#ffffff',
      transition: '500ms',
      ':hover': {backgroundColor: config.palette.lighter}
    }
  };

  return (<>
      <Backdrop
        open={controller.backdropVisible}
        transitionDuration={config.drawerTransition}
        onClick={backdropOnClick}
      />
      <Drawer
        variant="persistent"
        anchor="left"
        open={controller.visible}
        transitionDuration={config.drawerTransition}
        PaperProps={{sx: {
          marginTop: 0,
          width: config.drawerWidth,
          borderRight: 0,
          backgroundColor: controller.drawerColor,
          '@media (min-width: 800px)': {marginTop: '70px'}
        }}}>
        <List sx={{flexDirfection: 'column'}}>
          <ListItem sx={style.logo}><SigilIcon /> &nbsp;&nbsp; <SignatureIcon variant="small" /></ListItem>
          <ListItem sx={style.listCategory}>
            Contact
          </ListItem>
          <ListItem component={Link} href="https://github.com/JohnnyLdeAlba" button sx={style.listItem}>
            <GitHubIcon sx={style.listIcon} /> GitHub
          </ListItem>
          <ListItem component={Link} href="https://www.linkedin.com/in/johnnyldealba" button sx={style.listItem}>
            <LinkedInIcon sx={style.listIcon} /> LinkedIn
          </ListItem>
        </List>
        <List>
          <ListItem sx={style.listCategory}>
            Explore
          </ListItem>

        </List>
      </Drawer>
  </>);
}

function Menubar(props: {children?: React.ReactNode}) {

  const config = getConfig();
  const controller = getController('navigation');

  const drawerOnClick = () => {
    controller.backdropShow(!controller.backdropVisible);
    controller.show(!controller.visible);
  };

  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '8px',
        height: '70px',
        backgroundColor: config.palette.light,
        boxShadow: 'none',
    }}>
      <IconButton 
        color="inherit"
        onClick={drawerOnClick}
        sx={{
          display: 'flex',
          '@media (min-width: 800px)': {display: 'none'} 
      }}>
        <MenuIcon sx={{marginTop: '8px', width: '38px'}}/>
      </IconButton>
      <IconButton component={Link} href="." color="inherit">
        <SigilIcon variant="small" /> &nbsp;&nbsp; <SignatureIcon />
      </IconButton>
    </AppBar>
  );
}

function Layout() {

  const config = getConfig();
  const Container = Box;

  return (<>
    <Menubar />
    <Navigation />
    <Container sx={{
      paddingLeft: 0,
      width: '100%',

      '@media (min-width:800px)': {
        paddingLeft: config.drawerWidth
      }
    }}>

    </Container>
  </>);
}

root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <CssBaseline />

  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Layout />} />
    </Routes>
  </BrowserRouter>

  </ThemeProvider>
  </React.StrictMode>
);
