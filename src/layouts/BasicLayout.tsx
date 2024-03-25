import { Layout } from 'antd';
import { createBrowserHistory } from 'history';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import { IRouteConfig } from '@/routes/config';

import MyHeader from '../components/Header';
import MyMenu from '../components/Menu';

const { Content } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const history = createBrowserHistory();

  if (!localStorage.getItem('token')) {
    history.push('/user/login');
  }

  return (
    <Layout>
      <Layout>
        <Content>
          <div style={{ display: 'flex',height: '100%' }}>
            <MyMenu />
            <div style={{ flex: 1, height: 'calc(100% - 60px)'}}> <MyHeader />{renderRoutes(route.routes)}</div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
