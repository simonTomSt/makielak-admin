import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input, notification, Radio } from 'antd';
import {
  CreateUserDto,
  queryClient,
  Role,
  UpdateUserDto,
  UserOutDto,
  usersApi,
} from 'api';

type UserFormProps = {
  user: UserOutDto;
  createNewUser: boolean;
  onSubmit: (values: CreateUserDto & UpdateUserDto) => void;
};

export const UserForm = ({ user, createNewUser, onSubmit }: UserFormProps) => {
  const initialValues = { ...user };

  const deleteUserMutation = useMutation({
    mutationFn: () => usersApi.deleteOneUser({ id: user.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllUsers'] });
      notification.success({
        message: 'Udało się usunąc uzytkownika',
      });
    },
  });

  return (
    <>
      <Form
        name='user-form'
        initialValues={initialValues}
        onFinish={onSubmit}
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
          name='role'
          label='Role'
          rules={[{ required: true, message: 'Podaj rolę!' }]}
        >
          <Radio.Group>
            <Radio value={Role.Admin}>{Role.Admin}</Radio>
            <Radio value={Role.SuperAdmin}>{Role.SuperAdmin}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Podaj imię!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Hasło'
          name='password'
          rules={[{ required: createNewUser, message: 'Podaj imię!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Zapisz
          </Button>
        </Form.Item>
      </Form>

      {!createNewUser && (
        <Button
          htmlType='button'
          danger
          onClick={() => deleteUserMutation.mutate()}
        >
          Usuń uzytkownika
        </Button>
      )}
    </>
  );
};
