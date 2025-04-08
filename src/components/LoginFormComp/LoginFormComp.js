import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './LoginFormComp.module.scss';
import { LOGIN_SCHEMA } from "../../schema";
import { ACTIONS } from "../../constants/userConstants";
import cx from 'classnames'

const INITIAL_VALUES = {
    email: '',
    password: ''
}

const Login = ({dispatch}) =>{

    const submitHandler =({email,password},actions) =>{
        dispatch({
            type: ACTIONS.LOGIN_USER,
            payload: {
                email,
                password
            }
        })
        actions.resetForm();
    }

    const className = cx({
        [styles.input]: true,
        // {styles['invalid-input']}
    })

    return (
        <Formik initialValues={INITIAL_VALUES} onSubmit={submitHandler} validationSchema={LOGIN_SCHEMA}>
            {(formikProps)=>{
                return (
                    <>
                    <div className={styles.divas}>
                        <Form className={styles.formStyle}>
                    <h2>Login form</h2>
                            <span>Email:</span>
                            <Field type='email' name='email' placeholder='email@gmail.com' className={cx('input',{
                                'invalid-inpute': formikProps.touched.email && formikProps.error.email
                            })}/>
                            <ErrorMessage name='email' component='p'/>
                            <span>Password</span>
                            <Field name='password' placeholder='qwerty123!Q'/>
                            <ErrorMessage name='password' component='p'/>
                            <button type="submit">Sing in</button>
                        </Form>
                    </div>
                </>
                )
            }}
        </Formik>
    )
}


export default Login