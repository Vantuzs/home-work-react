import React,{useState} from 'react';
import styles from './TodoList.module.scss'

const TodoList = (props) => {
    const [checkboxInp,setCheckboxInp] = useState(false)
    const {stateDashboard:{daily},deleteMessage} = props
    const messageDailyArray = daily.map(currentDaily=>{
        const {body,id} = currentDaily

        const checkboxChangeHandler = ()=>{
            setCheckboxInp(!checkboxInp)
        }

        const buttoClickHandler = ({target: {id}})=>{
            deleteMessage(Number(id))
            console.dir(id);

        }

        return(
            <article id={id} key={id}>
            <input type='checkbox' onChange={checkboxChangeHandler}/>
            <div >{body}</div>
            <button onClick={buttoClickHandler} id={id}>Delete</button>
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
//dsas
