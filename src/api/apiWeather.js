import React,{useState} from 'react';

const ApiWeather = () => {
    // const [valueTemp,setValueTemp] = useState('metric')
    // const [cityName,setCityName] = useState('dnipro')
    let valueTemp = 'metric'
    let cityName = 'dnipro'
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f7c576ba3699bdd0b98ddcf196639992&units=${valueTemp}`

    const ChangeCyty = (city)=>{
        cityName = city
    }

    const ChangeGradus = (gradus)=>{
        valueTemp = gradus
    }

        const apises = ()=>fetch(api).then(res=>res.json())

    return fetch(api).then(res=>res.json())
}


export default ApiWeather;

// return fetch(api).then(res=>res.json())