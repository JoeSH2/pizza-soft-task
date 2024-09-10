import { FC } from 'react';

import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './PageError.module.scss';

const PageError: FC = () => {
  return (
    <PageWrapper className={style.PageError}>
      <p>PageError</p>
    </PageWrapper>
  );
};

export default PageError;
