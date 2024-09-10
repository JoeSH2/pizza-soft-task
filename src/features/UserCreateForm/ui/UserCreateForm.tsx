import { FC } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { IUser } from '@/entities/User';
import { useCreateUserMutation } from '@/entities/User';
import SubmitSvg from '@/shared/assets/img/ok.svg';
import {
  birthdayPattern,
  namePattern,
  phonePattern,
} from '@/shared/consts/patterns.ts';
import { roles } from '@/shared/consts/roles.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { Svg } from '@/shared/ui/Svg/Svg.tsx';

import style from './UserCreateForm.module.scss';

export const UserCreateForm: FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      name: '',
      role: '',
      birthday: '',
      phone: '',
    },
  });
  const [createUser, { isSuccess }] = useCreateUserMutation();
  const onSubmit = () => {
    createUser(getValues());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.UserCreateForm}>
      {isSuccess && <Svg className={style.icon} src={SubmitSvg} />}
      <FlexRow justifyContent={'center'} className={style.titleRow}>
        <h3>Добавить сотрудника</h3>
      </FlexRow>
      <ul className={style.wrapper}>
        <li className={style.item}>
          <label htmlFor="">Имя сотрудника</label>
          <Input
            className={style.input}
            clearStyle
            id="name"
            hook={{
              ...register('name', {
                required: 'введите имя',
                pattern: namePattern,
              }),
            }}
            placeholder={'Введите имя'}
            error={errors.name?.message}
          />
        </li>
        <li className={style.item}>
          <label htmlFor="">Дата рождения</label>
          <div className={style.rowInput}>
            <InputMask
              className={style.input}
              {...register('birthday', {
                required: 'дата рождения обязательна',
                pattern: birthdayPattern,
              })}
              mask="**.**.****"
              placeholder={'Введите дату рождения'}
            />
            {errors.birthday && (
              <span className={style.error}>{errors.birthday.message}</span>
            )}
          </div>
        </li>
        <li className={style.item}>
          <label htmlFor="">Роль</label>
          <Select
            empty={'Выберите из списка'}
            error={errors.role?.message}
            className={style.input}
            clearStyle
            hook={{
              ...register('role', {
                required: 'выберите роль',
                validate: (value) =>
                  value !== '' || 'Пожалуйста, выберите опцию.',
              }),
            }}
            name="role"
            options={roles}
          />
        </li>
        <li className={style.item}>
          <label htmlFor="">Телефон</label>
          <div className={style.rowInput}>
            <InputMask
              className={style.input}
              {...register('phone', {
                required: 'введите номер телефона',
                pattern: phonePattern,
              })}
              mask="+7 (***) ***-****"
              placeholder={'Введите номер телефона'}
            />
            {errors.phone && (
              <span className={style.error}>{errors.phone.message}</span>
            )}
          </div>
        </li>
        <li className={style.item}>
          <label htmlFor="">В архив</label>
          <Input
            hook={{ ...register('isArchive') }}
            id="archive"
            type="checkbox"
          />
        </li>
      </ul>
      <FlexRow justifyContent={'flex-end'}>
        <Button type={'submit'}>Добавить</Button>
      </FlexRow>
    </form>
  );
};
