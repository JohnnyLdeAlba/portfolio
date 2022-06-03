import React from 'react';
import {styled} from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import getConfig from '../config';
import {getController} from '../context';
import theme from '../theme';

import {SigilIcon, SignatureIcon} from '../com/Navigation';

export default function Menubar(props: {children?: React.ReactNode}) {

  const config = getConfig();
  const controller = getController('navigation');

  const drawerOnClick = () => {
    controller.backdropShow(!controller.backdropVisible);
    controller.show(!controller.visible);
  };

  const style = {

    appBar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',

      padding: '8px',
      height: '70px',

      backgroundColor: config.palette.lightPurple,
      boxShadow: 'none'
    },

    menuButton: {
      display: 'flex',
      '@media (min-width: 800px)': {display: 'none'} 
    },

    menuIcon: {
      marginTop: '8px',
      width: '38px'
    },

    logo: {
      display: 'block',
      '@media (min-width: 800px)': {display: 'none'}
    }
  };

  return (
    <AppBar position="static" sx={style.appBar}>
      <IconButton
        color="inherit"
        onClick={drawerOnClick}
        sx={style.menuButton}>
        <MenuIcon sx={style.menuIcon}/>
      </IconButton>
      <IconButton component={Link} href="." color="inherit" sx={style.logo}>
        <SigilIcon variant="small" /> &nbsp;&nbsp; <SignatureIcon />
      </IconButton>
    </AppBar>
  );
}

