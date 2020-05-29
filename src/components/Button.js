import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button as MaterialUIButton} from '@material-ui/core';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles({
  button: {
    background: '#67CCE9',
    '&:hover': {
      background: '#67CCE9',
    }
  }
});

export const Button = ({
  buttonText,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <MaterialUIButton
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
      endIcon={<ArrowRightAlt />}
      type='submit'
      disabled={disabled}
    >
      {buttonText}
    </MaterialUIButton>
  )
}

export default Button;