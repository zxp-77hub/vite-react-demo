import { 
  useState,
} from "react";
import { Button } from "antd";
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox"
import styles from "@/pages/HooksDemo/index.module.scss"

export default function DemoUseState({title}: IDemoProps) {
  const [count, setCount] =useState(0)
  

  const subtract =()=> {
    setCount((count)=>count-1)
  }
  return <>
    <HooksBox title={title}>
      <span>State数据:{count}</span>
      <div>
        <Button className={styles.button} onClick={()=>setCount(count+1)}>点击加1</Button>
        <Button className={styles.button} onClick={subtract}>点我减1</Button>
      </div>
    </HooksBox>
  </>
}

