import React from "react";
import { Formik,Form,Field, ErrorMessage } from 'formik';
import styles from './RegisterFormComp.module.scss'
import { REGISTER_SCHEMA } from "../../schema";
import { ACTIONS } from "../../constants/userConstants";
import FormikField from "../FormikField/FormikField";

const INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = ({dispatch}) =>{
    // const [state,dispatch] = useReducer(singUpReduser,INITIAL_STATE_SING_UP)

    const submitHandler = ({email,password,firstName,lastName},actions) =>{
        // event.preventDefault()
        console.log('SIGMA');
        dispatch({
            type: ACTIONS.REGISTER_USER,
            payload: {
                email,
                password,
                firstName,
                lastName,
            }
        })
        actions.resetForm();
    }

    return (
        <Formik initialValues={INITIAL_VALUES} onSubmit={submitHandler} validationSchema={REGISTER_SCHEMA}>
            {({ errors, touched })=>{
                return (
                    <div className={styles.divas}>
                    <Form className={styles.formStyle}> 
                        <h2>Register form</h2>
                        <span>First name</span>
                        <FormikField name='firstName' placeholder='John' errors={errors} touched={touched} />
                        <span>Last name</span>
                        <FormikField name='lastName' placeholder='Doe' errors={errors} touched={touched} />
                        <span>Email</span>
                        <FormikField name='email' placeholder='john.doe@gmail.com' errors={errors} touched={touched} />
                        <span>Password</span>
                        <FormikField name='password' placeholder='qwerty123Q!' errors={errors} touched={touched} />
                        <span>Confirm password</span>
                        <FormikField name='confirmPassword' placeholder='qwerty123Q!' errors={errors} touched={touched} />
                        <button type="submit">SingUp</button>
                    </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default Register;