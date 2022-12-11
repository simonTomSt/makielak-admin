import React, { useState } from 'react';
import { Button, Dropdown, Layout, Menu, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { useAuth } from 'providers';
import { Routes } from 'router';
import { SessionTime } from './SessionTime';

const { Header, Content, Sider } = Layout;

export const PanelLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu
          style={{ paddingTop: '60px' }}
          theme='dark'
          defaultSelectedKeys={[location.pathname || Routes.dashboard]}
          mode='inline'
          items={MenuItems(user?.role, navigate)}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          <Row
            justify='end'
            align='middle'
            style={{ height: '100%', marginRight: '36px' }}
          >
            <SessionTime />
            <Dropdown
              menu={{
                items: [{ label: 'Wyloguj', key: 'signOut', onClick: signOut }],
              }}
            >
              <Button type='primary' shape='circle'>
                <UserOutlined />
              </Button>
            </Dropdown>
          </Row>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            <main>
              <Outlet />
            </main>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
