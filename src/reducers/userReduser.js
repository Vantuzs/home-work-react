import { ACTIONS } from "../constants/userConstants"

export const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function reduser(state,action) {
    switch(action.type){
        case ACTIONS.REGISTER_USER: {
            const { payload: {email, password,firstName,lastName} } = action;
            return {
                email,
                password,
                firstName,
                lastName,

            }
        };
        case ACTIONS.LOGIN_USER: {
            const { payload: {email, password} } = action;
            return {
                email,
                password
                
            }

        };
        default: return state;
    }
}

export default reduser;