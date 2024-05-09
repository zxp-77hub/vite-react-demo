import { useState } from "react";
import { useDispatch } from 'react-redux'
import{addTodoList} from '@/store'
import { Input } from "antd";

export default function InputTodo() {
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState('')
  
  const handleInput =(e)=>{
    setInputText(e.target.value)
  }

  const addTodoInfo =():any=>{
    if (inputText) {
      dispatch(addTodoList({ text:inputText}))
      setInputText('')
    }
  }
  return (
    <>
      <Input placeholder='请添加待处理项,按回车键确认' value={inputText} onChange={handleInput} onPressEnter={addTodoInfo}/>
    </>
  )
}

