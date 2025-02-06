import React,{useState, useEffect} from 'react';
import styles from './WeatherParameters.module.scss'

const WeatherParameters = () => {
    const [cityName, setCityName]= useState('dnipro')
    const [gradus,setGradus] = useState('metric')
    const [speed,setSpeed] = useState('kmh')

    return (
        <div className={styles.container}>
         <h3>slect sity</h3>
         <select value={cityName} onChange={a=> setCityName(a.target.value)}>
            <option value='kyiv'>Kyiv</option>
            <option value='zaporizhzhia'>Zaporizhzhia</option>
            <option value='lviv'>Lviv</option>
            <option value='dnipro'>Dnipro</option>
            </select>   

            <h3>Select GRADYSI</h3>
            <select value={gradus} onChange={a=> setGradus(a.target.value)}>
                <option value='metric'>ЦЕЛЬСИЯ</option>
                <option value='imperial'>ФОРИНГАТЕ</option>
            </select>

            <h3>SPEED</h3>
            <select value={speed} onChange={a=>setSpeed(a.target.value)}>
                <option value='kmh'>Km/h</option>
                <option value='ms'>M/s</option>
            </select>
        </div>

        
    );
}

export default WeatherParameters;
