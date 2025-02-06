import React from 'react';
import DashboardWeather from '../../components/DashboardWeather/DashboardWeather';
import styles from './CurrentWeater.module.scss'

const CurrentWeater = () => {
    return (
        <main className={styles.container}>
            <DashboardWeather/>
        </main>
    );
}

export default CurrentWeater;
