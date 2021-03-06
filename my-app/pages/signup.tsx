import React from 'react'
import { Form, Input } from 'antd';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components"
import { useAuth } from '../context/AuthContext';
import { ButtonComponent } from '../components/atom/Button';
import { useRouter } from 'next/router';
const Container = styled.div`
margin-top:50px;
text-align:center
`
const Signup = () => {
  const { signUp, user, logout } = useAuth();
  console.log("user", user);
  const router = useRouter()
  const onFinish = async (values: any) => {
    try {
      const data = await signUp(values.email, values.password)
      toast.success("Signup Successfully");
      logout()
      router.push("/login")
    } catch (error: any) {
      toast.error("Something Went Wrong");
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  if (user) {
    router.push("/")
  }
  return (
    <Container>
      <title>Signup</title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>



        <Form.Item wrapperCol={{ offset: 8, span: 1 }}>
          <ButtonComponent type="primary" htmlType="submit">
            Sign up
          </ButtonComponent>
        </Form.Item>
      </Form>
    </Container>

  )
}

export default Signup