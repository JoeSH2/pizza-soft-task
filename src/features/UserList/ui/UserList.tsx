import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useGetUsersQuery } from '@/entities/User';
import {
  getUserListSelectors,
  getUserListSortedBySelectors,
  getUsersListFilteredSelectors,
  userListAction,
} from '@/features/UserList';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { sortingUsers } from '@/shared/lib/sortingUsers.tsx';

import { UsersSort } from '../../UsersSort';
import style from './UserList.module.scss';
import { UserListMap } from './UserListMap/UserListMap.tsx';
import { UserListError } from './UserListState/UserListError.tsx';
import { UserListLoading } from './UserListState/UserListLoading.tsx';

export const UserList: FC = () => {
  const dispatch = useAppDispatch();
  const { data, isSuccess, isLoading, refetch } = useGetUsersQuery();
  const sortedBy = useSelector(getUserListSortedBySelectors);
  const usersFilteredList = useSelector(getUsersListFilteredSelectors);
  const usersList = useSelector(getUserListSelectors);

  useEffect(() => {
    refetch();
    if (data) {
      const sortList = sortingUsers(data, sortedBy.key, sortedBy.direction);
      dispatch(userListAction.initialUserList(sortList));
    }
  }, [data, dispatch, refetch, sortedBy.direction, sortedBy.key]);

  if (isLoading) {
    return <UserListLoading />;
  }

  if (!isSuccess || !usersList) {
    return <UserListError />;
  }

  return (
    <table className={style.table}>
      <thead>
        <UsersSort data={usersList} sortedBy={sortedBy} />
      </thead>
      <tbody className={style.list}>
        <UserListMap users={usersFilteredList} />
      </tbody>
    </table>
  );
};
