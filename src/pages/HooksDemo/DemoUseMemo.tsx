import React,{ useMemo, useState } from "react";
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
import { Input } from "antd";
// import styles from "@/pages/HooksDemo/index.module.scss";

export default React.memo(function DemoUseMemo({title}: IDemoProps) {
  const [input1,setInput1] =useState('');
  const [input2,setInput2] =useState('');
  const result = useMemo(()=>calculate({text:title,input1:input1}),[title,input1])

  return (
    <HooksBox title={title}>
      <Input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)} size='small'/>
      <br/>
      <Input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)} size='small'/>
      <span>{result}</span>
    </HooksBox>
    
  )
})

function calculate({text, input1}:{text: string,input1:string}) {
  return `结果：${text} ${input1}`;
}