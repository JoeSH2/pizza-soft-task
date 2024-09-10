import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getMainPage } from '@/shared/consts/routingPath.ts';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  return (
    <PageWrapper className={style.NotFoundPage}>
      <FlexColumn alignItems={'center'} justifyContent={'center'}>
        <h1>Страница не найдена</h1>
        <Link to={getMainPage()}>Перейти на главную страницу</Link>
      </FlexColumn>
    </PageWrapper>
  );
};

export default NotFoundPage;
