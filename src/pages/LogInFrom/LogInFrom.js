import React from "react";
import LogInFormComp from '../../components/LogInFormComp/LogInFormComp';
import styles from './LogInForm.module.scss'

const LogIn = () =>{
    return(
        <>
            <header className={styles.header}>
                <h1>Registred Form</h1>
                <button>SingIn</button>
            </header>
        <LogInFormComp/>
            
        </>
    );
};

export default LogIn;