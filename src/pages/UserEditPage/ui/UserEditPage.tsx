import { FC } from 'react';

import { UserEditForm } from '@/features/UserEditForm';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './UserEditPage.module.scss';

const UserEditPage: FC = () => {
  return (
    <PageWrapper className={style.UserEditPage}>
      <h5 className={style.title}>Редактировать данные сотрудника</h5>
      <UserEditForm />
    </PageWrapper>
  );
};

export default UserEditPage;
