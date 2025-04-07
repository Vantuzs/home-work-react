import CONSTANTS from '../constants/todoConstants'
const { ACTIONS } = CONSTANTS

function todoReduser (state, action) {
  switch (action.type) {
    case ACTIONS.DAILY_LOAD_SUCCESS: {
      const { playload } = action

      return {
        ...state,
        error: null,
        isLoading: false
      }
    }
    case ACTIONS.DAILY_LOAD_ERROR: {
      const { playload } = action

      return {
        ...state,
        errorж: false,
        isLoading: false
      }
    }
    case ACTIONS.CHANGE_INPUT: {
      const { target } = action
      const { daily } = state
      let index
      if (daily.length <= 0) {
        index = 0
      } else {
        index = daily[daily.length - 1].id
      }
      const newObject = {
        body: target,
        id: index + 1
      }

      return {
        ...state,
        daily: [...daily, newObject]
      }
    }
    case ACTIONS.DELETE_TASK: {
      const { payload: idMessage } = action

      const filteredTasks = state.daily.filter(task => task.id != idMessage)

      return {
        ...state,
        daily: filteredTasks
      }
    }
  }
}

export default todoReduser
