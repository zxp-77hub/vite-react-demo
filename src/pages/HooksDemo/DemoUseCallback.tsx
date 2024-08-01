import {
  useState,
  useCallback,
} from 'react'
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
import { Button } from "antd";
import {nanoid} from "nanoid";
import styles from "@/pages/HooksDemo/index.module.scss";

export default function DemoUseCallback({title}: IDemoProps) {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState('')
  const handleCount = useCallback(()=>{
    console.log('useCallBack测试');
    
    return count*2
  },[count])
  const handleChange =()=>{
    const id = nanoid()
    setTest(id)
  }

  return (
    <HooksBox title={title}>
      <span>显示数据：{handleCount()}</span>
      <span className={'ellipsis ' + styles.width150}>显示文本：{test}</span>
      <Button onClick={()=>setCount((count)=>count+1)}>点击修改数据</Button>
      <Button onClick={handleChange}>点击修改文本</Button>

    </HooksBox>
  )
}
