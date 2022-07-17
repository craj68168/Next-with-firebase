import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { ButtonComponent } from "@components/atom/Button"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import styled from "styled-components"
import { useAuth } from '../context/AuthContext';
import { useFormik } from "formik";
import { useMutation } from "react-query"
import Google from "./google"
import * as Yup from "yup"
const Container = styled.div`
margin-top:50px;
text-align:center
`
interface FormikInitalValues {
  email: string,
  password: string
}
// const formikSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid Email").required("Email is required"),
//   password: Yup.string().required("Password is Required").min(6, "Must be 6 Characters")
// })
const Login = () => {
  const { login, user } = useAuth()
  const router = useRouter()

  const onFinish = async (values: any) => {
    try {
      const data = await login(values.email, values.password);
      toast.success("Login Successfully")
      router.push("/")

    } catch (error) {
      toast.error("Invalid Crediantial")
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <title>Login</title>
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
          label="email"
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
            Submit
          </ButtonComponent>

        </Form.Item>

      </Form>

    </Container>

  )
}

export default Login