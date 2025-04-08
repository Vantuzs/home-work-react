import React from 'react'
import cx from 'classnames'
import styles from './FormikField.module.scss'
import { Field, ErrorMessage } from 'formik'
import { useFormikContext } from 'formik'

const FormikField = ({ name, placeholder }) => {
  const { errors, touched } = useFormikContext();

  const inputClass = cx({
    [styles['invalid-input']]: errors[name] && touched[name],
  });

  return (
    <>
      <Field
        name={name}
        placeholder={placeholder}
        className={inputClass}
      />
      <ErrorMessage
        name={name}
        component="p"
        className={styles['invalid-paragraph']}
      />
    </>
  );
};


export default FormikField;
