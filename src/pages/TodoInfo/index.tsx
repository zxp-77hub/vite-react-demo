import InputTodo from "@components/InputTodo";
import TodoList from "@components/TodoList";
import './todoInfo.scss'

export default function TodoInfo() {
 
  return (
    <>
      <div className="todoInfoBox">
        <InputTodo/>
        <TodoList/>
        {/* <Footer/> */}
      </div>
    </>
  )
}

