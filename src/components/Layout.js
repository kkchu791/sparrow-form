import React from 'react';
import ImageSidebar from './ImageSidebar';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  layout: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  childContainer: {
    width: props => props.width,
  }
});

export const Layout = ({
  sidebarImage,
  children
}) => {
  const showSideBar = useMediaQuery('(min-width:900px)');
  const styleProps = {width: showSideBar ? '60%' : '100%'};
  const classes = useStyles(styleProps);

  return (
    <div className={classes.layout}>
      <div className={classes.childContainer}>
        {children}
      </div>
      {showSideBar &&
        <ImageSidebar
          image={sidebarImage}
        />
      }
    </div>
  );
}

export default Layout;
