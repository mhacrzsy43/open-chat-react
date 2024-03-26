import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import useStore from '../../store';
import clas from './index.module.less';
import {register} from "@/api/user";

const Register = () => {
  const [form] = Form.useForm();

  return (
    <div className={clas.registerContainer}>
      <h2>Connect your Google account</h2>
      <Form
          onFinish={({ nickname, email, password }) => {
            register({ nickname, email, password });
          }}
        name="register"
        scrollToFirstError
        className={clas.registerForm}
      >
        <Form.Item
          name="nickname"
          rules={[{ required: true, message: 'Please input your Nickname!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nickname" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I agree with OpenChat's Terms of Service, Privacy Policy, and
            default Notification Settings.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={clas.registerFormButton}>
            Create Account
          </Button>
        </Form.Item>
      </Form>
      <div className={clas.signInRedirect}>
        Already have an account? <a href="/user/login">Sign In</a>
      </div>
      <div className={clas.recaptchaInfo}>
        This site is protected by reCAPTCHA and the Google
        Privacy Policy and Terms of Service apply.
      </div>
    </div>
  );
};

export default Register;
