import { FC } from 'react';

import { Container } from '@/shared/ui/Container/Container.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  const {} = props;
  return (
    <footer className={style.Footer}>
      <Container>
        <FlexRow alignItems={'center'} className={style.wrapper}>
          <h3 className={style.title}>Footer</h3>
        </FlexRow>
      </Container>
    </footer>
  );
};
