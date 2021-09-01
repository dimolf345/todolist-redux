import React from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import Header from "../components/Header";
import { orderTodo } from "../redux/features/todoSlice";
import { toggleTheme } from "../redux/features/themeSLice";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import Todolist from "../components/Todolist";
import Filters from "../components/Filters";


const TodoApp = () => {
  const theme = useSelector(state => state.theme);
  const todoList = useSelector(state => state.todo.todos)
  
 const dispatch = useDispatch();

 const changeTheme = () => {
   dispatch(toggleTheme());
 }

 const reorderList = (list, startIndex, endIndex) => {
   const newList = Array.from(list);
   const [removed] = newList.splice(startIndex, 1);
   newList.splice(endIndex, 0, removed)

   return newList;
 }

 const onDragEnd = (result)=> {
   console.log('start dragging');
   if(!result.destination) {
     return;
   }

   if (result.destination.index === result.source.index) {
     return;
   }

   dispatch(orderTodo(reorderList(todoList, result.source.index, result.destination.index)))
 }
  return (
    <>
    <main className="todoapp u-margin-bottom-medium">
      <Header 
        theme={theme} 
        handleClick={changeTheme}/>
      <TodoForm/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Todolist/>
      </DragDropContext>
      <Filters isDesktop={false}/>
    </main>
    <p className="text-center">Drag and drop to reorder the list</p>
    </>
  );
};

export default TodoApp;
