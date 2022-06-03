import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {styled} from '@mui/material/styles';

import Backdrop from '@mui/material/Backdrop';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import getConfig from '../config';
import {t_controller, getController} from '../context';

export function SigilIcon(props: {variant?:string}) {

  const config = getConfig();
  const width = props.variant ? '38px' : '48px'; 

  const Image = styled('img')({
    width: width
  });

  return (<Image src="sigil-purple.svg" alt="" />);
}

export function SignatureIcon(props: {variant?:string}) {

  const config = getConfig();
  const height = props.variant ? '38px' : '38px'; 

  const Image = styled('img')({
    height: height
  });

  return (<Image src="signature-purple.svg" alt="" />);
}

function MenuItem(props: {
  href?:string,
  children?:React.ReactNode
}) {

  const config = getConfig();

  const style = {
      menuItem: {
      margin: '8px 16px',
      width: 'inherit',
      borderRadius: '6px',

      fontSize: '16px',
      color: config.palette.link,
      transition: '500ms',

      ':hover': {backgroundColor: config.palette.lighterPurple}
    }
  };

  return (
    <ListItem component={Link} href={props.href} sx={style.menuItem}>
      {props.children}
    </ListItem>
  );
}

function getCallbackInterval(controller:t_controller) {

  const config = getConfig();

  controller.intervalActive = true;

  return (() => {

    if (controller.windowWidth != window.innerWidth) {

      if (window.innerWidth >= 800) {
        controller.show(true);
        controller.backdropShow(false);

        controller.drawerVariant = "permanent";
        controller.drawerColor = config.palette.lightPurple;
      }
      else {
        controller.show(false);
        controller.backdropShow(false);

        controller.drawerVariant = "persistent";
        controller.drawerColor = config.palette.darkPurple;
      }

      controller.windowWidth = window.innerWidth;
    }

  });
}

export function Navigation(props: {children?:React.ReactNode}) {

  const config = getConfig();
  const controller = getController('navigation');

  const [backdropVisible, backdropShow] = React.useState(false);
  const [visible, show] = React.useState(false);

  controller.visible = visible;
  controller.show = show;

  controller.backdropVisible = backdropVisible;
  controller.backdropShow = backdropShow;

  if (controller.intervalActive == false) {

    controller.drawerColor = config.palette.lightPurple;
    controller.intervalId = setInterval(
      getCallbackInterval(controller), 250);
  }

  const backdropOnClick = () => {
    backdropShow(false);
    show(false);
  };

  const Logo = styled(ListItem)({
    display: 'flex',
    width: 'inherit',
    margin: '8px 16px',
  });

  const Category = styled(ListItem)({
    margin: '8px 16px',
    width: 'inherit',
    border: '1px solid #000000',
    borderRadius: '6px',
    backgroundColor: config.palette.darkPurple,
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.4em',
    color: config.palette.link
  });

  const IconWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginRight: '0.4em',
  });

  return (<>
    <Backdrop
      open={controller.backdropVisible}
      transitionDuration={config.drawerTransition}
      onClick={backdropOnClick}
    />
    <Drawer
      variant={controller.drawerVariant}
      anchor="left"
      open={controller.visible}
      transitionDuration={config.drawerTransition}
      PaperProps={{sx: {
        width: config.drawerWidth,
        borderRight: 0,
        backgroundColor: controller.drawerColor,
      }}}>
      <List>
        <Logo>
          <SigilIcon /> &nbsp;&nbsp;
          <SignatureIcon variant="small" />
        </Logo>
        <Category>Explore</Category>
        <MenuItem href=".">Home</MenuItem>
        <MenuItem href="portfolio">
          <IconWrapper><FlashOnIcon /></IconWrapper> Portfolio
        </MenuItem>
      </List>
      <List sx={{flexDirfection: 'column'}}>
        <Category>Contact</Category>
        <MenuItem href="https://github.com/JohnnyLdeAlba">
          <IconWrapper><GitHubIcon /></IconWrapper> GitHub
        </MenuItem>
        <MenuItem href="https://www.linkedin.com/in/johnnyldealba">
          <IconWrapper><LinkedInIcon /></IconWrapper> LinkedIn
        </MenuItem>
      </List>
    </Drawer>
  </>);
}

