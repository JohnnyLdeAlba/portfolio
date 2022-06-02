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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';


const config = {
  palette: {
    background: '#171730',
    darkerPurple: '#0b0b18',
    darkPurple: '#171730',
    lightPurple: '#25253d',
    lighterPurple: '#5c5c80',
    pink: '#b6669f',
    link: '#b2a2bb',

    icon: '#b6669f',
    miniCard: '#171730',
    subtitle: '#b6669f'
  },

  zIndex: {
    projectView: 9999
  },

  drawerWidth: '280px',
  drawerTransition: 200
};

function getConfig() {return config;}

const theme = createTheme({
  palette: {
    primary: { main: config.palette.icon },
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
        controller.drawerColor = config.palette.lightPurple;
      }
      else {
        controller.show(false);
        controller.backdropShow(false);
        controller.drawerColor = config.palette.darkPurple;
      }

      controller.windowWidth = window.innerWidth;
    }

  });
}

function ExpandIcon() {
  return (
    <ExpandMoreIcon sx={{color: config.palette.link}} />
  );
}

function SigilIcon(props: {variant?:string}) {

  const config = getConfig();
  const width = props.variant ? '38px' : '48px'; 

  const Image = styled('img')({
    width: width
  });

  return (<Image src="sigil-purple.svg" alt="" />);
}

function SignatureIcon(props: {variant?:string}) {

  const config = getConfig();
  const height = props.variant ? '38px' : '38px'; 

  const Image = styled('img')({
    height: height
  });

  return (<Image src="signature-purple.svg" alt="" />);
}

function ProfilePhoto() {

  const Image = styled('img')({
    margin: '0px auto 8px',
    width: '80%',
    borderRadius: '8px'
  });

  return (<Image src="profile-photo.jpg" alt="" />);
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
    controller.drawerColor = config.palette.lightPurple;
    controller.intervalId = setInterval(
      getCallbackInterval(controller), 250);
  }

  const style = {

    logo: {
      display: 'flex',
      width: 'inherit',
      margin: '8px 16px',
    },

    icon: {
      marginRight: '0.4em',
    },

    listCategory: {
      margin: '8px 16px',
      width: 'inherit',
      border: '1px solid #000000',
      borderRadius: '6px',
      backgroundColor: config.palette.darkPurple,
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.4em',
      color: config.palette.link
    },

    listSubCategory: {
      margin: '8px 32px',
      padding: '8px 0',
      width: 'inherit',
      border: '1px solid ' + config.palette.link,
      borderWidth: '0 0 1px 0',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.4em',
      color: config.palette.link
    },

    listItem: {
      margin: '8px 16px',
      width: 'inherit',
      borderRadius: '6px',
      fontSize: '16px',
      color: config.palette.link,
      transition: '500ms',
      ':hover': {backgroundColor: config.palette.lighterPurple}
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
          width: config.drawerWidth,
          borderRight: 0,
          backgroundColor: controller.drawerColor,
        }}}>
        <List>
          <ListItem sx={style.logo}><SigilIcon /> &nbsp;&nbsp; <SignatureIcon variant="small" /></ListItem>
          <ListItem sx={style.listCategory}>
            Explore
          </ListItem>
          <ListItem component={Link} href="https://github.com/JohnnyLdeAlba" button sx={style.listItem}>
            Home
          </ListItem>
          <ListItem component={Link} href="https://github.com/JohnnyLdeAlba" button sx={style.listItem}>
            Projects 
          </ListItem>
        </List>

        <List sx={{flexDirfection: 'column'}}>
          <ListItem sx={style.listCategory}>
            Contact
          </ListItem>
          <ListItem component={Link} href="https://github.com/JohnnyLdeAlba" button sx={style.listItem}>
            <GitHubIcon sx={style.icon} /> GitHub
          </ListItem>
          <ListItem component={Link} href="https://www.linkedin.com/in/johnnyldealba" button sx={style.listItem}>
            <LinkedInIcon sx={style.icon} /> LinkedIn
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

  const style = {
    logo: {
      display: 'block',
      '@media (min-width: 800px)': {display: 'none'}
    }
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
        backgroundColor: config.palette.lightPurple,
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
      <IconButton component={Link} href="." color="inherit" sx={style.logo}>
        <SigilIcon variant="small" /> &nbsp;&nbsp; <SignatureIcon />
      </IconButton>
    </AppBar>
  );
}

