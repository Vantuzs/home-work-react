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
        default: return state
    }
}

export default weatherReduser