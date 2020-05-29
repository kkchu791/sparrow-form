import React from 'react';

export const withHiddenConditionalField = (Field) => {
  return (props) => {

    const shouldShowField = () => {
      if (props.input.conditional) {
        const usersDOB = new Date(props.user[props.input.conditional.name]);
        return  props.input.conditional.show_if(usersDOB);
      } else {
        return true;
      }           
    }

    if (shouldShowField()) {
      return <Field {...props} />;
    } else {
      return null;
    }
  }
};

