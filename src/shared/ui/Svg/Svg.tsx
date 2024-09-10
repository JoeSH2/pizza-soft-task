import { FC, memo, ReactElement } from 'react';
import { ReactSVG } from 'react-svg';

import { cls } from '@/shared/lib/cls.ts';

import style from './Svg.module.scss';

export enum SvgSize {
  S = 16,
  M = 20,
  L = 24,
  XL = 32,
  XXL = 46,
}

interface SvgProps {
  src: string;
  fallback?: ReactElement;
  loading?: ReactElement;
  className?: string;
  size?: SvgSize;
}

export const Svg: FC<SvgProps> = memo((props) => {
  const { src, fallback, loading, className, size } = props;
  return (
    <ReactSVG
      loading={loading ? () => loading : () => <div>loading</div>}
      fallback={fallback ? () => fallback : () => <div>error</div>}
      className={cls(style.Svg, {}, [className])}
      src={src}
      style={{
        height: size,
        width: size,
      }}
    />
  );
});
