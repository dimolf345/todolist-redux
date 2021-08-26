import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/features/todoSlice'
import Checkbox from './Checkbox'



const TodoItem = ({item, index}) => {
    const dispatch = useDispatch();
    const handleClick = ()=> dispatch(removeTodo(item.id))

    return (
        // <Draggable 
        // index={index}
        // draggableId={item.id}
        // key={item.id}>
           <div className={`todocontainer todoitem`}>
               <Checkbox 
               checked={item.done}
               id={item.id}/>
               <div className={`todoitem__text 
               ${item.done? 'todoitem__text--done': ''}` }>
                   <p className="paragraph">
                       {item.description}
                   </p>
               </div>
               <button 
                onClick={handleClick}
                className="todoitem__remove">
               </button>
            </div>
       // </Draggable>
    )
}

export default TodoItem;