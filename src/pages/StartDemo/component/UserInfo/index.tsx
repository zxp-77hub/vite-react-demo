import { Component, ReactNode } from "react";

export interface IUserInfo {
  name: string;
  age: number;
  like?: Array<string>|null;
}

export default class UserInfo extends Component<IUserInfo> {

  static defaultProps:Readonly<IUserInfo> = {
    name: "张三",
    age: 0,
    like:['1','2313'],
  }

  render(): ReactNode {
    const { name, age, like } = this.props;
    return<>
      <div>姓名：{name}</div>
      <div>年龄：{age}</div>
      {like &&<ol>
        {like.map((item)=>(<li key={item}>{item}</li>))}
      </ol> }

    </>
  }
}