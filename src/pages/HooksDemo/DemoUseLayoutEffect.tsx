import { IDemoProps } from "@/pages/HooksDemo/type";
import HooksBox from "@/pages/HooksDemo/HooksBox";
// import styles from "@/pages/HooksDemo/index.module.scss";

export default function DemoUseLayoutEffect({title}: IDemoProps) {
  return (
    <HooksBox title={title}>DemoUseLayoutEffect</HooksBox>
  )
}
