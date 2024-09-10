import { FC } from 'react';

import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

export const UserEditFormError: FC = () => {
  return (
    <FlexColumn
      fullHeight
      fullWight
      alignItems={'center'}
      justifyContent={'center'}
    >
      <h2>Ошибка получения данных о пользователе</h2>
      <p>перезагрузите страницу или вернитесь поззже</p>
    </FlexColumn>
  );
};
