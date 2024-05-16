import { IChildDemo } from "@/pages/HooksDemo/type";
import styles from "@/pages/HooksDemo/index.module.scss";

export default function HooksBox({title, children}:IChildDemo) {
  
  return (
    <div className={styles.demoBox}> 
    <span className={styles.title}>{title}</span>
    {children}
  </div>
  )
}