import React,{useState} from 'react';
import styles from './TodoArea.module.scss'

const TodoArea = (props) => {
    const [inputValue,setInputValue] = useState('')
    const {inputChangeHandler} = props
    console.log(props);

    const submitHandler = (event)=>{
        const {target: {firstElementChild: {value}}} = event
        event.preventDefault()
        const trimValue = value.trim()
        if(trimValue===''){
            return
        } else{
            inputChangeHandler(trimValue)
            setInputValue('')
        }
    }

    // const Test = (event)=>{
    //     event.preventDefault()
    //     inputChangeHandler(inputValue) dsaы
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
