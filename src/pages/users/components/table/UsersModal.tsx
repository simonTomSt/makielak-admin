import { Modal, ModalProps, notification } from 'antd';
import { UserForm } from './UserForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  CreateUserDto,
  queryClient,
  UpdateUserDto,
  UserOutDto,
  usersApi,
} from 'api';
import { newUserActionKey } from './UsersTable';
import { LoadingOutlined } from '@ant-design/icons';

type UsersModalProps = {
  userId: string;
} & ModalProps;

export const UsersModal = ({ userId, ...props }: UsersModalProps) => {
  const createNewUser = userId === newUserActionKey;
  const title = createNewUser ? 'Stwórz użytkownika' : 'Edycja użytkownika';
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['getAllUsers'] });
    queryClient.invalidateQueries({ queryKey: ['getUserById'] });
    notification.success({
      message: 'Udało się zapisać uzytkownika',
    });
  };

  const createUserMutation = useMutation({
    mutationFn: (userData: CreateUserDto) =>
      usersApi.createUser({ createUserDto: userData }),
    onSuccess,
  });

  const updateUserMutation = useMutation({
    mutationFn: (userData: UpdateUserDto) =>
      usersApi.updateOneUser({ updateUserDto: userData, id: userId }),
    onSuccess,
  });

  const { data: userData, isInitialLoading } = useQuery({
    queryKey: ['getUserById', userId],
    queryFn: () => usersApi.getUserById({ id: userId }),
    enabled: userId !== newUserActionKey,
  });

  const userMutation = createNewUser ? createUserMutation : updateUserMutation;

  if (!userData?.data?.user && userId !== newUserActionKey) return null;

  return (
    <Modal title={title} footer={[]} {...props}>
      {!isInitialLoading ? (
        <UserForm
          user={userData?.data?.user || ({} as UserOutDto)}
          onSubmit={userMutation.mutate}
          createNewUser={createNewUser}
        />
      ) : (
        <LoadingOutlined />
      )}
    </Modal>
  );
};