function Headline() {

  const Container = Box;
  const H1 = styled('h1')({
    fontSize: '24px',
    fontWeight: 'bold'
  });

  return (
    <Container sx={{padding: '8px', color: '#ffffff'}}>
      <H1>Johnny L. de Alba</H1>
      <p>Software Engineer - Vallejo, California</p>
      <p>Education: Contra Costa College 2010 - 2011 GPA: 3.5</p>
    </Container>
  );
}

function Card(props: {
  title?:string,
  icon?:React.ReactNode,
  children?:React.ReactNode
}) {

  const title = props.title ? props.title : '';

  const config = getConfig();

  const IconWrapper = styled(Box)({
    marginRight: '0.4em',
    color: config.palette.pink
  });

  return (
    <Accordion
      defaultExpanded={true}
      disableGutters
      sx={{
        marginBottom: '16px',
        border: '1px solid #000000',
        background: config.palette.lighterPurple,
        color: config.palette.link
    }}>
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        sx={{
          margin: '1px',
          borderRadius: '4px',
          backgroundColor: config.palette.darkPurple,
          color: config.palette.link
        }}

      >
        <IconWrapper>{props.icon}</IconWrapper>
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          margin: '0px 1px 1px 1px',
          paddingTop: '16px',
          borderRadius: '0px 0px 4px 4px',
          backgroundColor:config.palette.lightPurple,
          color: config.palette.link
        }}
      >
        {props.children}
      </AccordionDetails>
    </Accordion>
  );
}

function MiniCard() {

  const config = getConfig();

  const MiniCard = styled(Box)({
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '4px',
    backgroundColor: config.palette.miniCard
  });

  const Preview = styled(Box)({
    overflow: 'hidden'
  });

  const Image = styled('img')({
    display: 'block',
    position: 'relative', 
    width: '100%',
    transition: 'transform .4s',
    ':hover': {
      transform: 'scale(1.2)'
    }
  });

  const Body = styled(Box)({
    padding: '8px'
  });

  const Heading = styled('h1')({
    margin: '8px',
    fontSize: '18px'
  });

  const SubTitle = styled('div')({
    margin: '8px',
    fontSize: '14px',
    color: config.palette.subtitle
  }); 

  const Date = styled('div')({
    margin: '8px',
    fontSize: '14px',
    textAlign: 'right'
  });

  return (
    <MiniCard>
      <Preview>
        <Image src="profile-photo.jpg" alt="" />
      </Preview>
      <Body>
        <Heading>Test</Heading>
        <SubTitle>test</SubTitle>
        <Date>test</Date>
      </Body>
    </MiniCard>
  );
}

function Gallery(props: {
  title?:string,
  children?: React.ReactNode
}) {

  const title = props.title ? props.title : '';

  const Container = styled(Box)({

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });

  const GalleryItem = styled(Box)({
    
    padding: '8px',
    width: '50%',

    '@media (min-width: 1200px)': {
      width: '33.33%'
    }
  });

  return (
    <Card
      icon={<FlashOnIcon />}
      title={title}>
      <Container>
        <GalleryItem><MiniCard /></GalleryItem>
      </Container>
    </Card>
  );
}

function ColumnLayout(props:{children?:React.ReactNode}) {

  const ColumnLayout = styled(Box)({

    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: '16px',
    maxWidth: '1200px',

    '@media (min-width: 1200px)': {
      flexDirection: 'row',
      margin: '0 auto',
    }
  });

  return <ColumnLayout>{props.children}</ColumnLayout>;
}

