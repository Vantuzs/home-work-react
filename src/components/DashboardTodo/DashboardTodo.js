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
            type: ACTIONS.CHANGE_INPUT,//dsa
            target
        })
    }
    

    return (
        <main className={styles.container}>
       <TodoList stateDashboard={state}/>
       <TodoArea stateDashboard={state} inputChangeHandler={inputChangeHandler}/>
        </main>
    );
}

export default DashboardTodo;
