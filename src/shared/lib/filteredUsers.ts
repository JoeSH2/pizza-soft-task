import { IUser } from '@/entities/User';
import { FilteredByIsArchive } from '@/features/UserList/model/slice/userListSlice.ts';
import { UserRole } from '@/shared/consts/userRole.ts';

export const onFilteredUsers = (
  users: IUser[],
  role: UserRole | '',
  isArchive: FilteredByIsArchive
): IUser[] => {
  return users.filter((item) => {
    const filteredByRole = role === '' || item.role === role;

    const filteredByArchive = () => {
      if (isArchive === 'в архиве') {
        return item.isArchive;
      }
      if (isArchive === 'активные') {
        return !item.isArchive;
      }

      return true;
    };

    return filteredByRole && filteredByArchive();
  });
};
