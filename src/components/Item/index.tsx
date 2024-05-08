import { useDispatch } from 'react-redux'
import{deleteTodoList,changeInfoState, ITodoInfo} from '@/store'
import { Button,Checkbox, Modal} from 'antd'
import '@components/Item/item.scss'
interface IProps{
  todoInfo: ITodoInfo;
}

export default function Item({todoInfo}:IProps){
  const dispatch = useDispatch()
  const  [modal, contextHolder] = Modal.useModal()

  const handeleDeleteTodo=async (id:string) => {
    const confirmed = await modal.confirm({
      title:`当前todo项 ${todoInfo.isDone? '已完成':'未完成'}，请确认是否删除`
    })
    console.log('confirmed',confirmed);
    if (confirmed) {
      dispatch(deleteTodoList({id}))
      
    }
  }

  const handleChange=(todoInfo:ITodoInfo) => {
  
    dispatch(changeInfoState({...todoInfo}))
  }

  return (
   <>
    <li key={todoInfo.id} className="itemBox">
      <Checkbox checked={todoInfo.isDone} onChange={()=>handleChange(todoInfo)} className='checkBox'/>
      <span className='info'>{todoInfo.text}</span>
    <div className='rightBox'>
      <Button danger={true} onClick={()=>handeleDeleteTodo(todoInfo.id)} size='small' className='deleteBtn'>删除</Button>
    </div>
    </li>
    {contextHolder}
   </>
  )
  
}