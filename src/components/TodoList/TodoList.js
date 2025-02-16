import React,{useState} from 'react';
import styles from './TodoList.module.scss'

const TodoList = (props) => {
    const [checkboxInp,setCheckboxInp] = useState(false)
    const {stateDashboard:{daily}} = props
    const messageDailyArray = daily.map(currentDaily=>{
        const {body,id} = currentDaily

        const checkboxChangeHandler = ()=>{
            setCheckboxInp(!checkboxInp)
        }

        return(
            <article id={id}>
            <input type='checkbox' onChange={checkboxChangeHandler}/>
            <div >{body}</div>
            </article>
        )
    })
    return (
        <section className={styles.container}>
         <div>Todolist</div> 
         <div>{messageDailyArray}</div>  
        </section>
    );
}

export default TodoList;
//dsa
