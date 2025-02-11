import React from 'react';
import styles from './OutputWindowWeather.module.scss'

const OutputWindowWeather = (props) => {
    
    const {state:{city,obj:{main:{temp},wind:{speed}}}}= props

    return (
        <main className={styles.container}>
            <h3>{city}</h3>
            <p>SECHAS {temp} gradusov</p>
            <p>Speed = {speed}</p> 
        </main>
    );
}

export default OutputWindowWeather;
