import { useDispatch } from 'react-redux'
import{addTodoList} from '@/store'
import { Input } from "antd";

export default function InputTodo() {
  const dispatch = useDispatch()

  const addTodoInfo =(e):any=>{
    const text = e?.target?.value
    if (text) {
      dispatch(addTodoList({ text}))
      console.dir(e.target);
      e.target.value =''
    }
  }
  return (
    <>
      <Input placeholder='请添加待处理项' onPressEnter={addTodoInfo}/>
    </>
  )
}

