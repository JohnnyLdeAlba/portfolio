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
import Layout from './com/Layout';
import {workHistory, projectHistory, skillList} from './database';

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

function MiniCard(
  props:{
    title:string,
    subtitle:string| null,
    date:string,
    previewImage:string | null
}) {

  const previewImage = props.previewImage ? props.previewImage : '';
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%'
  });

  const Heading = styled(Box)({
    display: 'block',
    margin: '16px 16px 0 16px',
    padding: 0,
    fontSize: '18px', 
    fontWeight: 'bold',
    color: config.palette.text
  });

  const SubTitle = styled(Box)({
    margin: '4px 16px',
    height: '9em',
    fontSize: '14px',
    color: config.palette.link
  }); 

  const Date = styled(Box)({
    margin: '4px 16px',
    fontSize: '14px',
    color: config.palette.subtitle
  });

  return (
    <MiniCard>
      <Body>
        <Preview>
          <Image src={previewImage} alt="" />
        </Preview>
        <Heading>{props.title}</Heading>
        <Date>{props.date}</Date>
        <SubTitle>{props.subtitle}</SubTitle>
      </Body>
    </MiniCard>
  );
}

function Portfolio(props: {
  list:Array<t_job>
}) {

  const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });

  const GalleryItem = styled(Box)({
    padding: '8px',
    width: '100%',

    '@media (min-width: 600px)': {
      width: '50%'
    },

    '@media (min-width: 1200px)': {
      width: '33.33%'
    }
  });

  return (
      <Layout>
        <RowLayout>
          <Container>
            { props.list.map((item, index) => {
                return (
                  <GalleryItem>
                    <MiniCard
                      title={item.title}
                      subtitle={item.description}
                      date={item.date}
                      previewImage={item.previewImage} />
                  </GalleryItem>
                );
              })
            }
          </Container>
        </RowLayout>
      </Layout>
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

I am a freelance developer from Vallejo, California with experience in a variety of programming disiplines. I'm a Full Stack developer, a UX/UI designer, web3 developer, a game designer, a Database devleoper, and I can reverse engineer software from a variety of different platforms.

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

const portfolioList = [
  portfolioItem(
    "MyIpc.io",
    "A web based dApp that decodes playable video game characters from the Ethereum blockchain and stores them on a local database.",
    "ReactJS, NodeJS, PostGres" ,
    "myipc-website.png"),

  portfolioItem(
    "Ecco the Dolphin Online",
    "A website built in React and Typescript that has an image gallery and articles.",
    "TypeScript, ReactJS, NodeJS" ,
    "ecco-online-website.png"),

  portfolioItem(
    "EccoLib",
    "A graphics extraction library for the Ecco the Dolphin series.",
    "C, C++, Direct2D" ,
    "eccolib-stage.png"),

  portfolioItem(
    "EnigmaV Social Network",
    "A prototype social network created in 2013 that uses PHP5 and MySQL.",
    "PHP, MySQL/MariaDB" ,
    "enigmav-website.png"),

  portfolioItem(
    "Enigma 4 Wiki",
    "A perl based wiki made in 2008 that uses the file system as database storage.",
    "Perl 5" ,
    "enigma4-website.png"),

  portfolioItem(
    "Ecco Text Generator",
    "A text generator that creates animated GIFs in the style of messages found in the classic video game Ecco the Dolphin.",
    "HTML5, CSS, Responsive UI" ,
    "ecco-text-website.png"),

  portfolioItem(
    "Ecco Password Generator",
    "A password generator for the Sega Genesis and Sega CD versions of Ecco the Dolphin.",
    "HTML5, CSS, Responsive UI" ,
    "ecco-password-ui.png"),

  portfolioItem(
    "Ecco 2 Password Generator",
    "A password generator for the Sega Genesis and Sega CD versions of Ecco 2: The Tides of Time.",
    "HTML5, CSS, Responsive UI" ,
    "ecco2-password-ui.png"),

  portfolioItem(
    "Agartha HTML5",
    "A demo made in 2010. You are Kuros, a Dolphin who lives in a world that was once populated by an ancient civilization. Speak to other dolphins, and orcas, collect all the coins and fight the boss at the end of the stage.",
    "HTML5" ,
    "agartha-html5-game.png"),

];

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
