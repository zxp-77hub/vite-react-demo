import { useState } from "react";
import { Drawer } from "antd";
import styles from '@components/CommonNav/index.module.scss'
import routers from '@/router/routers'

export default function CommonNav(){

  const [open, setOpen] = useState(false)

  const handleShow=()=>{
    setOpen(true);
  }

  const handleClose = ()=>{
    setOpen(false);
  }

  return <>
    <div className={styles.NavBox} onClick={handleShow}>{open? <span className={styles.iconFont}>&#xe601;</span>: <span className={styles.iconFont}>&#xe665;</span>}</div>
    <div className={styles.iconFont}></div>
    <Drawer title="项目路由导航" onClose={handleClose} open={open}>
      <div className={styles.navBox}>
        {routers?.map(router=><a className={styles.navBar} key={router.path} href={'/#'+router.path}>{router.name}</a>)}
      </div>
    </Drawer>
  </>
}