import { IChildDemo } from "@/pages/HooksDemo/type";
import { useState  } from "react";
import styles from "@/pages/HooksDemo/index.module.scss";

export default function HooksBox({title, children}:IChildDemo) {
  const [show, setShow] = useState(false);
  const changeShow =()=>{
    setShow(show=>!show);
  }
  return (
    <div className={styles.demoBox}> 
    <span className={styles.title} onClick={changeShow}>{title}</span>
    {show && children}
  </div>
  )
}