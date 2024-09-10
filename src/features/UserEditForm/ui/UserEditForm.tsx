import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IUser, userAction } from '@/entities/User';
import { getUserSelector } from '@/entities/User';
import {
  useEditUserMutation,
  useLazyGetUserByIdQuery,
} from '@/entities/User/model/api/apiUserEdit.ts';
import SubmitSvg from '@/shared/assets/img/ok.svg';
import {
  birthdayPattern,
  namePattern,
  phonePattern,
} from '@/shared/consts/patterns.ts';
import { roles } from '@/shared/consts/roles.ts';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { Svg } from '@/shared/ui/Svg/Svg.tsx';

import style from './UserEditForm.module.scss';
import { UserEditFormError } from './UserEditFormState/UserEditFormError.tsx';
import { UserEditFormLoading } from './UserEditFormState/UserEditFormLoading.tsx';

interface UserEditFormProps {
  data?: IUser;
}

export const UserEditForm: FC<UserEditFormProps> = () => {
  const dispatch = useAppDispatch();
  const { id: userId } = useParams();
  const user = useSelector(getUserSelector);
  const [trigger, { data, isLoading }] = useLazyGetUserByIdQuery();
  const [updateUser, { isSuccess }] = useEditUserMutation();

  const {
    handleSubmit,
    reset,
    register,
    getValues,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: user,
  });

  const onSubmit = () => {
    if (data) {
      updateUser(getValues());
      dispatch(userAction.initialUser(getValues()));
    }
  };
  const onCancelEdit = () => {
    reset();
  };

  useEffect(() => {
    if (userId) {
      trigger(userId);
      if (data) {
        dispatch(userAction.initialUser(data));
        reset(data);
      }
    }
  }, [data, reset, trigger, userId]);

  if (isLoading) {
    return <UserEditFormLoading />;
  }

  if (!data) {
    return <UserEditFormError />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.UserEditForm}>
      {isSuccess && <Svg className={style.icon} src={SubmitSvg} />}
      <FlexRow justifyContent={'center'} className={style.titleRow}>
        <h3>{user.name}</h3>
      </FlexRow>
      <ul className={style.wrapper}>
        <li className={style.item}>
          <label htmlFor="name">Имя сотрудника</label>
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
          <label htmlFor="dob">День рождения</label>
          <div className={style.wrapperInput}>
            <InputMask
              defaultValue={user.birthday}
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
          <label htmlFor="role">Роль</label>
          <Select
            className={style.input}
            clearStyle
            hook={{ ...register('role', { required: true }) }}
            name="role"
            defaultValue={user.role}
            options={roles}
          />
        </li>
        <li className={style.item}>
          <label htmlFor="phone">Телефон</label>
          <div className={style.wrapperInput}>
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
          <label htmlFor="archive">В архив</label>
          <Input
            hook={{ ...register('isArchive') }}
            id="archive"
            type="checkbox"
          />
        </li>
      </ul>
      <FlexRow
        className={style.submitBlock}
        justifyContent={'flex-end'}
        alignItems={'center'}
      >
        <Button onClick={onCancelEdit} className={style.cancelBtn}>
          Отмена
        </Button>
        <Button type="submit">Сохранить</Button>
      </FlexRow>
    </form>
  );
};
