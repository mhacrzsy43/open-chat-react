import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useStore from '../../store';
import cls from './index.module.less';

const Login: React.FC = () => {
  const { user, login, loading } = useStore((state) => ({ ...state }));
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push('/messageList'); // 使用 push 方法跳转到 /about 页面
    }
  }, [user]);

  return (
    <div className={cls.loginBox}>
      <Card className="_bg" bordered={false}>
        <Form
          onFinish={({ username, password }) => {
            login({ username, password });
          }}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined />} placeholder="请输入用户名：admin" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input prefix={<LockOutlined />} placeholder="请输入密码：123456" />
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className={cls.button}>
              {!loading ? '登陆' : '登陆中...'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
