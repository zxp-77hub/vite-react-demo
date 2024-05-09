import { useDispatch,useSelector} from 'react-redux'
import { Button, Modal} from 'antd'
import{
  deleteAllDone,
  changeShowInfo,
  allTodoDone,
  ITodoInfoState,
  Store
} from '@/store'
import '@components/Footer/index.scss'


export default function Footer(){
  const dispatch = useDispatch()
  const  [modal, contextHolder] = Modal.useModal()
  const todoInfoState:ITodoInfoState = useSelector((sotre:Store)=>sotre.todoInfo)
  const {todoList,showAllNoDone} = todoInfoState

  const doneInfoList = todoList.filter(item=>item.isDone) || []
  const notDoneInfoList = todoList.filter(item=>!item.isDone) || []

  const handleDeleteAllDone=async () => {
    const confirmed = await modal.confirm({
      title:`是否删除所有已完成项`
    })
    console.log('confirmed',confirmed);
    if (confirmed) {
      dispatch(deleteAllDone())
    }
  }

  const handeleShowState=async () => {
      dispatch(changeShowInfo())
      
  }

  const chooseAllDone=() => {
    dispatch(allTodoDone())
  }

  return (
   <>
    <div className='footerBox'>
      <div className='footerLeft'>
        <input type="checkbox" defaultChecked={showAllNoDone} onChange={chooseAllDone} className='checkBox'/>
        <span className='footerSpan ellipsis'>已完成{doneInfoList.length}/未完成{notDoneInfoList.length}</span>
      </div>
      <div className='footer-right'>
        <Button type='primary' onClick={handeleShowState} size='small' className='deleteAllBtn'>{showAllNoDone ? '显示所有': '仅显示未完成'}</Button>
        <Button type='primary' danger={true} onClick={handleDeleteAllDone} size='small' className='deleteAllBtn'>删除所有已完成</Button>
      </div>
    </div>
    {contextHolder}
   </>
  )
  
}