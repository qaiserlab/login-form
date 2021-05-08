import React, { useEffect, useRef } from 'react';
import { useFormik } from "formik";

import { Row, Col, Space, Input, Button } from 'antd';
import { LoginOutlined, UndoOutlined } from "@ant-design/icons";

export default function LoginForm() {
  const userNameRef = useRef(null);

  const formik = useFormik({
    // validationSchema,
    initialValues: {
      userName: '',
      password: ''
    },

    onSubmit: (values, { resetForm, setSubmitting }) => {
      alert(JSON.stringify(values));
      resetForm();
      setSubmitting(false);
    }
  });

  useEffect(() => {
    userNameRef.current.focus();
  }, []); // Second param empty, mean only execute once time

  const handleReset = () => {
    formik.resetForm();
    userNameRef.current.focus();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row gutter={[8, 16]}>
        <Col span={6}>Username</Col>
        <Col span={18}>
          <Input
            ref={userNameRef}
            id={'userName'}
            name={'userName'}
            placeholder={'Username'}
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.userName && formik.touched.userName && (
            <div style={{ color: "red" }}>{formik.errors.userName}</div>
          )}
        </Col>
      
        <Col span={6}>Password</Col>
        <Col span={18}>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </Col>

        <Col span={6} />
        <Col span={18}>
          <Space>
            <Button htmlType={'submit'} type={'primary'}>
              <LoginOutlined />
              Login
            </Button>
            <Button onClick={handleReset}>
              <UndoOutlined />
              Reset
            </Button>
          </Space>
        </Col>
      </Row>
    </form>
  )
}
