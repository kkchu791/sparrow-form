import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    background: 'white !important',
    border: '1px solid #ECECEC',
    transition: 'none',
    '&:hover': {
      background: 'none',
   },
  },
  label: {
    fontFamily: 'oxygen',
  },
  focusedLabel: {
    color: 'black !important',
    fontWeight: 700,
  }
});

export const BaseTextField = ({
  input,
  handleChange,
  user,
}) => {
  const classes = useStyles();
  const inputPropStyles = {
    className: `${classes.input}`,
    disableUnderline: true 
  };
  const inputLabelPropStyles = {
    classes: {
      root: classes.label,
      focused: classes.focusedLabel,
    },
    shrink: true
  };

  return (
    <TextField
      id="filled-basic"
      name={input.name}
      value={user[input.name] || ''}
      label={input.human_label}
      onChange={(evt) => handleChange({[input.name]: evt.target.value})}
      type={input.type}
      variant="filled"
      fullWidth={true}
      InputProps={inputPropStyles}
      InputLabelProps={inputLabelPropStyles}
      required={input.required}
    />
  );
}

export default BaseTextField;