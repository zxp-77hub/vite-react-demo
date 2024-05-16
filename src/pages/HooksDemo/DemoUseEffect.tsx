import { 
  useState,
  useEffect,
} from "react";
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
import styles from "@/pages/HooksDemo/index.module.scss";
// 这个最次方案,可用UseRef替换
let timeId: any;


export default function DemoUseEffect({title}: IDemoProps){
  const [message, setMessage] =useState('你好欢迎使用')

  useEffect(()=>{
    timeId = setTimeout(()=>{
      setMessage('触发延时器')
    },2000);

    return ()=>{
      console.log("清除定时器："+ timeId);
      if (timeId) {
        clearTimeout(timeId)
      }
    }
  }, [])

  return<>
    <HooksBox title={title}>
      {message}
    </HooksBox>
  </>
}