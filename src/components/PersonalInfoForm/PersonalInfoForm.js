import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { inputs } from './personalInfoInputs';
import Field from '../Field/Field';
import { Button } from '../Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const PersonalInfoForm = () => {
  const stack = useMediaQuery('(max-width:900px)');

  const useStyles = makeStyles({
    personalInfoForm: {
      display: 'flex',
      flexDirection: 'column',
      margin: '100px 50px',
      padding: '75px 50px',
    },
    headerText: {
      marginBottom: '20px',
      fontFamily: 'Oxygen',
      fontWeight: 600,
    },
    formBody: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formField: {
      margin: '20px 10px 20px 0',
      width: stack ? '100%': '40%',
    },
    message: {
      color: '#67CCE9',
      fontSize: '.8em',
      lineHeight: 1.2,
      margin: '10px 0',
    }
  });

  const initialUserState = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    job_title: '',
    date_of_birth: '',
    parental_consent: false,
  }

  const [user, setUser] = useState(initialUserState);
  const [showMessage, setShowMessage] = useState(false);
  const classes = useStyles();

  const handleChange = (evt) => {
    setUser(prevState => ({...prevState, ...evt}))
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(user, "submitting")
    setShowMessage(true);
  }

  const renderInput = (input) => {
    return (
      <div
        key={input.name}
        className={classes.formField}
      >
        <Field input={input} handleChange={handleChange} user={user} />
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.personalInfoForm}
    >
      <div className={classes.formHeader}>
        <h1 className={classes.headerText}>
          Please enter your personal info.
        </h1>
      </div>
      <div className={classes.formBody}>
        {inputs.map(renderInput)}
      </div>
      <div className={classes.formFooter}>
        <Button
          buttonText='Save'
          disabled={user.first_name === ''}
        />
        {showMessage && <div className={classes.message}>Saved! Check you console.</div>}
      </div>
    </form>
  );
}

export default PersonalInfoForm;