function Column(props:{children?:React.ReactNode}) {

  const Column = styled(Box)({

    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    width: 'inherit',

    '@media (min-width: 1200px)': {
      padding: '8px',
      width: '50%'
    }
  });

  return <Column>{props.children}</Column>;
}

function LinkItem(props: {
  href?:string,
  icon?:React.ReactNode,
  children?:React.ReactNode
}) {

  const LinkItem = styled('a')({
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '8px'
  });

  const IconWrapper = styled(Box)({
    paddingRight: '0.4em'
  });

  return (
    <LinkItem>
      <IconWrapper>{props.icon}</IconWrapper>
      <Link href={props.href}>{props.children}</Link>
    </LinkItem>
  );
}

function ProjectLinks(props: {websiteURL?:string, gitHubURL?:string}) {

  const websiteURL = props.websiteURL ? props.websiteURL : null;
  const gitHubURL = props.gitHubURL ? props.gitHubURL : null;

  if (websiteURL == null && gitHubURL == null) return null;

  return (
    <Card icon={<LanguageIcon />} title="External Links">
      {websiteURL ? <LinkItem icon={<PublicIcon />} href={websiteURL}>{websiteURL}</LinkItem> : null}
      {gitHubURL ? <LinkItem icon={<PublicIcon />} href={gitHubURL}>{gitHubURL}</LinkItem> : null}
    </Card>
  );
}

function Project(props:{
  title?:string,
  previewImage?:string,
  children?:React.ReactNode
}) {

  const config = getConfig();

  const Container = Box;
  const Image = styled('img')({
    width: '100%'
  });

  return (
      <ColumnLayout>
        <Column>
          <Image src={props.previewImage} alt="" />
        </Column>
        <Column>
          <Card icon={<FlashOnIcon />} title={props.title}>
            {props.children}
          </Card>
          <ProjectLinks />
        </Column>
      </ColumnLayout>
  );
}

function Layout() {

  const config = getConfig();

  const Container = styled(Box)({

    padding: 0,
    '@media (min-width:800px)': {
      paddingLeft: config.drawerWidth
    }
  });

  const RowLayout = styled(Box)({

    padding: '24px',
    width: 'inherit',
    maxWidth: '1200px',

    '@media (min-width: 1200px)': {
      flexDirection: 'row',
      margin: '0 auto'
    }
  });

  return (<>

    <Menubar />
    <Navigation />
    <Container>

      <ColumnLayout>
        <Column>
          <ProfilePhoto /> 
          <Headline />
         <Card icon={<AccountBoxIcon />} title="About Johnny L. de Alba">
I am a freelance developer from Vallejo, California with experience in a variety of programming disiplines. I'm a Full Stack developer, a UX/UI designer, web3 developer, a game designer, a Database devleoper, and I can reverse engineer software from a variety of different platforms.
         </Card>
        </Column>
        <Column>
          <Card title="Skills" />
          <Card title="Experience">
            <Stepper orientation="vertical">
              <Step active expanded sx={{

                 '.MuiStepIcon-text': {fill: config.palette.icon}
              }}>
                <StepLabel>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                </StepLabel>
                <StepContent>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                </StepContent>
              </Step>

              <Step active expanded sx={{

                 '.MuiStepIcon-text': {fill: config.palette.icon}
              }}>
                <StepLabel>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                </StepLabel>
                <StepContent>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                </StepContent>
              </Step>
 
              <Step active expanded sx={{

                 '.MuiStepIcon-text': {fill: config.palette.icon}
              }}>
                <StepLabel>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                </StepLabel>
                <StepContent>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                  <Box sx={{color: '#ffffff'}}>Test</Box>
                </StepContent>
              </Step>

            </Stepper>
          </Card>
        </Column>
      </ColumnLayout>

      <RowLayout>
        <Gallery title="Projects" />
      </RowLayout>

      <Project title="Project Name" previewImage="profile-photo.jpg" />
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
