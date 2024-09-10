import { FC } from 'react';
import { Link } from 'react-router-dom';

import { UserFilter } from '@/features/UserFilter';
import { UserList } from '@/features/UserList';
import { getCreateUserPage } from '@/shared/consts/routingPath.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './MainPage.module.scss';

const MainPage: FC = () => {
  return (
    <PageWrapper className={style.MainPage}>
      <h4 className={style.title}>Список сотрудников</h4>
      <FlexRow
        className={style.wrapper}
        fullWight
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <UserFilter />
        <Link to={getCreateUserPage()}>
          <Button className={style.createBtn}>Добавить</Button>
        </Link>
      </FlexRow>
      <UserList />
    </PageWrapper>
  );
};

export default MainPage;
