import CONSTANTS from '../constants/weatherConstants';
const { ACTIONS } = CONSTANTS;

function weatherReduser(state,action){
    switch(action.type){
        case ACTIONS.TEST:{
            const {playload: obj}= action

            return {
                ...state,
                obj
            }
        }
        case ACTIONS.API_ERROR:{
            const {playload:error} = action

            return {
                ...state,
                error
            }
        }
        case ACTIONS.WEATHER_LOADS:{
            const {obj} = action

            return {
                ...state,
                obj
            }
        }
        case ACTIONS.CITY_NAME_CHANGE:{
            const {cityName} = action

            return {
                ...state,
                city: cityName
            }
        }
        case ACTIONS.GRADUS_CHANGE:{
            const {gradus}= action
            return{
                ...state,
                gradus
            }
        }
        case ACTIONS.SPEED_CHANGE:{
            const {speed}=action

            return{
                ...state,
                gradus:speed
            }
        }
        default: return state
    }
}

export default weatherReduser