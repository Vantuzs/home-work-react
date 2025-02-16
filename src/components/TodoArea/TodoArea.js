import React,{useState} from 'react';
import styles from './TodoArea.module.scss'

const TodoArea = (props) => {
    const [inputValue,setInputValue] = useState('')
    const {inputChangeHandler} = props
    console.log(props);

    const submitHandler = (event)=>{
        event.preventDefault()
        inputChangeHandler(inputValue)
    }

    // const Test = (event)=>{
    //     event.preventDefault()
    //     inputChangeHandler(inputValue) dsa
    // }
    return (
        <section className={styles.container}>
         <div>TodoArea</div> 
         <form onSubmit={submitHandler}>
         <input type='text' value={inputValue} onChange={a=>setInputValue(a.target.value)} />     
         <button type='submit'>dsa</button>
         </form>
        </section>
    );
}

export default TodoArea;
