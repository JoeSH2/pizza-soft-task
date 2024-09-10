import {
  DetailedHTMLProps,
  ReactNode,
  SelectHTMLAttributes,
  useMemo,
} from 'react';

import { cls } from '@/shared/lib/cls';

import style from './Select.module.scss';

export type SelectOptions<T> = {
  value: T;
  content: ReactNode;
};

interface SelectProps<T extends string>
  extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  name?: string;
  options?: SelectOptions<T>[];
  hook?: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  clearStyle?: boolean;
  error?: string;
  empty?: string;
}

export const Select = <T extends string>({
  className,
  name,
  options,
  clearStyle,
  hook,
  error,
  empty,
  ...anotherProps
}: SelectProps<T>) => {
  const optionsList = useMemo(
    () =>
      options?.map((opt, i) => (
        <option
          className={style.option}
          value={opt.value}
          key={`${opt.value} ${i}`}
        >
          {opt.content}
        </option>
      )),
    [options]
  );

  return (
    <div className={style.wrapper}>
      <select
        {...hook}
        {...anotherProps}
        className={cls(style.Select, { [style.clearStyle]: clearStyle }, [
          className,
        ])}
        name={name}
      >
        {!!empty && (
          <option value={''} className={style.option}>
            {empty}
          </option>
        )}
        {optionsList}
      </select>
      {!!error && <span className={style.error}>{error}</span>}
    </div>
  );
};
