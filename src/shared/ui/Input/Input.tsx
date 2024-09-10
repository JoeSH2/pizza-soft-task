import { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react';

import { cls } from '../../lib/cls.ts';
import style from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hook?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  clearStyle?: boolean;
  error?: string;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    placeholder = 'type...',
    disabled,
    type,
    hook,
    clearStyle,
    error,
  } = props;

  return (
    <div className={style.wrapper}>
      <input
        {...hook}
        type={type}
        disabled={disabled}
        className={cls(
          style.Input,
          { [style.disabled]: disabled, [style.clearStyle]: clearStyle },
          [className]
        )}
        placeholder={placeholder}
      />
      {!!error && <span className={style.error}>{error}</span>}
    </div>
  );
});
