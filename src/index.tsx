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

import getConfig from './config';
import {getController} from './context';
import theme from './theme';

import Layout from './com/Layout';


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
      <Container>
        <GalleryItem><MiniCard /></GalleryItem>
      </Container>
  );

/*
  return (
    <Card
      icon={<FlashOnIcon />}
      title={title}>
      <Container>
        <GalleryItem><MiniCard /></GalleryItem>
      </Container>
    </Card>
  );
*/

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

function RowLayout(props:{children:React.ReactNode}) {

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

function Portfolio() {
  return (
    <Layout>
      <RowLayout>
        <Gallery title="Portfolio" />
      </RowLayout>
    </Layout>
  );
}

class t_job {

  title:string;
  company:string;
  date:string;
  location:string;
  experience:Array<string>;

  constructor() {

    this.title = '';
    this.company = '';
    this.date = '';
    this.location = '';
    this.experience = [];
  }
}

function createJob(
  title:string,
  company:string,
  date:string,
  location:string,
  experience:Array<string>
) {

  const job = new t_job();

  job.title = title;
  job.company = company;
  job.date = date;
  job.location = location;
  job.experience = experience;

  return job;
}

function Experience(props:{list:Array<string>}) {

  const List = styled('ul')({
    margin: '0 16px',
    padding: 0,
    fontSize: '14px'
  });

  return (
    <List>
      { props.list.map((item, index) => {
        return (<li>{item}</li>);
      }) }
    </List>
  );
}

function WorkHistory(props:{
  list:Array<t_job>,
  children?:React.ReactNode
}) {

  const config = getConfig();

  const style = {

    job: {
      '.MuiStepIcon-text': {fill: config.palette.icon}
    },

    content: {color: config.palette.text}
  };

  const Company = styled(Box)({
    fontSize: '18px',
    color: config.palette.text
  });

  const Date = styled(Box)({
    color: config.palette.link
  });

  const Location = styled('span')({
    float: 'right'
  });

  return (
    <Stepper orientation="vertical">

    { props.list.map((item, index) => {    
      return (
        <Step key={index} active expanded sx={style.job}>
          <StepLabel>
            <Company>{item.title} - {item.company}</Company>
            <Date>
              {item.date}
              <Location>{item.location}</Location>
            </Date>
          </StepLabel>
          <StepContent sx={style.content}>
            <Experience list={item.experience} />
          </StepContent>
        </Step>
      );
    }) }

    </Stepper>
  );
}

function Index() {

  const config = getConfig();

  const list = new Array();

  list.push(createJob(
    "Software Developer",
    "Playchemy",
    "February 2022 to Present, 4 Months",
    "Remote, California",
    [
      "History",
      "History"
    ]  
  ));

  list.push(createJob(
    "Electrical Assembler",
    "CM Controls",
    "March 2012 to February 2022,  10 Years",
    "Benicia, California",
    [
      "...",
      "..."
    ]
  ));

  return (
    <Layout>
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
          <Card title="Projects" />
          <Card title="Experience">
            <WorkHistory list={list} />
          </Card>
        </Column>
      </ColumnLayout>
        <Project title="Project Name" previewImage="profile-photo.jpg" />
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
      <Route path={'portfolio'} element={<Portfolio />} />
    </Routes>
  </BrowserRouter>

  </ThemeProvider>
  </React.StrictMode>
);
