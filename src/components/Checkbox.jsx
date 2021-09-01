import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../redux/features/todoSlice';



const Checkbox = ({isDisabled=false, id, checked}) => {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleTodo(id));
    }

    const theme = useSelector(state => state.theme)

    return (
        <div className="checkbox-container">
        <input 
        onChange={handleChange}
        checked={checked}
        disabled = {isDisabled}
        type="checkbox" 
        className={`checkbox checkbox--${theme}`} />
        </div>
    )
}

export default Checkbox;