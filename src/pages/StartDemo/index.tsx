import { Component, ReactNode } from 'react'
import UseInfo,{IUserInfo} from "@/pages/StartDemo/component/UserInfo";
import { NavLink } from "react-router-dom";
export interface IStartDemoState{
  count: number;
  userInfo: Array<IUserInfo>|null;
}

export type IStartDemoProps = {
}

export default class StartDemo extends Component<IStartDemoProps,IStartDemoState> {

  state: IStartDemoState={
    count:0,
    userInfo:[{
      name: '2323',
      age:14,
      like: ['ds']
    }]
  }

  private handleClick=()=>{
    const { count } = this.state;  
    this.setState({count: count+1})
  }

  render(): ReactNode {
    const { count,userInfo } = this.state;
    return (
    <>
    <NavLink to="/todo">todo</NavLink>
      <div onClick={this.handleClick}>
        {count}
      </div>
      {
        userInfo?.map(item=> <UseInfo key={item.name} {...item}/>)
      }
    </>)
  }
}