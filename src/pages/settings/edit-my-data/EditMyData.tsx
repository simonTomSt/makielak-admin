import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input, notification } from 'antd';
import { UpdateUserDto, usersApi } from 'api';
import { useAuth } from 'providers';

export const EditMyData = () => {
  const { user } = useAuth();

  const { mutate: updateMe } = useMutation({
    mutationFn: (userData: UpdateUserDto) =>
      usersApi.updateOneUser({ updateUserDto: userData, id: user?.id || '' }),
    onSuccess: () => {
      notification.success({
        message: 'Twoje dane zostały zaktualizowane',
      });
    },
  });

  if (!user) return null;

  const initialValues = {
    name: user.name,
    email: user.email,
  };

  return (
    <Form
      name='user-form'
      initialValues={initialValues}
      onFinish={updateMe}
      autoComplete='off'
      layout='vertical'
    >
      <Form.Item
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Podaj email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Nazwa'
        name='name'
        rules={[{ required: true, message: 'Podaj nazwe!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
};
