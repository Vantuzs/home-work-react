import React,{useEffect,useReducer} from 'react';
import TodoList from '../TodoList/TodoList';
import TodoArea from '../TodoArea/TodoArea';
import styles from './DashboardTodo.module.scss'
import CONSTANTS,{INITIALSTATETODO} from '../../constants/todoConstants'
import todoReduser from '../../reducers/todoReduser';
const {ACTIONS} = CONSTANTS

const DashboardTodo = () => {
    const [state,dispatch] = useReducer(todoReduser,INITIALSTATETODO)
    const inputChangeHandler = (target)=>{
        dispatch({
            type: ACTIONS.CHANGE_INPUT,//dsaы
            target
        })
    }

    const deleteMessage = (idMessage)=>{
        dispatch({
            type: ACTIONS.DELETE_TASK,
            payload:idMessage
        })
    }
    

    return (
        <main className={styles.container}>
       <TodoList stateDashboard={state} deleteMessage={deleteMessage}/>
       <TodoArea stateDashboard={state} inputChangeHandler={inputChangeHandler}/>
        </main>
    );
}

export default DashboardTodo;
