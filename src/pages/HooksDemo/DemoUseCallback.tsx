import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
// import styles from "@/pages/HooksDemo/index.module.scss";

export default function DemoUseCallback({title}: IDemoProps) {
  return (
    <HooksBox title={title}>DemoUseCallback</HooksBox>
  )
}
