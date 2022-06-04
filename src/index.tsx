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

import {WorkHistory, createJob, createProject} from './com/Experience';
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

function Portfolio() {
  return (
    <Layout>
      <RowLayout>
        <Gallery title="Portfolio" />
      </RowLayout>
    </Layout>
  );
}

class t_item {
  caption:string;
  content:string;

  constructor() {
    this.caption = '';
    this.content = ''
  }
}

function createItem(
  caption:string,
  content:string
){
  const item = new t_item();
  item.caption = caption;
  item.content = content;
  return item;
}

function Skills(props:{list:Array<t_item>}) {

  const config = getConfig();

  const ColumnLayout = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  });

  const Column = styled(Box)({
    margin: '8px 0',
    width: '50%',
    color: config.palette.text
  });

  const Caption = styled(Box)({
    fontSize: '16px',
    fontWeight: 'bold',
    color: config.palette.link
  });

  return (
    <ColumnLayout>
      { props.list.map((item, index) => {

        return (<>
          <Column><Caption>{item.caption}</Caption></Column>
          <Column>{item.content}</Column>
        </>);
      }) }
    </ColumnLayout>
  );
}

function Index() {

  const config = getConfig();

  const list = [

    createJob(
      "Software Developer, Part Time",
      "Playchemy",
      "February 2022 to Present, 4 Months",
      "Remote, California",
      [
        "...",
        "..."
      ],
      "https://playchemy.com"  
    ),

    createJob(
      "Electrical Assembler, Full Time",
      "CM Controls",
      "March 2012 to February 2022,  10 Years",
      "Benicia, California",
      [
        "Built custom control panels for municipal and commercial applications.",
        "Prepped plates with component labels, fuse ratings, terminal torque and intrinsically safe wiring stickers.",
        "Connected components on a plate, routing wire through a trough or in neat organized bundles separated by wire color.",
        "Followed a wiring diagram and worked with engineers to ensure drawings were updated and accurate."
      ],
      "http://cmcontrols.com"  
    )
  ];

  const projectHistory = [

    createProject(
      "MyIPC.io",
      "2022",
      false,
      [
        "Built a full stack solution for an exisiting mobile app that communicates with the Ethereum blockchain.",
        "Designed a revamped UI with a responsive layout that can be viewed on both mobile and desktop.",
        "Implemented a backend solution that caches Ethereum data to a local PostGres database.",
        "Created an API from the ground up that provides tools for developers to decode data returned from an Ethereum smart contract." 
      ],
      "https://myipc.io",  
      "https://github.com/JohnnyLdeAlba/myipc.io"
    ),

    createProject(
      "EccoLib",
      "2020 - 2021",
      false,
      [
        "Built a library for extracting various graphical formats from the Ecco the Dolphin series for the Sega Genesis game console.",
        "Mapped, and disassembled an existing 68000 binary working with tools used for reverse engineering, including Radare2 and GNU 68000 Assembler.",
        "Ported several data decompressors from 68000 assembly to C.",
        "Analyzed and documented various formats used for encoding and decoding graphical data.",
        "Technology Used: 68000 Assembly, C, C++, Direct2D",
      ],
      null,
      "https://github.com/JohnnyLdeAlba/ecco-lib"  
    ),

    createProject(
      "EnigmaV Social Network",
      "2012",
      false,
      [
        "Created a solution from scratch based on a LAMP based stack that renders user generated content.",
        "Planned website development by creating mockups and converting them into finalized solutions.",
        "Designed a custom login system for users that uses an encrypted key stored in a cookie for tracking sessions",
        "Technology Used: HTML, CSS, PHP, MySQL/MariaDB"
      ],
      "https://enigmav.nexusultima.com",
      "https://github.com/JohnnyLdeAlba/enigmav" 
    ),

    createProject(
      "Enigma 4 Wiki",
      "2008",
      false,
      [
        "...",
        "Technology Used: HTML, CSS, Perl 5"
      ],
      "https://enigma4.nexusultima.com",
      "https://github.com/JohnnyLdeAlba/enigma4" 
    )
  ];

  const skillList = [
    createItem(
      "Programming Languages",
      "C, C++, C#, HTML5, CSS3, Java, JavaScript, TypeScript, Perl, PHP, Python"
    ),

    createItem(
      "Assembly Languages",
      "6502, 68000, z80, x86"
    ),

    createItem(
      "Front-End Technologies",
      "HTML5, CSS3, ReactJS, Material UI"
    ),

    createItem(
      "Backend-End Technologies",
      "NodeJS, MariaDB, PostGres"
    ),

    createItem(
      "Tools",
      "VirtualBox, Debian Linux, Apache2, Vim, Visual Studio, Git, Radare2"
    ),
  ];

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

I am a freelance developer from Vallejo, California with details in a variety of programming disiplines. I'm a Full Stack developer, a UX/UI designer, web3 developer, a game designer, a Database devleoper, and I can reverse engineer software from a variety of different platforms.

          </Card>
          <Card icon={<HandymanIcon />} title="Technical Skills">
            <Skills list={skillList} />
          </Card>

        </Column>
        <Column>
          <Card icon={<BarChartIcon />} title="Featured Projects">
            <WorkHistory list={projectHistory} />
            <Link href=""><LinkCaption>View My Portfolio</LinkCaption><DoubleArrowIcon /></Link>
          </Card>
        </Column>
      </ColumnLayout>
      <RowLayout>
        <Card icon={<WorkIcon />} title="Experience">
          <WorkHistory list={list} />
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
      <Route path={'portfolio'} element={<Portfolio />} />
    </Routes>
  </BrowserRouter>

  </ThemeProvider>
  </React.StrictMode>
);
