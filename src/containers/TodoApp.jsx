import React from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import Header from "../components/Header";
import { toggleTheme } from "../redux/features/themeSLice";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import Todolist from "../components/Todolist";
import Filters from "../components/Filters";


const TodoApp = () => {
  const theme = useSelector(state => state.theme);

 const dispatch = useDispatch();

 const changeTheme = () => {
   dispatch(toggleTheme());
 }

  return (
    <DragDropContext onDragEnd={()=> console.log('end')}>
    <main className="todoapp u-margin-bottom-medium">
      <Header 
        theme={theme} 
        handleClick={changeTheme}/>
      <TodoForm/>
      <Todolist/>
      <Filters isDesktop={false}/>
    </main>
    <p className="text-center">Drag and drop to reorder the list</p>
    </DragDropContext>
  );
};

export default TodoApp;
