import {Layout, Menu } from 'antd';
import React from 'react';
import useStore from '../../store';
import cls from './index.module.less';

const { Header } = Layout;

const MyHeader: React.FC = () => {
  const {user, currChat} = useStore((state) => state);

  const handleChange = (e: { key: string }) => {
    if (e.key === '0') {
      localStorage.removeItem('vite-react-ts-antd-token');
      window.location.href = '/user/login';
    }
  };

  const menu = (
    <Menu onClick={handleChange}>
      <Menu.Item key="0">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Header className={cls.layout_header}>
      和{currChat?.name}聊天
    </Header>
  );
};

export default MyHeader;
