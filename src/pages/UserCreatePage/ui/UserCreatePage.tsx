import { FC } from 'react';

import { UserCreateForm } from '@/features/UserCreateForm';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './UserCreatePage.module.scss';

const UserCreatePage: FC = () => {
  return (
    <PageWrapper className={style.UserCreatePage}>
      <FlexColumn className={style.titleWrapper} alignItems={'center'}>
        <h3>Добавление нового сотрудника</h3>
        <p>
          Пожалуйста, предоставьте все необходимые данные для успешной
          интеграции нового сотрудника в нашу команду.
        </p>
      </FlexColumn>
      <UserCreateForm />
    </PageWrapper>
  );
};

export default UserCreatePage;
