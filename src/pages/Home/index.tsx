import routers from '@/router/routers'
import { NavLink } from "react-router-dom";
import styles from "@/pages/Home/index.module.scss";
export default function Home() {

  return<>
    <div  className={styles.navBox}>
      {routers.map(router=><NavLink className={styles.navBar} key={router.path} to={router.path}>{router.name}</NavLink>)}
    </div>
  
  </>
  
}