import { 
  useState,
  useTransition,
} from "react";
import { Button } from "antd";
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
import styles from "@/pages/HooksDemo/index.module.scss";

export default function DemoUseTransition({title}: IDemoProps) {
  const [tab, setTab] = useState(0)
  const [loading,startTransition] = useTransition()

  const handleClick = () =>{
    startTransition(()=>{
      setTab(tab+1)
    })
  }

  return (
    <HooksBox title={title}>
      不阻塞渲染更新hook状态{tab}
      <Button className={loading ? styles.loading : styles.done} onClick={handleClick}>更新</Button>
    </HooksBox>
  )
}
