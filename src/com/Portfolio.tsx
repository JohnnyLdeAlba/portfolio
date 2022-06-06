import React from 'react';
import {styled} from '@mui/material/styles';

import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

import getConfig from '../config';

import {WorkHistory, Skills, portfolioItem, t_job} from '../com/Experience';
import {RowLayout, Layout} from '../com/Layout';
import {workHistory, projectHistory, skillList} from '../database';

function LinkItem(props: {
  href?:string,
  icon?:React.ReactNode,
  children?:React.ReactNode
}) {

  const config = getConfig();

  const Link = styled('a')({

    marginTop: '2px',
    color: config.palette.link,

    ':link': {
      color: config.palette.link,
      textDecoration: 'none'
    },

    ':active': {
      color: config.palette.link,
      textDecoration: 'none'
    },

    ':visited': {
      color: config.palette.link,
      textDecoration: 'none'
    },

    ':hover': {
      color: config.palette.link,
      textDecoration: 'none'
    }
  });

  const LinkItem = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1.2em',
    fontSize: '14px'
  });

  const IconWrapper = styled(Box)({
    paddingRight: '0.4em',
    color: config.palette.link
  });

  return (
    <LinkItem>
      <IconWrapper>{props.icon}</IconWrapper>
      <Link href={props.href}>{props.children}</Link>
    </LinkItem>
  );
}

function MiniCard(
  props:{
    title:string,
    subtitle:string| null,
    date:string,
    websiteURL:string | null,
    gitHubURL:string | null,
    previewImage:string | null
}) {

  const websiteURL = props.websiteURL ? props.websiteURL : '';
  const gitHubURL = props.gitHubURL ? props.gitHubURL : '';
  const previewImage = props.previewImage ? props.previewImage : '';

  const config = getConfig();

  const MiniCard = styled(Box)({
    overflow: 'hidden',
    borderRadius: '4px',
    backgroundColor: config.palette.miniCard
  });

  const Preview = styled('a')({
    display: 'block',
    overflow: 'hidden',
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

  const Heading = styled('a')({
    display: 'block',
    margin: '16px 16px 0 16px',
    padding: 0,
    fontSize: '18px', 
    fontWeight: 'bold',
    color: config.palette.text,

    ':link': {
      color: config.palette.text,
      textDecoration: 'none'
    },

    ':active': {
      color: config.palette.text,
      textDecoration: 'none'
    },

    ':visited': {
      color: config.palette.text,
      textDecoration: 'none'
    },

    ':hover': {
      color: config.palette.text,
      textDecoration: 'none'
    }
  });

  const SubTitle = styled(Box)({
    margin: '4px 16px',
    minHeight: '9em',
    fontSize: '14px',
    color: config.palette.link
  }); 

  const Date = styled(Box)({
    margin: '4px 16px',
    fontSize: '14px',
    color: config.palette.subtitle
  });

  const LinkList = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right'
  });

  return (
    <MiniCard>
      <Body>
        <Preview href={gitHubURL}>
          <Image src={previewImage} alt="" />
        </Preview>
        <Heading href={gitHubURL}>{props.title}</Heading>
        <Date>{props.date}</Date>
        <SubTitle>{props.subtitle}</SubTitle>
        <LinkList>
          {websiteURL ? <LinkItem icon={<PublicIcon />} href={websiteURL}>Website</LinkItem> : null}
          {gitHubURL ? <LinkItem icon={<GitHubIcon />} href={gitHubURL}>GitHub</LinkItem> : null}
        </LinkList>
      </Body>
    </MiniCard>
  );
}

export function Portfolio(props: {
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
                      websiteURL={item.websiteURL}
                      gitHubURL={item.gitHubURL}
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
