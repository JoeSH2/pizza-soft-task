import { FC } from 'react';
import { Link } from 'react-router-dom';

import EditSvg from '@/shared/assets/img/edit.svg';
import { getEditUserPage } from '@/shared/consts/routingPath.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Svg, SvgSize } from '@/shared/ui/Svg/Svg.tsx';

import style from './EditUserButton.module.scss';

interface EditUserButton {
  id: string;
}

export const EditUserButton: FC<EditUserButton> = ({ id }) => {
  return (
    <Link className={style.link} to={getEditUserPage(id)}>
      <Button className={style.EditUserButton}>
        <Svg className={style.icon} size={SvgSize.S} src={EditSvg} />
      </Button>
    </Link>
  );
};
