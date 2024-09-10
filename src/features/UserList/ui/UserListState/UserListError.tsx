import { FC } from 'react';

import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

export const UserListError: FC = () => {
  return (
    <FlexRow alignItems={'center'} justifyContent={'center'}>
      Не удалось получить данные. Попробуйте перезагрузить страницу или
      вернитесь позже
    </FlexRow>
  );
};
