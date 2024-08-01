import { Input, Button, Form , Drawer} from "antd";
import styles from './index.module.scss';
import { useState } from "react";

interface IFormValues {
  usename: string;
  password: string;
}
export default function Login() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const onReset = () => {
    form.resetFields()
  }

  const handleLogin = (values: IFormValues) => {
    console.log(values);

  }
  const forgetPassword = () => {
    setOpen(true);
  }

  return (<>

    <div className={styles.loginBox}>
      <h2 className={styles.loginTitle}>美食屋后台管理系统</h2>
      <Form
        onFinish={handleLogin}
        form={form}
        autoComplete="off"
        className={styles.formBox}>
        <Form.Item
          name="userName"
          rules={[{ required: true, message: '账号名必填' }]}
        >
          <Input type="text" placeholder="请输入账号/邮箱/电话号码" />

        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "密码为必填项" }]}>
          <Input.Password type="password" placeholder="请输入账号密码" className={styles.input} />
        </Form.Item>
        <div className={styles.buttonBox}>
          <Form.Item>
            <Button className={styles.button} type="primary" htmlType="submit">登录</Button>
            <Button htmlType="button" className={styles.button} onClick={onReset}>重置</Button>
          </Form.Item>
        </div>

      </Form>
      <span className={styles.forgetButton} onClick={forgetPassword}>忘记密码？</span>
    </div>
    <Drawer title="忘记密码？？？" onClose={()=>setOpen(false)} open={open}>
      <h3>请与系统维护xxx沟通,联系电话:138xxxx4345</h3>

    </Drawer>
  </>)

}
