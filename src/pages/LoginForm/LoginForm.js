import React from "react";
import LoginFormComp from '../../components/LoginFormComp/LoginFormComp';
import styles from './LoginForm.module.scss'

const LoginForm = ({dispatch}) =>{
    return (
        <>
        <LoginFormComp dispatch={dispatch}/>
        </>
    );
};

export default LoginForm;