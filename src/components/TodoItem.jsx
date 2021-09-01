import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/features/todoSlice'
import Checkbox from './Checkbox'
import { Draggable } from 'react-beautiful-dnd'



const TodoItem = ({item ,index }) => {
    const dispatch = useDispatch();
    const handleClick = ()=> dispatch(removeTodo(item.id))

    return (
        <Draggable draggableId={String(item.id)} index={index}>
            {(provided)=> (
                <li ref={provided.innerRef} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="todolist__item">
                  <div className={`todoitem`}>
                    <Checkbox checked={item.done} id={item.id}/>
                    <div 
                    className={`todoitem__text 
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
                </li>
            )}
        </Draggable>
    )
}

export default TodoItem;


