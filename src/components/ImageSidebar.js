import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  imageSidebarContainer: {
    width: '40%',
    background: '#A8DFEF',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
  },
});

export const ImageSidebar = ({
  image
}) => {
  const classes = useStyles();
  return (
    <div className={classes.imageSidebarContainer}>
      <div className={classes.image}>
        <img src={image} alt="sidebar" className={classes.image} />
      </div>
    </div>
  );
}

export default ImageSidebar;
