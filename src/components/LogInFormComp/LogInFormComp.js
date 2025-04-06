import React, {useReducer} from "react";
import { INITIALSTATE } from "../../constants/weatherConstants";
import { Formik,Form,Field, ErrorMessage } from 'formik';
import styles from './LogInFormComp.module.scss'
import { REGISTER_SCHEMA } from "../../schema";

const INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SingUp = () =>{
    // const [state,dispatch] = useReducer(singUpReduser,INITIAL_STATE_SING_UP)

    const submitHandler = (values,actions) =>{
        // event.preventDefault()
        console.log('SIGMA');
        actions.resetForm();
    }

    return (
        <Formik initialValues={INITIAL_VALUES} onSubmit={submitHandler} validationSchema={REGISTER_SCHEMA}>
            {(formikProps)=>{
                // console.log(formikProps);
                return (
                    <div className={styles.divas}>
                    <Form className={styles.formStyle}> 
                        <span>First name</span>
                        <Field name='firstName' placeholder='John' />
                        <ErrorMessage name="firstName" component='p'/>
                        <span>Last name</span>
                        <Field name='lastName' placeholder='Doe'/>
                        <ErrorMessage name="lastName" component='p'/>
                        <span>Email</span>
                        <Field name='email' placeholder='john.doe@gmail.com'/>
                        <ErrorMessage name="email" component='p'/>
                        <span>Password</span>
                        <Field name='password' placeholder='qwerty123Q!'/>
                        <ErrorMessage name="password" component='p'/>
                        <span>Confirm password</span>
                        <Field name='confirmPassword' placeholder='qwerty123Q!'/>
                        <ErrorMessage name="confirmPassword" component='p'/>
                        <button type="submit">SingUp</button>
                    </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default SingUp;