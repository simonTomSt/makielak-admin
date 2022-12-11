import { Button, Space, Table } from 'antd';
import React, { useState } from 'react';
import { UserOutDto } from 'api';
import { UsersModal } from './UsersModal';

export const newUserActionKey = 'NEW_USER';

const getColumns = (showModal: (userId: string) => void) => [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: any) => (
      <Button onClick={() => showModal(record.id)}>Edytuj</Button>
    ),
  },
];

type UsersTableProps = {
  users: UserOutDto[];
  isLoading: boolean;
};

export const UsersTable = ({ users, isLoading }: UsersTableProps) => {
  const dataSource = users.map((user) => ({ ...user, key: user.id }));
  const [activeUserId, setActiveUserId] = useState<string>();
  const showModal = (userId: string) => {
    setActiveUserId(userId);
  };
  const columns = getColumns(showModal);

  const handleCancel = () => {
    setActiveUserId(undefined);
  };

  return (
    <>
      <Space direction='vertical' size='middle' style={{ width: '100%' }}>
        <Button onClick={() => showModal(newUserActionKey)}>
          Dodaj użytkownika
        </Button>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          loading={isLoading}
        />
      </Space>

      {activeUserId && (
        <UsersModal
          userId={activeUserId}
          open={!!activeUserId}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
