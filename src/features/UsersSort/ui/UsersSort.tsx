import { FC, useCallback } from 'react';

import { IUser } from '@/entities/User';
import { userListAction } from '@/features/UserList';
import SortSvg from '@/shared/assets/img/sort.svg';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { cls } from '@/shared/lib/cls.ts';
import { Direction, sortingUsers, SortKey } from '@/shared/lib/sortingUsers';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Svg, SvgSize } from '@/shared/ui/Svg/Svg.tsx';

import style from './UsersSort.module.scss';

interface UsersSortProps {
  data?: IUser[];
  sortedBy: { key: SortKey; direction: Direction };
}

export const UsersSort: FC<UsersSortProps> = ({ data, sortedBy }) => {
  const dispatch = useAppDispatch();

  const handleSort = useCallback(
    async (key: SortKey) => {
      dispatch(userListAction.setSortedBy(key));
      if (data) {
        const sortList = sortingUsers(data, sortedBy.key, sortedBy.direction);
        dispatch(userListAction.initialUserList(sortList));
      }
    },
    [data, dispatch, sortedBy.direction, sortedBy.key]
  );

  return (
    <tr>
      <th>
        <FlexRow className={style.wrapperSort} alignItems={'center'}>
          <Button className={style.sort} onClick={() => handleSort('name')}>
            Name
          </Button>
          <Svg
            size={SvgSize.L}
            className={cls(
              style.icon,
              {
                [style.iconActive]: sortedBy.key === 'name',
                [style.iconAsc]:
                  sortedBy.direction === 'asc' && sortedBy.key === 'name',
              },
              []
            )}
            src={SortSvg}
          />
        </FlexRow>
      </th>
      <th>
        <FlexRow className={style.wrapperSort} alignItems={'center'}>
          <Button className={style.sort} onClick={() => handleSort('birthday')}>
            Date of birth
          </Button>
          <Svg
            size={SvgSize.L}
            className={cls(
              style.icon,
              {
                [style.iconActive]: sortedBy.key === 'birthday',
                [style.iconAsc]:
                  sortedBy.direction === 'asc' && sortedBy.key === 'birthday',
              },
              []
            )}
            src={SortSvg}
          />
        </FlexRow>
      </th>
      <th>Contact</th>
      <th>Role</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  );
};
