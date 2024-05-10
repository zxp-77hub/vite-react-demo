import { useDispatch,useSelector} from 'react-redux'
import { Button, Modal} from 'antd'
import{
  deleteAllDone,
  changeShowInfo,
  allTodoDone,
  ITodoInfoState,
  Store
} from '@/store'
import styles from '@components/Footer/index.module.scss'


export default function Footer(){
  const dispatch = useDispatch()
  const  [modal, contextHolder] = Modal.useModal()
  const todoInfoState:ITodoInfoState = useSelector((sotre:Store)=>sotre.todoInfo)
  const {todoList,showAllNoDone, isAllDone} = todoInfoState

  const doneInfoList = todoList.filter(item=>item.isDone) || []
  const notDoneInfoList = todoList.filter(item=>!item.isDone) || []

  const handleDeleteAllDone=async () => {
    const confirmed = await modal.confirm({
      title:`是否删除所有已完成项`
    })
    
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
    <div className={styles.footerBox}>
      <div className={styles.footerLeft}>
        <input type="checkbox" checked={!todoList.length ? false:isAllDone} onChange={chooseAllDone} className={styles.checkBox}/>
        <span className='ellipsis'>已完成{doneInfoList.length}/未完成{notDoneInfoList.length}</span>
      </div>
      <div className={styles.footerRight}>
        <Button disabled={!todoList.length} type='primary' onClick={handeleShowState} size='small' className={styles.deleteAllBtn}>{showAllNoDone ? '显示所有': '仅显示未完成'}</Button>
        <Button disabled={!doneInfoList.length} type='primary' danger={true} onClick={handleDeleteAllDone} size='small' className={styles.deleteAllBtn}>删除所有已完成</Button>
      </div>
    </div>
    {contextHolder}
   </>
  )
  
}