import InputTodo from "@components/InputTodo";
import TodoList from "@components/TodoList";
import Footer from "@components/Footer";

import './index.scss'

export default function TodoInfo() {
 
  return (
    <>
      <div className="todoInfoBox">
        <InputTodo/>
        <TodoList/>
        <Footer/>
      </div>
    </>
  )
}

