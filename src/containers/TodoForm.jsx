import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/features/todoSlice'
import Checkbox from '../components/Checkbox';




const TodoForm = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    const handleChange = (e)=> {
        setInput(e.target.value);
    }

    return (
        <div className="todocontainer u-margin-bottom-small flex">
                     <form  onSubmit={handleSubmit} className="todoform">
            <Checkbox isDisabled={true}/>
               <input 
               className="todoform__input"
               placeholder="Add a new todo..."
               onChange={handleChange}
               value={input}
               type="text" />
            </form>
        </div>
    )
}


export default TodoForm;