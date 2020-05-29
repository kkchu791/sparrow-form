import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const BlueCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#67CCE9',
    },
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export const CheckboxField = ({
  input,
  handleChange,
  user
}) => {
  return (
    <FormControlLabel
      control={
        <BlueCheckbox
          checked={user.parental_consent}
          name={input.name}
          onChange={() => handleChange({[input.name]: !user.parental_consent})}
        />
      }
      label={input.human_label}
    />
  )
}

export default CheckboxField;