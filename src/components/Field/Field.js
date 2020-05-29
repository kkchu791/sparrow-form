import React from 'react';
import {BaseTextField} from './BaseTextField';
import {CheckboxField} from './CheckboxField';
import {withHiddenConditionalField} from './withHiddenConditionalField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
});

export const Field = ({
  input,
  handleChange,
  user
}) => {
  const classes = useStyles();

  const fieldTypes = {
    text: BaseTextField,
    email: BaseTextField,
    date: BaseTextField,
    checkbox: CheckboxField,
  }

  let FieldComponent = fieldTypes[input.type];
  return (
    <div className={classes.formLayout}>
      <FieldComponent input={input} handleChange={handleChange} user={user} />
    </div>
  );
}

export default withHiddenConditionalField(Field);