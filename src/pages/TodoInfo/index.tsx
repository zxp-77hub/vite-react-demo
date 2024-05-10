import InputTodo from "@components/InputTodo";
import TodoList from "@components/TodoList";
import Footer from "@components/Footer";
import styles from './index.module.scss'

export default function TodoInfo() {
 
  return (
    <>
      <div className={styles.todoInfoBox}>
        <InputTodo/>
        <TodoList/>
        <Footer/>
      </div>
    </>
  )
}

