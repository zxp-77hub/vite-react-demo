import TodoInfo from "@/pages/TodoInfo";
import StartDemo from "@/pages/StartDemo";
import Home from "@/pages/Home";
import HooksDemo from "@/pages/HooksDemo";
import Login from '@/pages/Login';
import GoodsManage from "@/pages/GoodsManage";

export default [
  {
    path: '/startDemo',
    name: '练习demo',
    element: <StartDemo/>,
  },
  {
    path: "/todo",
    element: <TodoInfo/>,
    name:'todo List demo'
  },
  {
    path: "/hooks",
    element: <HooksDemo/>,
    name:'HooksDemo'
  },
  {
    path: "/goodsList",
    element: <GoodsManage/>,
    name:"商品管理"
  },
  {
    path: "/login",
    element: <Login/>,
    name:"登录"
  },
  {
    path: "/",
    element: <Home/>,
    name:'Home 首页'
  }
]