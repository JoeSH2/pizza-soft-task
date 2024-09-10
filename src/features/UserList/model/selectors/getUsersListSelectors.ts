import { RootState } from '@/app/store/store.ts';

export const getUserListSelectors = (state: RootState) => state.userList.users;
export const getUsersListFilteredSelectors = (state: RootState) =>
  state.userList.filteredUsers;
export const getUserListSortedBySelectors = (state: RootState) =>
  state.userList.sortedBy;
export const getUserListFilteredByArchive = (state: RootState) =>
  state.userList.filteredByArchive;
export const getUserListFilteredByRole = (state: RootState) =>
  state.userList.filteredByRole;
