import { useSelector } from 'react-redux'
import{ITodoInfo, Store} from '@/store'
import Item from '@components/Item'
import '@components/TodoList/todoList.scss'
export default function TodoList(){
  const todoList = useSelector((sotre:Store)=>sotre.todoInfo.todoList)
  
  if (!todoList.length) {
    return(<></>);
  }
  return (
    <ul className="toList">
    {
      todoList.map((todo:ITodoInfo)=>(<Item key={todo.id} todoInfo={todo}/>))
    }
    </ul>
  )
  
}