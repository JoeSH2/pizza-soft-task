import { FC } from 'react';

import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

export const UserListLoading: FC = () => {
  return (
    <FlexRow alignItems={'center'} justifyContent={'center'}>
      ...ЗАГРУЗКА...
    </FlexRow>
  );
};
