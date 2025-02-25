import { FC, ReactNode } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './PageWrapper.module.scss';

interface BoxProps {
  children?: ReactNode;
  className?: string;
}

export const PageWrapper: FC<BoxProps> = ({ children, className }) => {
  return (
    <main className={cls(style.PageWrapper, {}, [className])}>{children}</main>
  );
};
