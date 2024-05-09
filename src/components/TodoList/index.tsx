import { useSelector } from 'react-redux'
import Item from '@components/Item'
import '@components/TodoList/index.scss'
import{
  ITodoInfo,
  ITodoInfoState,
  ITodoList,
  Store
} from '@/store'
export default function TodoList(){
  const todoInfoState:ITodoInfoState = useSelector((sotre:Store)=>sotre.todoInfo)
  const {todoList=[],showAllNoDone} = todoInfoState
  let showList:ITodoList = todoList;
  console.log('todo-list', showList,showAllNoDone);
  
  if(showAllNoDone){
    showList= todoList.filter(item=>!item.isDone) || []

  }
  if (!showList.length) {
    return(<></>);
  }
  return (
    <ul className="toList">
    {
      showList.map((todo:ITodoInfo)=>(<Item key={todo.id} todoInfo={todo}/>))
    }
    </ul>
  )
  
}