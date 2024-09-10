import { IUser } from '@/entities/User';
export type SortKey = Exclude<
  keyof IUser,
  'id' | 'phone' | 'isArchive' | 'role'
>;
export type Direction = 'asc' | 'desc';

const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
};

export const sortingUsers = (
  items: IUser[],
  sortKey: SortKey,
  sortDirection: Direction
): IUser[] => {
  return [...items].sort((a, b) => {
    if (sortKey === 'birthday') {
      const aDate: Date = parseDate(a[sortKey]);
      const bDate: Date = parseDate(b[sortKey]);
      const comparisonResult = aDate.getTime() - bDate.getTime();
      if (sortDirection === 'asc') {
        return -comparisonResult;
      } else {
        return comparisonResult;
      }
    }

    if (sortKey === 'name') {
      const aValue: string = a[sortKey];
      const bValue: string = b[sortKey];
      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });
};
