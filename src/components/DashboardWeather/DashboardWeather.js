import React,{ useEffect, useReducer} from 'react';
import OutputWindowWeather from '../OutputWindowWeather/OutputWindowWeather';
import WeatherParameters from '../WeatherParameters/WeatherParameters';
import styles from './DeshboardWeather.module.scss'
import weatherReduser from '../../reducers/weatherReduser';
import CONSTANTS,{INITIALSTATE} from '../../constants/weatherConstants'
import { fetchWeather } from '../../api/apiWeather';
const {ACTIONS} = CONSTANTS



const DashboardWeather = () => {
    const [state,dispatch] = useReducer(weatherReduser,INITIALSTATE)//dsaы
    const {city,gradus} = state

    const loadWeather = ()=>{
      fetchWeather(city,gradus)
      .then(obj=>{
        dispatch({
          type: ACTIONS.WEATHER_LOADS,
          obj
        })
      })
      .catch(error=>{
        dispatch({
          type: ACTIONS.API_ERROR,
          payloader: error
        })
      })
    }
    
      useEffect(() => {
        loadWeather();
      }, [city,gradus]);


    const cityNameChangeHandler = (cityName)=>{
      dispatch({
        type: ACTIONS.CITY_NAME_CHANGE,
        cityName
      })
    }

    const gradusChangeHandler = (gradus)=>{
      dispatch({
        type: ACTIONS.GRADUS_CHANGE,
        gradus
      })
    }

    const speedChangeHandler = (speed)=>{
      dispatch({
        type: ACTIONS.SPEED_CHANGE,
        speed
      })
    }

    return (
        <main className={styles.container}>
          <WeatherParameters cityNameChangeHandler={cityNameChangeHandler}
           gradusChangeHandler={gradusChangeHandler}
           speedChangeHandler={speedChangeHandler}
           />
          <OutputWindowWeather state={state}/>     
        </main>
    );
}

export default DashboardWeather;
