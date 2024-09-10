import { FC, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import {
  getUserListFilteredByArchive,
  getUserListFilteredByRole,
  getUserListSelectors,
  userListAction,
} from '@/features/UserList';
import { FilteredByIsArchive } from '@/features/UserList/model/slice/userListSlice.ts';
import { roles } from '@/shared/consts/roles.ts';
import { UserRole } from '@/shared/consts/userRole.ts';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { cls } from '@/shared/lib/cls.ts';
import { onFilteredUsers } from '@/shared/lib/filteredUsers.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Select } from '@/shared/ui/Select/Select.tsx';

import style from './UserFilter.module.scss';

type FiltersForm = {
  role: UserRole | '';
};

const filterArchive: FilteredByIsArchive[] = ['все', 'в архиве', 'активные'];

export const UserFilter: FC = () => {
  const dispatch = useAppDispatch();
  const filteredByRole = useSelector(getUserListFilteredByRole);
  const filteredByArchive = useSelector(getUserListFilteredByArchive);
  const users = useSelector(getUserListSelectors);

  const { register, watch } = useForm<FiltersForm>({
    defaultValues: {
      role: filteredByRole,
    },
  });
  const selectedRole = watch('role');

  const onChangeFilterArchive = useCallback(
    (item: FilteredByIsArchive) => {
      dispatch(userListAction.setFilteredByArchive(item));
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectedRole !== filteredByRole) {
      dispatch(userListAction.setFilteredByRole(selectedRole));
    }
  }, [dispatch, filteredByRole, selectedRole]);

  useEffect(() => {
    if (users) {
      const filteredUsers = onFilteredUsers(
        users,
        filteredByRole,
        filteredByArchive
      );
      dispatch(userListAction.setFilteredUsers(filteredUsers));
    }
  }, [dispatch, filteredByArchive, filteredByRole, users]);

  return (
    <FlexRow alignItems={'center'} className={style.UserFilter}>
      <FlexRow className={style.wrapper}>
        <span>Фильтровать по должности:</span>
        <Select
          hook={{ ...register('role') }}
          empty={'Без фильтра'}
          className={style.select}
          name="role"
          options={roles}
        />
      </FlexRow>
      <FlexRow className={style.wrapper}>
        {filterArchive.map((item, i) => (
          <Button
            key={`${item}_${i}`}
            className={cls(
              style.btn,
              { [style.activeBtn]: item === filteredByArchive },
              []
            )}
            onClick={() => onChangeFilterArchive(item)}
          >
            {item}
          </Button>
        ))}
      </FlexRow>
    </FlexRow>
  );
};
