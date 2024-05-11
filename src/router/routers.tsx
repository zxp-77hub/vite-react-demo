import TodoInfo from "@/pages/TodoInfo";
import StartDemo from "@/pages/StartDemo";
import Home from "@/pages/Home";
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
    path: "/",
    element: <Home/>,
    name:'Home 首页'
  }
]