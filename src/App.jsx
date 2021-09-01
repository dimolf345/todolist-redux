import React from 'react'
import { useSelector } from 'react-redux';
import TodoApp from './containers/TodoApp';


function App() {
  const theme = useSelector(state => state.theme);

  return (
    <div className={`app app--${theme}`}   >
      <div className="background"></div>
      <TodoApp/>
    </div>
  )
}

export default App
