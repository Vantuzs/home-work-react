import React,{useState, useEffect} from 'react';
import styles from './WeatherParameters.module.scss'

const WeatherParameters = (props) => {
    const {cityNameChangeHandler,gradusChangeHandler,speedChangeHandler} = props
    const [cityName, setCityName]= useState('Dnipro')
    const [gradus,setGradus] = useState('metric')
    const [speed,setSpeed] = useState('kmh')

    const testMMMMM = ()=>{
    }
    
    return (
        <div className={styles.container}>
            <div>

         <h3>Select Syty</h3>
         <select value={cityName} onChange={a=> { 
             setCityName(a.target.value);
             cityNameChangeHandler(a.target.value)
            }} >
            <option value='Kyiv'>Kyiv</option>
            <option value='Zaporizhzhia'>Zaporizhzhia</option>
            <option value='Lviv'>Lviv</option>
            <option value='Dnipro'>Dnipro</option>
            </select>   
                </div>
            <div>

            <h3>Select GRADUS</h3>
            <select value={gradus} onChange={a=> {
                setSpeed(a.target.value)
                setGradus(a.target.value)
                return gradusChangeHandler(a.target.value)
                }}>
                <option value='metric'>ЦЕЛЬСИЯ</option>
                <option value='imperial'>ФОРИНГАТЕ</option>
            </select>
                </div>
                <div>

            <h3>SPEED</h3>
            <select value={speed} onChange={a=>{
                setSpeed(a.target.value)
                setGradus(a.target.value)
                return speedChangeHandler(a.target.value)
            }}>
                    
                <option value='metric'>M/s</option>
                <option value='imperial'>Km/h</option>
            </select>
                    </div>
        </div>

        
    );
}

export default WeatherParameters;
