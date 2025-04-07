export const INITIALSTATE = {
  city: 'Dnipro',
  gradus: 'metric',
  weatherData: null,
  error: null,
  isLoading: true,
  obj: {
    coord: {
      lon: 24,
      lat: 50
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],

    main: {
      temp: 0.92,
      feels_like: -3.84,
      temp_min: 0.92,
      temp_max: 0.92,
      pressure: 1035,
      humidity: 41,
      sea_level: 1035,
      grnd_level: 996
    },
    visibility: 10000,
    wind: {
      speed: 5.14,
      deg: 122,
      gust: 7.75
    },
    clouds: {
      all: 0
    },
    dt: 1739281123,
    sys: {
      country: 'UA',
      sunrise: 1739252481,
      sunset: 1739288107
    },
    timezone: 7200,
    id: 702550,
    name: 'Lviv',
    cod: 200
  }
}

export default {
  ACTIONS: {
    API_ERROR: 'API_ERROR',
    TEST: 'TEST',
    CITY_NAME: 'CITY_NAME',
    WEATHER_LOADS: 'WEATHER_LOADS',
    CITY_NAME_CHANGE: 'CITY_NAME_CHANGE',
    GRADUS_CHANGE: 'GRADUS_CHANGE',
    SPEED_CHANGE: 'SPEED_CHANGE'
  }
}
