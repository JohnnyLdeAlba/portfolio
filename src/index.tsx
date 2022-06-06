import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {styled, ThemeProvider} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Link from '@mui/material/Link';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import HandymanIcon from '@mui/icons-material/Handyman';
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkIcon from '@mui/icons-material/Work';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import getConfig from './config';
import {getController} from './context';
import theme from './theme';

import {WorkHistory, Skills, portfolioItem, t_job} from './com/Experience';
import {RowLayout, Layout} from './com/Layout';
import {Portfolio} from './com/Portfolio';

import {
  skillList,
  projectHistory,
  workHistory,
  portfolioList
} from './database';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function ExpandIcon() {
  
  const config = getConfig();

  return (
    <ExpandMoreIcon sx={{color: config.palette.link}} />
  );
}

function ProfilePhoto() {

  const Image = styled('img')({
    margin: '0px auto 8px',
    width: '80%',
    borderRadius: '8px'
  });

  return (<Image src="profile-photo.jpg" alt="" />);
}

function Headline() {

  const config = getConfig();

  const Container = Box;
  const H1 = styled('h1')({
    margin: '4px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    color: config.palette.link
  });

   const H2 = styled('h2')({
    margin: '4px 0',
    fontSize: '14px',
    fontWeight: 'normal',
    color: config.palette.text
  });

  return (
    <Container sx={{padding: '8px', color: '#ffffff'}}>
      <H1>Johnny L. de Alba</H1>
      <H2>Software Engineer - Vallejo, California</H2>
      <H2>Education: Contra Costa College 2010 - 2011 &nbsp; GPA: 3.5</H2>
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

function ColumnLayout(props:{children?:React.ReactNode}) {

  const ColumnLayout = styled(Box)({

    display: 'flex',
    flexDirection: 'column',
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
      {gitHubURL ? <LinkItem icon={<GitHubIcon />} href={gitHubURL}>{gitHubURL}</LinkItem> : null}
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

function Index() {

  const config = getConfig();

  const Link = styled('a')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    marginTop: '20px',
    fontSize: '16px',
    color: config.palette.link,

    ':link': {
      color: config.palette.link,
      textDecoration: 'none'
    },

    ':visited': {
      color: config.palette.link,
      textDecoration: 'none'
     }
  });

  const LinkCaption = styled(Box)({
    marginRight: '0.4px'
  });

  return (
    <Layout>
      <ColumnLayout>
        <Column>
          <ProfilePhoto /> 
          <Headline />
          <Card icon={<AccountBoxIcon />} title="About Johnny L. de Alba">

I am a software developer from Vallejo, California with experience in a variety of programming disciplines. I'm a Full Stack developer, a UX/UI designer, web3 developer, a game designer, a Database devleoper, and I can reverse engineer software from a variety of different platforms.

          </Card>
          <Card icon={<HandymanIcon />} title="Technical Skills">
            <Skills list={skillList} />
          </Card>

        </Column>
        <Column>
          <Card icon={<BarChartIcon />} title="Featured Projects">
            <WorkHistory list={projectHistory} />
            <Link href="portfolio"><LinkCaption>View My Portfolio</LinkCaption><DoubleArrowIcon /></Link>
          </Card>
        </Column>
      </ColumnLayout>
      <RowLayout>
        <Card icon={<WorkIcon />} title="Experience">
          <WorkHistory list={workHistory} />
        </Card>
      </RowLayout>
      { /* <Project title="Project Name" previewImage="profile-photo.jpg" /> */ }
    </Layout>
  );
}

root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <CssBaseline />

  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Index />} />
      <Route path={'portfolio'} element={<Portfolio list={portfolioList} />} />
    </Routes>
  </BrowserRouter>

  </ThemeProvider>
  </React.StrictMode>
);
