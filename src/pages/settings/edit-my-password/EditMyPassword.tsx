import { useMutation } from '@tanstack/react-query';
import { notification, Form, Input, Button } from 'antd';
import { UpdateUserDto, usersApi } from 'api';
import { useAuth } from 'providers';

export const EditMyPassword = () => {
  const { user } = useAuth();

  const editPasswordMutation = useMutation({
    mutationFn: (userData: UpdateUserDto) =>
      usersApi.updateOneUser({ updateUserDto: userData, id: user?.id || '' }),
    onSuccess: () => {
      notification.success({
        message: 'Twoje hasło zostało zaktualizowane',
      });
    },
  });

  if (!user) return null;

  const initialValues = {
    password: null,
  };

  return (
    <Form
      name='user-form'
      initialValues={initialValues}
      onFinish={(values) => editPasswordMutation.mutate(values)}
      autoComplete='off'
      layout='vertical'
    >
      <Form.Item
        label='Nowe hasło'
        name='password'
        rules={[
          { required: true, message: 'Podaj hasło!' },
          { min: 6, message: 'Hasło musi zawierać minimum 6 znaków' },
        ]}
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
