import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../assets/images/logo.png';

const useStyles = makeStyles({
  logoNav: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    height: '75px',
  },
  logoImage: {
    width: '75px',
  },
  logoText: {
    color: '#1f5765',
    fontFamily: 'oxygen',
    fontSize: '1.3em',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '400',
    animation: 'fadeInLogoText 1s ease',
    animationFillMode: 'forwards',
    animationDelay: '.5s',
    transform: 'scaleX(.95) translateY(2px)',
  }
});

export const LogoNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoNav}>
      <img src={logoImage} alt="logo" className={classes.logoImage} />
      <div className={classes.logoText}>
        <span>Sparrow</span>
      </div>
    </div>
  );
}

export default LogoNav;
