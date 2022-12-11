import { useQuery } from '@tanstack/react-query';
import { UserOutDto, usersApi } from 'api';
import { UsersTable } from './components';

export const UsersPage = () => {
  const { data: usersData, isLoading } = useQuery({
    queryKey: ['getAllUsers'],
    queryFn: () => usersApi.getAllUsers(),
  });

  return (
    <div>
      <UsersTable
        users={usersData?.data?.users || ([] as UserOutDto[])}
        isLoading={isLoading}
      />
    </div>
  );
};
