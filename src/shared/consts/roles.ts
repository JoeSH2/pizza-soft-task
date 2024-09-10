import { UserRole } from '@/shared/consts/userRole.ts';
import { SelectOptions } from '@/shared/ui/Select/Select.tsx';

export const roles: SelectOptions<UserRole>[] = [
  { value: UserRole.COOK, content: UserRole.COOK },
  { value: UserRole.DRIVER, content: UserRole.DRIVER },
  { value: UserRole.WAITER, content: UserRole.WAITER },
];
