// import React,{useState} from 'react';

// const ApiWeather = () => {
//     // const [valueTemp,setValueTemp] = useState('metric')
//     // const [cityName,setCityName] = useState('dnipro')
//     let valueTemp = 'metric'
//     let cityName = 'dnipro'
//     const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f7c576ba3699bdd0b98ddcf196639992&units=${valueTemp}`

//     const ChangeCyty = (city)=>{
//         cityName = city
//     }

//     const ChangeGradus = (gradus)=>{
//         valueTemp = gradus
//     }

//         const apises = ()=>fetch(api).then(res=>res.json())

//     return fetch(api).then(res=>res.json())
// }


// export default ApiWeather;


////////////////////////////////////////////////////////////////////////////////////
//2


// export const fetchWeather = async (city)=>{
//     const apiKey = 'f7c576ba3699bdd0b98ddcf196639992';
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

//   try{
//     const response = await fetch(url)
//     if(!response.ok){
//         throw new Error('Citu not found')
//     }
//     const data = await response.json();
//     return data;
//   } catch(error){
//     console.error(error);
//     return null
//   }
// };


export const fetchWeather = (city,gradus)=>{
  const apiKey = 'f7c576ba3699bdd0b98ddcf196639992';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${gradus}`;

  return fetch(url).then((response)=>response.json())
  
}

// return fetch(api).then(res=>res.json())