import { useState,useDeferredValue, Suspense } from "react";
import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
import { Input } from "antd";
// import styles from "@/pages/HooksDemo/index.module.scss";

export default function DemoUseDeferredValue({title}: IDemoProps) {
    const [inputText, setInputText] = useState('')
    const showInput = useDeferredValue(inputText)
  return (
    <HooksBox title={title}>
      <Input value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
      <Suspense fallback={<h2>加载中。。。</h2>}>
        <InputText showInput={showInput}/>
      </Suspense>
    </HooksBox>
  )
}


function InputText({showInput}:{showInput:string}) {
  return (
    <span>输入值：{showInput}</span>
  )
}
