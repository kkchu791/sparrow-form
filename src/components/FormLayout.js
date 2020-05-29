import React from 'react';
import { LogoNav } from './LogoNav';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
});

export const FormLayout = ({
  children
}) => {
  const classes = useStyles();
  return (
    <div className={classes.formLayout}>
      <LogoNav />
      {children}
    </div>
  );
}

export default FormLayout;
