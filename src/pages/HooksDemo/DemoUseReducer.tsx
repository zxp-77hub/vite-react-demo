
import { useReducer, useState } from "react";
import { Input, Button } from "antd";
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
import styles from "@/pages/HooksDemo/index.module.scss";

export default function DemoUseReducer({title}: IDemoProps) {
  const [num, changeNum] =useState(0)
  const [state, dispatch] = useReducer(reducer,{count:0})

  const handleChange = (e) =>{
    changeNum(Number(e.target.value))
  };
  const handleClick = (type:TypesEnum)=>{
    console.log('num',typeof num);
    dispatch({type: type, number:num})
    
  }
  return (
    <HooksBox title={title}> 
      <Input value={num} type="number" min={0} onChange={handleChange}/>
      <Input value={state.count} type="number" disabled/>
      <div>
        <Button className={styles.button} onClick={()=> handleClick(TypesEnum.add)}>加</Button>
        <Button className={styles.button} onClick={()=> handleClick(TypesEnum.subtract)}>减</Button>
        <Button className={styles.button} onClick={()=> handleClick(TypesEnum.multiplication)}>乘</Button>
        <Button className={styles.button} onClick={()=> handleClick(TypesEnum.division)}>除</Button>
      </div>
    </HooksBox>
  )
}

  enum TypesEnum {
    add='add',
    subtract='subtract',
    multiplication='multiplication',
    division='division'
  }

 interface IAction {
  type: TypesEnum
  number?: number
 }

 interface IProps {
  count: number;
 }

const reducer = (state:IProps, action:IAction) => {
  const num = action.number||0;
  switch (action.type) {
    case TypesEnum.add:
      return { count : state.count + num};
    case TypesEnum.subtract:
      return { count: state.count - num};
    case TypesEnum.multiplication:
      return { count: state.count * num};

    case TypesEnum.division:
      if (num===0) {
        console.error('0 不能作为被除数');
      }
      return { count: num!=0 ? state.count/num : state.count};

    default:
      console.error('Action type 不存在');
      
    return state
  }

}