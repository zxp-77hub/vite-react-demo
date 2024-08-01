import { 
  useState,
  useEffect,
  useRef,
} from "react";
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
// import styles from "@/pages/HooksDemo/index.module.scss";

export default function HooksDemo({title}: IDemoProps){
  const [count,setCount] = useState(0)
  const timeRef = useRef<ReturnType<typeof setTimeout>|undefined>(undefined)
  useEffect(()=>{
    timeRef.current = setInterval(()=>{
      // console.log('数字',count); // 永远为初始值 0  
      setCount(count=>{
        console.log('count',count);
        if (count>10) {
          clearInterval(timeRef.current);
        }
        return ++count;
      });
    },1000);
   return ()=>{
      console.count('清除RefTimeId')
      if (timeRef.current) {
        clearInterval(timeRef.current)
      }
    }
  },[])
  return<>
  <HooksBox title={title}>
    定时器触发{count}
  </HooksBox>
    
  </>
}


