import React from 'react';
import {Layout} from './Layout';
import {FormLayout} from './FormLayout';
import {PersonalInfoForm} from './PersonalInfoForm';
import sidebarImage from '../assets/images/sidebar.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appContainer: {
    height: '100%',
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <Layout sidebarImage={sidebarImage}>
        <FormLayout>
          <PersonalInfoForm />
        </FormLayout>
      </Layout>
    </div>
  );
}

export default App;
