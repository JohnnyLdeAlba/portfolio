import React from 'react';

import {styled} from '@mui/material/styles';

import Box from '@mui/material/Box';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

import getConfig from '../config';

export class t_job {

  title:string;
  company:string;
  date:string;
  location:string;
  description:string | null;
  details:Array<string>;
  previewImage:string | null;
  websiteURL:string | null;
  gitHubURL:string | null;

  constructor() {

    this.title = '';
    this.company = '';
    this.date = '';
    this.location = '';
    this.description = '';
    this.details = [];
    this.previewImage = null;
    this.websiteURL = null;
    this.gitHubURL = null;
  }
}

export function createJob(
  title:string,
  company:string,
  date:string,
  location:string,
  details:Array<string>,
  websiteURL:string | null
) {

  const job = new t_job();

  job.title = `${company} - ${title}`;
  job.company = company;
  job.date = date;
  job.location = location;
  job.details = details;
  job.websiteURL = websiteURL

  return job;
}

export function createProject(
  title:string,
  date:string,
  collaborative:boolean,
  details:Array<string>,
  websiteURL:string | null,
  gitHubURL:string | null,
) {
  const job = new t_job();

  job.title = title;
  job.location = date;

  job.date = collaborative ? "Collaborative" : "Non-Collaborative";
  job.date+= " Project";

  job.details = details;
  job.previewImage = websiteURL;
  
  job.websiteURL = websiteURL;
  job.gitHubURL = gitHubURL;

  return job;
}

export function portfolioItem(
  title:string,
  description: string | null,
  date:string,
  websiteURL:string | null,
  gitHubURL:string | null,
  previewImage: string | null
) {
  const job = new t_job();

  job.title = title;
  job.description = description ? description : null;
  job.date = date;

  job.websiteURL = websiteURL;
  job.gitHubURL = gitHubURL;
  job.previewImage = previewImage;

  return job;
}

class t_item {
  caption:string;
  content:string;

  constructor() {
    this.caption = '';
    this.content = ''
  }
}

export function createItem(
  caption:string,
  content:string
){
  const item = new t_item();
  item.caption = caption;
  item.content = content;
  return item;
}

function Details(props:{list:Array<string>}) {

  const List = styled('ul')({
    margin: '0 16px',
    padding: 0,
    fontSize: '14px'
  });

  return (
    <List>
      { props.list.map((item, index) => {
          return (<li key={index}>{item}</li>);
      }) }
    </List>
  );
}

function IconWrapper(props:{children:React.ReactNode}) {

  const IconWrapper = styled(Box)({
    marginRight: '0.4em'
  });

  return <IconWrapper>{props.children}</IconWrapper>;
}

function ExternalLinks(props:{websiteURL:string | null, gitHubURL:string | null}) {

  const config = getConfig();

  const websiteURL = props.websiteURL ? props.websiteURL : null;
  const gitHubURL = props.gitHubURL ? props.gitHubURL : null;

  if (websiteURL == null && gitHubURL == null)
    return null;

  const ExternalLinks = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    marginTop: '16px',
    fontSize: '14px',
    color: config.palette.link
  });

  const marginRight = gitHubURL ? '1.2em' : 0;

  const GitHubURL = styled('a')({
    display: 'block',
    marginTop: '2px',

    ':link': {
      color: config.palette.link,
      textDecoration: 'none'
    },

    ':visited': {
      color: config.palette.link,
      textDecoration: 'none'
    }
  });

  const WebsiteURL = styled(GitHubURL)({
    marginRight: marginRight
  });

  return (
    <ExternalLinks>

      { websiteURL ? 
        <><IconWrapper><PublicIcon /></IconWrapper>
        <WebsiteURL href={websiteURL}>Website</WebsiteURL></> : null
      }
    
      { gitHubURL ?
        <><IconWrapper><GitHubIcon /></IconWrapper>
        <GitHubURL href={gitHubURL}>GitHub</GitHubURL></> : null
      }

    </ExternalLinks>
  );
}

export function WorkHistory(props:{
  list:Array<t_job>,
  children?:React.ReactNode
}) {

  const config = getConfig();
  const style = {

    job: {
      '.MuiStepIcon-text': {
        fill: config.palette.icon
      }
    },

    content: {color: config.palette.text}
  };

  const Company = styled('a')({
    display: 'block',
    fontSize: '18px',
    textDecoration: 'none',
    color: config.palette.text
  });


  const SubHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    color: config.palette.link
  });

  const Date = styled(Box)({flex: 1});
  const Location = Box;

  return (
    <Stepper orientation="vertical">

    { props.list.map((item, index) => {    

        return (
          <Step key={index} active expanded sx={style.job}>
            <StepLabel>
              { item.websiteURL ? 
                  <Company href={item.websiteURL}>{item.title}</Company> :
                  <Company>{item.title}</Company>
              }
              <SubHeader>
                <Date>{item.date}</Date>
                <Location>{item.location}</Location>
              </SubHeader>
            </StepLabel>
            <StepContent sx={style.content}>
              <Details list={item.details} />
              <ExternalLinks websiteURL={item.websiteURL} gitHubURL={item.gitHubURL} />
          </StepContent>
        </Step>
      );
    }) }

    </Stepper>
  );
}

export function Skills(props:{list:Array<t_item>}) {

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

        return (<Box key={index}>
          <Column><Caption>{item.caption}</Caption></Column>
          <Column>{item.content}</Column>
        </Box>);
      }) }
    </ColumnLayout>
  );
}

