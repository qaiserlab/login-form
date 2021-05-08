import React from 'react';

import { Row, Col, Space, Input, Button } from 'antd';
import { LoginOutlined, UndoOutlined } from "@ant-design/icons";

export default function LoginForm() {
  return (
    <React.Fragment>
      <Row gutter={[10, 20]}>
        <Col span={6}>Username</Col>
        <Col span={18}>
          <Input />
        </Col>
      
        <Col span={6}>Password</Col>
        <Col span={18}>
          <Input type={'password'} />
        </Col>

        <Col span={6} />
        <Col span={18}>
          <Space>
            <Button type={'primary'}>
              <LoginOutlined />
              Login
            </Button>
            <Button htmlType={'reset'}>
              <UndoOutlined />
              Reset
            </Button>
          </Space>
        </Col>
      </Row>
    </React.Fragment>
  )
}
