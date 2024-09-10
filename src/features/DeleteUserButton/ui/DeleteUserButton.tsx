import { FC, useEffect } from 'react';

import { useDeleteUserMutation, useGetUsersQuery } from '@/entities/User';
import DeleteSvg from '@/shared/assets/img/delete.svg';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Svg, SvgSize } from '@/shared/ui/Svg/Svg.tsx';

import style from './DeleteUserButton.module.scss';

interface DeleteUserButtonProps {
  id: string;
}

export const DeleteUserButton: FC<DeleteUserButtonProps> = ({ id }) => {
  const [deleteUser, { isSuccess }] = useDeleteUserMutation();
  const { refetch } = useGetUsersQuery();

  const onDeleteUser = (id: string) => {
    deleteUser(id);
  };

  useEffect(() => {
    if (isSuccess) refetch();
  }, [isSuccess, refetch]);

  return (
    <Button onClick={() => onDeleteUser(id)} className={style.DeleteUserButton}>
      <Svg className={style.icon} size={SvgSize.S} src={DeleteSvg} />
    </Button>
  );
};
