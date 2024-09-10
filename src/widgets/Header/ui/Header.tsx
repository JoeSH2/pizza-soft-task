import { FC } from 'react';
import { Link } from 'react-router-dom';

import LogoSvg from '@/shared/assets/img/logo.svg';
import { getMainPage } from '@/shared/consts/routingPath.ts';
import { Container } from '@/shared/ui/Container/Container.tsx';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Svg, SvgSize } from '@/shared/ui/Svg/Svg.tsx';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import style from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Container>
        <FlexRow
          alignItems={'center'}
          justifyContent={'space-between'}
          className={style.wrapper}
        >
          <Link to={getMainPage()}>
            <FlexRow alignItems={'center'}>
              <Svg className={style.logo} size={SvgSize.XXL} src={LogoSvg} />
              <h3 className={style.title}>PIZZA SOFT</h3>
            </FlexRow>
          </Link>
          <ThemeSwitcher />
          <FlexColumn className={style.profile}>
            <p>Danila Kuzin</p>
            <span>tg: @dksspkuz</span>
          </FlexColumn>
        </FlexRow>
      </Container>
    </header>
  );
};
