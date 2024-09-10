import { FC } from 'react';

import { IUser } from '@/entities/User';
import { DeleteUserButton } from '@/features/DeleteUserButton';
import { EditUserButton } from '@/features/EditUserButton';

interface UserListMapProps {
  users: IUser[];
}

export const UserListMap: FC<UserListMapProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.birthday}</td>
          <td>{user.phone}</td>
          <td>{user.role}</td>
          <td>
            <EditUserButton id={user.id.toString()} />
          </td>
          <td>
            <DeleteUserButton id={user.id.toString()} />
          </td>
        </tr>
      ))}
    </>
  );
};
