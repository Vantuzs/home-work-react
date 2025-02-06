import React,{ useEffect, useReducer} from 'react';
import OutputWindowWeather from '../OutputWindowWeather/OutputWindowWeather';
import WeatherParameters from '../WeatherParameters/WeatherParameters';
import styles from './DeshboardWeather.module.scss'
import ApiWeather from '../../api/apiWeather';
import weatherReduser from '../../reducers/weatherReduser';
import CONSTANTS from '../../constants/weatherConstants'
// const {apishka,changeCityFromApi,changeValueTempFromAPi} = ApiWeather
const {ACTIONS} = CONSTANTS
// const {apishka,changeCityFromApi,changeValueTempFromAPi} = ApiWeather


const INITIALSTATE = {
    error: null,
    isLoading: true
}

const DashboardWeather = () => {
    const [state,dispatch] = useReducer(weatherReduser,INITIALSTATE)

    useEffect(()=>{
        ApiWeather()
        .then(obj=>{
            console.log(obj)
            dispatch({
                type: ACTIONS.TEST,
                payloader: obj
            })
        })
        .catch(error=>{
            dispatch({
                type: ACTIONS.API_ERROR,
                payloader: error
            })
        })
    },[])
    console.log(state);

    return (
        <main className={styles.container}>
          <WeatherParameters />
          <OutputWindowWeather/>     
        </main>
    );
}

export default DashboardWeather;
