import React from "react";
import RegisterFormComp from '../../components/RegisterFormComp/RegisterFormComp'
import styles from './RegisterForm.module.scss'

const RegisterForm = ({dispatch}) =>{
    return(
        <>
        <RegisterFormComp dispatch={dispatch}/>
            
        </>
    );
};

export default RegisterForm;