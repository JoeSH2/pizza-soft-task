import { FC } from 'react';

import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

export const UserEditFormLoading: FC = () => {
  return (
    <FlexColumn
      fullHeight
      fullWight
      alignItems={'center'}
      justifyContent={'center'}
    >
      <h2>...LOADING...</h2>
    </FlexColumn>
  );
};
