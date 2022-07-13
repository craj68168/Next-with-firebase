import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import styled from "styled-components"
import { useAuth } from '../context/AuthContext';
import { useFormik } from "formik";
import { useMutation } from "react-query"
import * as Yup from "yup"
const Container = styled.div`
margin-top:50px;
text-align:center
`
interface FormikInitalValues {
  email: string,
  password: string
}
const formikSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is Required").min(6, "Must be 6 Characters")
})
const Login = () => {
  const { login, user } = useAuth()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: formikSchema,
    onSubmit: async (values: FormikInitalValues) => {
      console.log("values",values);
      
      await mutateAsync(values);
    },
  });
  const loginApi = async (values: FormikInitalValues) => {
    try {
      const data = await login(values.email, values.password);
      return data

    } catch (error) {
      return error
    }
  }

  const { mutateAsync } = useMutation("login", loginApi, {
    onSuccess: (data: any) => {
      toast.success("Login Successfully")
      router.push("/")
    },
    onError: (err) => {
      toast.error("Invalid Crediantial")
    }
  })


  // const onFinish = async (values: any) => {
  //   try {
  //     const data = await login(values.email, values.password);
  //     toast.success("Login Successfully")
  //     router.push("/")
  //   } catch (error) { 
  //     toast.error("Invalid Crediantial")
  //   }
  // };

  return (
    <Container>
      <title>Login</title>
      <Form
        onSubmit={formik.handleSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        >
          <Input />
          <span style={{ color: "red" }}>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </span>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        >
          <Input.Password />
          
        </Form.Item>
        <span style={{ color: "red" }}>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </span>
        <Form.Item wrapperCol={{ offset: 8, span: 1 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}

export default Login